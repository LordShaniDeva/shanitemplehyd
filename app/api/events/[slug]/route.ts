import EventModel from '@/database/models/event';
import { connectToMongo } from '@/database/mongo';
import { NextRequest, NextResponse } from 'next/server';

type RouteParams = {
  params: {
    slug: string;
  };
};
/**
 * Get an event
 * @param request
 * @returns
 */
export const GET = async (request: NextRequest, { params }: RouteParams) => {
  try {
    const body = await request.json();
    await connectToMongo();
    const event = await EventModel.findOne({
      slug: params.slug,
    });
    return NextResponse.json({
      message: 'Event fetched succesfully.',
      data: event,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
/**
 * Update an event
 * @param request
 * @returns
 */
export const PUT = async (request: NextRequest, { params }: RouteParams) => {
  try {
    const body = await request.json();
    await connectToMongo();
    const event = await EventModel.findOneAndUpdate(
      {
        slug: params.slug,
      },
      body,
      {
        new: true,
      }
    );
    return NextResponse.json({
      message: 'Event updated succesfully.',
      data: event,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
/**
 * Delete an event
 * @param request
 * @returns
 */
export const DELETE = async (request: NextRequest, { params }: RouteParams) => {
  try {
    await connectToMongo();
    const event = await EventModel.deleteOne({
      slug: params.slug,
    });
    return NextResponse.json({
      message: 'Event deleted succesfully.',
    });
  } catch (error) {
    return NextResponse.json(error);
  }
};
