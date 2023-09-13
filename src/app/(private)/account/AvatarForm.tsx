'use client';

import { User } from '@/types';
import useSWR from 'swr';

import Image from 'next/image';

export default function AvatarForm() {
  const { data, error, isLoading } = useSWR('/api/users/profile');

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  const user: User = data.data;

  return (
    <form action="">
      {user.avatar ? (
        <div>
          <Image
            src={user.avatar}
            alt={user.avatar}
            width={200}
            height={200}
            className="rounded-full m-auto my-5"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      ) : (
        <div className="bg-gray-600 rounded-full m-auto my-5 h-[200px] w-[200px]"></div>
      )}
      <input type="file" />
    </form>
  );
}
