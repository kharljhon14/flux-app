'use client';

import Button from '@/components/Button';

import Textarea from '@/components/Textarea';
import { FormEvent, useState } from 'react';
import { useSWRConfig } from 'swr';

export default function ProfileForm() {
  const { mutate } = useSWRConfig();

  const [post, setPost] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('api/posts', {
      method: 'POST',
      body: JSON.stringify({ content: post }),
    });

    if (res.ok) {
      setPost('');
      mutate((key) => typeof key === 'string' && key.startsWith('/api/posts'));
    }
  };

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <Textarea
        placeholder="What's on your mind?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <Button>Post</Button>
    </form>
  );
}
