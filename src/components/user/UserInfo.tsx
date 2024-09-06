import { useAuth } from '@/src/hooks/useAuth';

export const UserInfo = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>{user?.firstName}</p>
      <p>{user?.lastName}</p>
      <p>{user?.email}</p>
    </div>
  );
};
