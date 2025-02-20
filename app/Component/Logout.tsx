"use client"
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const LogoutButton = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
