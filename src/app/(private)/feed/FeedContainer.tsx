'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import Button from '@/components/Button';
import FeedList from './FeedList';

export default function FeedContainer() {
  const [count, setCount] = useState<number>(1);
  const [pages, setPages] = useState<ReactNode[]>([]);

  useEffect(() => {
    const newPages: ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      newPages.push(
        <FeedList
          index={i}
          key={i}
        />
      );
    }
    setPages(newPages);
  }, [count]);

  return (
    <div>
      {pages}
      <div>
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>Load More</Button>
      </div>
    </div>
  );
}
