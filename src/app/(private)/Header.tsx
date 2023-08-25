'use client';

import User from '@/components/User';
import useSWR from 'swr';

export default function Header() {
  const { data, error, isLoading } = useSWR('api/users/profile');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <header className="flex w-full p-5 bg-gray-800 my-2 justify-between items-center">
      <div>
        <h1 className="font-mono text-lg">Flux</h1>
      </div>

      <div>
        <User
          user={data.data}
          href="account"
        />
      </div>
    </header>
  );
}
