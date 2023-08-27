import { Post } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  post: Post;
}

export default function Post({ post }: Props) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const createdAt = new Date(post.created_at);

  return (
    <div>
      <div className="flex items-center space-x-5">
        <div className=" flex-shrink-0">
          <Link href={`/${post.username}`}>
            {post.avatar ? (
              <Image
                height={40}
                width={40}
                src={post.avatar}
                alt={post.username}
                className="rounded-full"
                style={{ width: '40px', height: '40px' }}
              />
            ) : (
              <div className="bg-gray-600 rounded-full w-10 h-10 mr-3"></div>
            )}
          </Link>
        </div>
        <div className="flex flex-col">
          <Link
            className="font-bold"
            href={`/${post.username}`}
          >
            {post.username}
          </Link>
          <div className="text-gray-400 text-xs">
            {createdAt.toLocaleDateString('en-US', options)}
          </div>
          <div>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
