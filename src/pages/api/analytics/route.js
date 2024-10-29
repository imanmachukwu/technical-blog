import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // Get the data from the request
    const data = await request.json();

    // Store the page view in the database
    await prisma.pageView.create({
      data: {
        page: data.path,
        sessionId: data.sessionId,
        referrer: data.referrer || '',
        screenSize: data.screenSize,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to track' }, { status: 500 });
  }
}