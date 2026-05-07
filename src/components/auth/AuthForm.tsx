"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const authSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  ...(window.location.pathname === "/signup" ? {
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  } : {}),
});

type AuthFormValues = z.infer<typeof authSchema>;

interface AuthFormProps {
  type: "login" | "signup";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "signup" ? { name: "" } : {}),
    },
  });

  const onSubmit = (data: AuthFormValues) => {
    console.log(`${type} data:`, data);
    toast.success(`${type === "login" ? "Welcome back!" : "Account created!"}`, {
      description: "Authentication logic will be connected to your backend soon.",
    });
  };

  return (
    <Card className="w-full max-w-md border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-2xl rounded-[2rem] overflow-hidden">
      <CardHeader className="space-y-1 pt-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 bg-[#1877F2] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-3xl font-black tracking-tight">
          {type === "login" ? "Welcome Back" : "Create Account"}
        </CardTitle>
        <CardDescription className="text-slate-500 dark:text-slate-400">
          {type === "login" 
            ? "Enter your credentials to access your engine" 
            : "Join the next era of social search intelligence"}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="rounded-xl h-12 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5" onClick={() => toast.info("GitHub auth coming soon")}>
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" className="rounded-xl h-12 border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5" onClick={() => toast.info("Google auth coming soon")}>
            <Mail className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200 dark:border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-[#1a1a1a] px-2 text-slate-500 font-bold tracking-widest">
              Or continue with
            </span>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {type === "signup" && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10" {...field} />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full h-12 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold shadow-lg shadow-blue-500/20">
              {type === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pb-8">
        <div className="text-sm text-center text-slate-500">
          {type === "login" ? (
            <>
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#1877F2] font-bold hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-[#1877F2] font-bold hover:underline">
                Sign in
              </Link>
            </>
          )}
        </div>
        <p className="px-8 text-center text-[10px] text-slate-500 leading-relaxed">
          By clicking continue, you agree to our{" "}
          <button className="underline underline-offset-4 hover:text-[#1877F2]">Terms of Service</button>{" "}
          and{" "}
          <button className="underline underline-offset-4 hover:text-[#1877F2]">Privacy Policy</button>.
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;