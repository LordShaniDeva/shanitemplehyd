import { secrets } from '@/config';
import { randomBytes } from 'crypto';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const db = {
  user: {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  },
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { username, password } = body;
    const condition =
      db.user.username?.includes(username) &&
      db.user.password?.includes(password);

    if (!username && !password) {
      return NextResponse.json({
        message: 'Username and password are required.',
      });
    }
    if (!condition) {
      return NextResponse.json({
        message: 'Please verify your username and password.',
      });
    }
    if (condition) {
      const token = randomBytes(16).toString('hex');
      cookies().set(secrets.ADMIN_TOKEN, token);
      return NextResponse.json({
        token,
        message: 'Login successfully',
      });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
};
export const DELETE = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { token } = body;
    if (!token) {
      return NextResponse.json({
        message: 'Admin token is required.',
      });
    }
    if (cookies().get(secrets.ADMIN_TOKEN)?.value === token) {
      cookies().delete(secrets.ADMIN_TOKEN);
      return NextResponse.json({
        message: 'Logout successfully',
      });
    } else {
      return NextResponse.json({
        message: 'Please verify your token.',
      });
    }
  } catch (error) {
    return NextResponse.json(error);
  }
};
