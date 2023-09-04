import PostContainer from '@/components/PostContainer';
import ProfileForm from './ProfileForm';

export default async function Profile() {
  return (
    <main className="space-y-8">
      <ProfileForm />
      <PostContainer />
    </main>
  );
}
