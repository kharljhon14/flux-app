import { sql } from '@/db';
import { compare } from 'bcrypt';
import { NextResponse } from 'next/server';

import { SignJWT } from 'jose';

export async function POST(request: Request) {
  const json = await request.json();

  const res = await sql('select id, username, password from users where username ilike $1', [
    json.username,
  ]);

  if (res.rowCount == 0) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const user = res.rows[0];

  const match = await compare(json.password, user.password);

  if (!match) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  const token = await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime('2w')
    .sign(new TextEncoder().encode('token-secret'));

  const response = NextResponse.json({ message: 'Login success' });

  // Prevent cors attack
  response.cookies.set('jwt-token', token, { sameSite: 'strict', httpOnly: true, secure: true });

  return response;
}
