'use client';

import { useState } from 'react';
import Button from './Button';
import PostList from './PostList';
import useSWR from 'swr';

export default function PostContainer() {
  const [count, setCount] = useState(1);

  const { data, isLoading, error } = useSWR('/api/users/profile');

  if (error) return <div>Something went wrong</div>;
  if (isLoading) return <div>Loading ...</div>;

  const pages = [];

  if (data) {
    for (let i = 0; i < count; i++) {
      pages.push(
        <PostList
          index={i}
          username={data.data.username}
        />
      );
    }
  }

  return (
    <div>
      {pages}
      <div>
        <Button onClick={() => setCount(count + 1)}>Load more</Button>
      </div>
    </div>
  );
}
