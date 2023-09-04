import PostContainer from '@/components/PostContainer';
import ProfileForm from './ProfileForm';

export default async function Profile() {
  return (
    <main>
      <ProfileForm />
      <PostContainer />
    </main>
  );
}
