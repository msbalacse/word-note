"use client";
import { getUser } from "@/services/firebaseActions";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserDetails {
  email?: string;
  username: string;
  password: string;
}

interface AuthContextProps {
  user: UserDetails | null;
  login: (userData: UserDetails) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => false,
  logout: () => {},
});

const USER_STORAGE_KEY = "user";
const EXPIRATION_TIME = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDetails | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const storedTime = parsedUser.timestamp;
      const currentTime = new Date().getTime();

      if (currentTime - storedTime < EXPIRATION_TIME) {
        console.log("User data is still valid");
        router.push("/dashboard");
        setUser(parsedUser.user);
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    }
  }, [router]);

  const login = async (userData: UserDetails) => {
    const data = await getUser(userData.username);
    console.log(data);
    if (data.success) {
      const userInfo = {
        email: data.data?.email as string,
        username: data.data?.username as string,
        password: "",
      };
      const timestamp = new Date().getTime();
      localStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify({ user: userInfo, timestamp })
      );
      setUser(userInfo);
    }
    return data.success;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
