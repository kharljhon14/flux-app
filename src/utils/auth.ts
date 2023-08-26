import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

export async function getJWTPayload() {
  const cookieStore = cookies();

  const token = cookieStore.get('jwt-token');
  const secret = new TextEncoder().encode('token-secret');

  if (!token) return;

  const { payload, protectedHeader } = await jwtVerify(token?.value, secret);

  return payload;
}
