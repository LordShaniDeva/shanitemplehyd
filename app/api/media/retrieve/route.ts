import { connectToMongo } from '@/database/mongo';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { bucket } = await connectToMongo();
  const id = req.nextUrl.searchParams.get('id');
  const files = await bucket.find().toArray();
  return NextResponse.json(files);
}
