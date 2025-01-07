"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values) {
        try {
            setIsLoading(true);
            const { username, password } = values;

            if (username === "admin" && password === "admin123") {
                // Set authentication state
                localStorage.setItem("isLoggedIn", "true");

                // Show success message and redirect
                toast.success("Login successful!");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 1000);
            } else {
                toast.error("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error", error);
            toast.error("Failed to submit the form. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full max-w-[450px] p-8 bg-white rounded-3xl shadow-lg">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#545cff] to-[#1f2246] bg-clip-text text-transparent">
                    Welcome Back!
                </h1>
                <p className="text-gray-500 mt-2">
                    Please sign in to continue dashboard page
                </p>
            </div>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">
                                    Username
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="admin"
                                        type="text"
                                        className="h-12 rounded-xl"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700">
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <PasswordInput
                                        placeholder="admin123"
                                        className="h-12 rounded-xl"
                                        disabled={isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full h-12 rounded-xl bg-[#545cff] hover:bg-[#4147cc] transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
