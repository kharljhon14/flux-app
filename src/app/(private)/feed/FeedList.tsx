import Post from '@/components/Post';
import { Post as PostI } from '@/types';
import useSWR from 'swr';

interface Props {
  index: number;
}

export default function FeedList({ index }: Props) {
  const { data, isLoading, error } = useSWR(`/api/posts/feed?page=${index}`);

  if (error) return <div>Failed to Load</div>;

  if (isLoading) return <div>Loading ...</div>;

  return (
    <ul>
      {data.data.map((post: PostI) => (
        <li
          className="my-5"
          key={post.id}
        >
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
