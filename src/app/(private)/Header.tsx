'use client';

import User from '@/components/User';
import useSWR from 'swr';
import SignOut from './SignOut';

export default function Header() {
  const { data, error, isLoading } = useSWR('api/users/profile');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <header className="flex w-full p-5 bg-gray-800 my-2 justify-between rounded-lg items-center">
      <div>
        <h1 className="font-mono text-lg">Flux</h1>
      </div>

      <div className="flex space-x-2">
        <User
          user={data.data}
          href="account"
        />
        <SignOut />
      </div>
    </header>
  );
}
