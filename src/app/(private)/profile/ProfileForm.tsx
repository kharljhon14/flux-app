'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import { FormEvent, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

export default function ProfileForm() {
  //   const { data, isLoading, error } = useSWR('/api/users/profile');

  //   if (error) return <div>Failed to load</div>;

  //   if (isLoading) return <div>Loading ...</div>;

  const { mutate } = useSWRConfig();

  const [post, setPost] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('api/posts', {
      method: 'POST',
      body: JSON.stringify({ content: post }),
    });
  };

  return (
    <form
      className="space-y-5"
      action=""
    >
      <Textarea
        placeholder="What's on your mind?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <Button className="w-full">Post</Button>
    </form>
  );
}
