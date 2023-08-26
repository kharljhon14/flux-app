import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="flex max-w-lg w-full p-5 bg-gray-800 rounded-lg my-2">
      <ul className="flex justify-around w-full">
        <li>
          <Link
            className={pathName.startsWith('/feed') ? 'text-blue-500' : ''}
            href="/feed"
          >
            Feed
          </Link>
        </li>
        <li>
          <Link
            className={pathName.startsWith('/profile') ? 'text-blue-500' : ''}
            href="/profile"
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            className={pathName.startsWith('/following') ? 'text-blue-500' : ''}
            href="/following"
          >
            Following
          </Link>
        </li>
        <li>
          <Link
            className={pathName.startsWith('/follower') ? 'text-blue-500' : ''}
            href="/follower"
          >
            Followers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
