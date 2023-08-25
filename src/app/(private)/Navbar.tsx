import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex max-w-lg w-full p-5 bg-gray-800 rounded-lg my-2">
      <ul className="flex justify-around w-full">
        <li>
          <Link href="/">Feed</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
        <li>
          <Link href="/">Following</Link>
        </li>
        <li>
          <Link href="/">Followers</Link>
        </li>
      </ul>
    </nav>
  );
}
