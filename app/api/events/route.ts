import EventModel from '@/database/models/event';
import { connectToMongo } from '@/database/mongo';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Get all events
 * @param request
 * @returns
 */
export const GET = async (request: NextRequest) => {
  const limit = request.nextUrl.searchParams.get('limit');
  try {
    await connectToMongo();
    const events = await EventModel.find({}).limit(Number(limit));
    return NextResponse.json({
      message: 'All events fetched.',
      data: events,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
/**
 * Create an event
 * @param request
 * @returns
 */
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    await connectToMongo();
    const event = await EventModel.create(body);
    return NextResponse.json({
      message: 'Event created succesfully.',
      data: event,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
