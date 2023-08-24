'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>('');

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (password !== confirmPassword) {
      setErrors((prev) => [...prev, 'Passwords do not match']);

      return;
    }

    if (res.ok) {
      router.push('/signin');
    } else {
      alert('Sign up failed!');
    }
  };

  return (
    <form
      className="bg-gray-900 p-5 max-w-md w-full rounded-md gap-2 flex flex-col"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="text-center">
        <h3 className="font-semibold text-lg">Sign Up</h3>
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

      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password">Confirm Password</label>
        <Input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="Confirm Password"
        />
      </div>
      <Button className="mt-4">Sign Up</Button>
    </form>
  );
}
