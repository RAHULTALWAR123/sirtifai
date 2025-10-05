/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { PrismaClient, PaymentStatus } from '@prisma/client';

const prisma = new PrismaClient();

// Function to generate invoice number
function generateInvoiceNumber(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `SRT/INT/${year}${month}${day}/${random}`;
}

// Function to generate UUID for invoice link
function generateInvoiceLink(): string {
  return crypto.randomUUID();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
      selectedType,
      userData
    } = body;

    // Verify signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is verified successfully
      
      // Find the student record by razorpay order ID
      const student = await prisma.student.findFirst({
        where: {
          razorpayOrderId: razorpay_order_id,
        },
      });

      if (!student) {
        return NextResponse.json({
          success: false,
          message: 'Student record not found',
        }, { status: 404 });
      }

      // Generate invoice number and link
      const invoiceNumber = generateInvoiceNumber();
      const invoiceLink = generateInvoiceLink();

      // Update student record with payment details
      const updatedStudent = await prisma.student.update({
        where: {
          id: student.id,
        },
        data: {
          paymentStatus: PaymentStatus.COMPLETED,
          paymentId: razorpay_payment_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          paymentMethod: 'Razorpay',
          paymentDate: new Date(),
          invoiceNumber: invoiceNumber,
          invoiceLink: invoiceLink,
        },
      });

      console.log('Payment verified and saved successfully');
      console.log('Student ID:', updatedStudent.id);
      console.log('Payment ID:', razorpay_payment_id);
      console.log('Order ID:', razorpay_order_id);
      console.log('Invoice Number:', invoiceNumber);


      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        studentId: updatedStudent.id,
        invoiceNumber: invoiceNumber,
        invoiceLink: `/invoice/${invoiceLink}`,
      }, { status: 200 });

    } else {
      // Invalid signature - mark payment as failed
      await prisma.student.updateMany({
        where: {
          razorpayOrderId: razorpay_order_id,
        },
        data: {
          paymentStatus: PaymentStatus.PROCESSING,
        },
      });

      return NextResponse.json({
        success: false,
        message: 'Invalid signature - payment verification failed',
      }, { status: 400 });
    }

  } catch (error: any) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({
      success: false,
      message: 'Payment verification failed',
      error: error.message,
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}