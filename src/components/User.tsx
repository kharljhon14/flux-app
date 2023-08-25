import { User } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  user: User;
  href?: string;
}

export default function User({ user, href }: Props) {
  return (
    <div>
      <Link
        href={`/${href || user.username}`}
        className="flex items-center"
      >
        <div>
          {user.avatar ? (
            <Image
              height={40}
              width={40}
              src={user.avatar}
              alt={user.username}
              className="rounded-full mr-3"
              style={{ width: '40px', height: '40px' }}
            />
          ) : (
            <div className="bg-gray-600 rounded-full w-10 h-10 mr-3"></div>
          )}
        </div>
        <div>{user.username}</div>
      </Link>
    </div>
  );
}
