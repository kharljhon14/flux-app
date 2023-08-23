import { sql } from '@/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const json = await request.json();

  const res = await sql('select id, username from users where username ilike $1', [json.username]);

  if (res.rowCount > 0) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  const saltRaounds = 10;

  const hashedPassword = await hash(json.password, saltRaounds);

  await sql('insert into users(username,password) values ($1, $2)', [
    json.username,
    hashedPassword,
  ]);

  return NextResponse.json({ message: 'Registration Sucess' }, { status: 201 });
}
