"use client";

import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation, useConvex } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { useAuth } from "@/context/AuthContext";
import AuthMonster from "./AuthMonster";
import { Loader2 } from "lucide-react";

const authSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  name: z.string().optional(),
});

type AuthFormValues = z.infer<typeof authSchema>;

interface AuthFormProps {
  type: "login" | "signup";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isHoveringSubmit, setIsHoveringSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();
  const convex = useConvex();
  
  const signupMutation = useMutation(api.auth.signup);
  const loginMutation = useMutation(api.auth.login);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const emailValue = form.watch("email") || "";
  const passwordValue = form.watch("password") || "";
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  const onSubmit = async (data: AuthFormValues) => {
    if (!convex) {
      toast.error("Backend connection is not available. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (type === "signup") {
        if (!data.name) {
          toast.error("Name is required for signup");
          setIsSubmitting(false);
          return;
        }
        await signupMutation({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        toast.success("Account created! Please log in.");
        navigate("/login");
      } else {
        const user = await loginMutation({
          email: data.email,
          password: data.password,
        });
        setAuthUser({
          id: user.userId,
          name: user.name,
          email: user.email,
          role: user.role || "user",
        });
        toast.success(`Welcome back, ${user.name}!`);
        navigate("/dashboard");
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Authentication failed";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] shadow-2xl rounded-[2rem] overflow-hidden">
      <CardHeader className="space-y-1 pt-8 text-center">
        <AuthMonster 
          isPasswordFocused={isPasswordFocused} 
          emailValue={emailValue}
          passwordLength={passwordValue.length}
          isEmailValid={isEmailValid}
          isHoveringSubmit={isHoveringSubmit}
        />
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
                      <Input 
                        placeholder="John Doe" 
                        className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10" 
                        {...field} 
                      />
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
                    <Input 
                      placeholder="name@example.com" 
                      className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10" 
                      {...field} 
                    />
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
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10" 
                      {...field}
                      onFocus={() => setIsPasswordFocused(true)}
                      onBlur={() => setIsPasswordFocused(false)}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              onMouseEnter={() => setIsHoveringSubmit(true)}
              onMouseLeave={() => setIsHoveringSubmit(false)}
              className="w-full h-12 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold shadow-lg shadow-blue-500/20"
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
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
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
