'use client';

import Button from '@/components/Button';
import { useState } from 'react';
import FollowingList from './FollowingList';

export default function FollowingContainer() {
  const [count, setCount] = useState(1);

  const pages = [];

  for (let i = 0; i < count; i++) {
    pages.push(<FollowingList index={i} />);
  }

  console.log(pages);
  return (
    <div>
      {pages}
      <div className="flex justify-center w-full">
        <Button onClick={() => setCount(count + 1)}>Load More</Button>
      </div>
    </div>
  );
}
