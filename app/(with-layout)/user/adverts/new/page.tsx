import { auth } from '@/auth';
import { UserNewAdvert } from '@/components';

const NewAdvertPage = async () => {
  const session = await auth();

  return <UserNewAdvert userId={session?.user.id ?? ''} />;
};

export default NewAdvertPage;
