"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export const AuthForm = (props: AuthFormProps): JSX.Element => {
  const [user, setUser] = useState(null);
  const { type } = props;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (valuse: FormSchema) => {};

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Logo page="auth" />
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link Your Account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* {plaid} */}</div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="form-item">
                  <FormLabel className="form-label">Email</FormLabel>
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="input-class"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )}
    </section>
  );
};
