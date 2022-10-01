import { useEffect } from 'react';
import { NextPage } from 'next';

import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.push(`/login`);
  }, []);

  if (!user) {
    return <div />;
  }

  return (
    <div>
      <h1>Welcome to Tauri!</h1>
    </div>
  );
};

export default Home;
