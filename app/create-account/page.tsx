"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { createUser } from "@/services/firebaseActions";
import { toast } from "react-toastify";

const CreateAccount = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleCreateAccount = () => {
        if (!email || !username || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        createUser(email, username, password);
        toast.success(`Account created with: email => ${email}`); 
        console.log("Account created with:", { email, username, password });
        router.push("/login");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <Card className="w-full sm:w-96">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
                    <CardDescription className="text-sm text-gray-500">Sign up to start using the app</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full"
                        />
                        <Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full"
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full"
                        />
                        <Input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full"
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button onClick={handleCreateAccount} className="w-full mt-4">
                            Create Account
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateAccount;
