import User from '@/components/User';
import { User as UserType } from '@/types';
import useSWR from 'swr';

interface Props {
  index: number;
}

export default function FollowerList({ index }: Props) {
  const { data: useData } = useSWR('/api/users/profile');
  const { data: followerData } = useSWR(
    () => `/api/users/${useData.data.id}/followers?page=${index}`
  );

  if (!followerData) return <div>Loading ...</div>;

  return (
    <ul>
      {followerData.data.map((user: UserType) => (
        <li
          key={user.id}
          className="my-5"
        >
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}
