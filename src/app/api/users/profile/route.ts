import { sql } from '@/db';
import { getJWTPayload } from '@/utils/auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get current logged int user

  const jwtPayload = await getJWTPayload();

  const res = await sql('select id, username, avatar from users where id = $1', [jwtPayload?.sub]);

  const user = res.rows[0];

  return NextResponse.json({ data: user }, { status: 200 });

  // Fetch user data
  // Return user data
}
