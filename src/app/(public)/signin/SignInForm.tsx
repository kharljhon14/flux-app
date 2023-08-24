'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SignInForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/feed');
    } else {
      alert('Login failed!');
    }
  };

  return (
    <form
      className="bg-gray-900 p-5 max-w-md w-full rounded-md gap-2 flex flex-col"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="text-center">
        <h3 className="font-semibold text-lg">Sign In</h3>
      </div>

      <div>
        <hr />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="username">Username</label>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Username"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
      </div>
      <Button className="mt-4">Sign In</Button>
    </form>
  );
}
