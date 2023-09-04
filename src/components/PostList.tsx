'use client';

import { Post as PostType } from '@/types';
import useSWR from 'swr';
import Post from './Post';

interface Props {
  index: number;
  username: string;
}

export default function PostList({ index, username }: Props) {
  const { data, error, isLoading } = useSWR(() => `/api/posts?page=${index}&username=${username}`);

  if (error) return <div>Something went wrong</div>;

  if (isLoading) return <div>Loading ...</div>;

  return (
    <ul className="space-y-4">
      {data.data.map((post: PostType) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
