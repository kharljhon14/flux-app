import { getClient, sql } from '@/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const json = await request.json();

  const res = await sql('select id, username, password from users where username ilike $1', [
    json.username,
  ]);

  console.log(res.rows[0]);
  return NextResponse.json({ data: res.rows[0] });
}
