"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
  };
  return (
    <nav className='flex justify-between items-center bg-black text-white p-4 shadow-md'>
      <h1>Word Note</h1>
      <Button className='bg-wn-text-blue-light' onClick={handleLogOut}>
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
