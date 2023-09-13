'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const router = useRouter();

  async function handleSignOut() {
    const res = await fetch('/api/logout');

    console.log(res);

    if (res.ok) router.push('/signin');
  }

  return <Button onClick={handleSignOut}>Sign out</Button>;
}
