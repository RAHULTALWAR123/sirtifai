import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Log performance metrics (you can replace this with your preferred analytics service)
    console.log('Performance Metric:', {
      name: data.name,
      value: data.value,
      url: data.url,
      timestamp: new Date(data.timestamp).toISOString(),
    });
    
    // Here you could send to external analytics services like:
    // - Google Analytics
    // - Mixpanel
    // - Custom analytics database
    // - DataDog
    // - New Relic
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process analytics data' },
      { status: 500 }
    );
  }
}
