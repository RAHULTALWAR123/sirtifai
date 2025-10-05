/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { prisma } from '../../../../../lib/prisma';
// import prisma from '@/lib/prisma';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency, receipt, notes, formData, selectedType } = body;

    // Create order in Razorpay
    const options = {
      amount: amount, // amount in paise (799 * 100 = 79900)
      currency: currency,
      receipt: receipt,
      notes: notes,
    };

    const order = await razorpay.orders.create(options);

    // Create initial student record in database with PROCESSING status
    const student = await prisma.student.create({
      data: {
        // Personal Details
        fullName: formData.fullName,
        dateOfBirth: formData.dobYYYY && formData.dobMM && formData.dobDD 
          ? new Date(`${formData.dobYYYY}-${formData.dobMM}-${formData.dobDD}`)
          : new Date(), // Default to current date if not provided
        countryOfCitizenship: formData.citizenship || 'India',
        referralCode: formData.inid || null,

        // Contact Information
        primaryPhone: formData.phone,
        email: formData.email,
        residentialAddress: 'To be updated', // You can add this field to your form
        city: 'To be updated',
        state: 'To be updated',
        zipCode: 'To be updated',
        country: formData.citizenship || 'India',

        // Education
        highestQualification: 'To be updated', // You can add this field to your form
        
        // Professional
        currentOrganization: formData.organization,

        // Identity Document
        idType: 'To be updated',
        idNumber: 'To be updated',

        // Program Selection
        type: selectedType,
        selectedProgram: 'PGCAP', // Your program ID
        programDuration: 1, // Adjust as needed
        programPrice: 799.00, // USD price
        programName: 'Post Graduate Certificate in Applied Psychology',
        
        subtotal: 799.00,
        gstRate: 18,
        gstAmount: 143.82, // 18% of 799
        totalAmount: 942.82,

        // For INR calculation (assuming 1 USD = 83 INR, adjust as needed)
        exchangeRateUsed: 1, // Since payment is in INR, rate is 1
        programPriceINR: 799.00,
        subtotalINR: 799.00,
        gstAmountINR: 143.82,
        totalINR: 942.82,

        // Payment Details
        paymentStatus: 'PROCESSING',
        razorpayOrderId: order.id,

        // Confirmation
        agreedToTerms: formData.confirmations.terms,
        certifiedInformation: formData.confirmations.certify,
      },
    });

    return NextResponse.json({
      success: true,
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      studentId: student.id,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to create order',
      error: error.message,
    }, { status: 500 });
  }
}
