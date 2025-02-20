"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

const Login = () => {
  const { login, user } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const isAuth = await login({ username, password });
    if (isAuth) {
      router.push("/dashboard");
      toast.success(`User login successfully! ${user?.username}`);
    } else {
      setError("invalid username or password");
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 p-6'>
      <Card className='w-full sm:w-96'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Welcome Back</CardTitle>
          <CardDescription className='text-sm text-gray-500'>
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <Input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full'
            />
            <Input
              type='text'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full'
            />
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <Button onClick={handleLogin} className='w-full mt-4'>
              Login
            </Button>
            <div className='mt-4 text-center'>
              <p className='text-sm text-gray-600'>
                Do not have an account?{" "}
                <Link
                  href='/create-account'
                  className='text-blue-500 hover:underline'
                >
                  Create one here
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
