"use client"
import { getUser } from '@/services/firebaseActions';
import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  user: UserDetails | null;
  login: (userData:UserDetails)=> Promise<boolean>;
  logout: ()=> void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }:{children:any}) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  const login = async (userData:UserDetails) => {
    const data = await getUser(userData.username);
    console.log(data);
    await setUser({email:data.data?.email as string,username:data.data?.username as string,password:""});
    return data.success;
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
