import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const response = NextResponse.json({ message: 'Logout Success' });

  response.cookies.set('jwt-token', '');

  return response;
}
