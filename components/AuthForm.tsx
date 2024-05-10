"use client";

import { useState } from "react";
import { z } from "zod";
import { Logo } from "./Logo";

import { zodResolver } from "@hookform/resolvers/zod";

import { AuthformSchema } from "@/lib/validation/auth";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { InputController } from "./controller/InputController";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { signIn, signUp } from "@/lib/actions/user.action";

export const AuthForm = (props: AuthFormProps): JSX.Element => {
  const router = useRouter();
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState(null);
  const { type } = props;
  const isSignIn = type === "sign-in";

  const formSchema = AuthformSchema({ type });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      // sign up with appwrite  ^ create plaid token
      if (type === "sign-up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }
      if (type === "sign-in") {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) {
          router.push("/");
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Logo page="auth" />
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : isSignIn ? "Sign In" : "Sign up"}
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
            {type === "sign-up" && (
              <>
                <div className="flex gap-4">
                  <InputController
                    control={form.control}
                    placeholder="Enter your first name"
                    name="firstName"
                    label="First Name"
                  />
                  <InputController
                    control={form.control}
                    placeholder="Enter your last name"
                    name="lastName"
                    label="Last Name"
                  />
                </div>
                <InputController
                  control={form.control}
                  placeholder="Enter your specific"
                  name="address1"
                  label="Address"
                />
                <InputController
                  control={form.control}
                  placeholder="Enter your city"
                  name="city"
                  label="City"
                />
                <div className="flex gap-4">
                  <InputController
                    control={form.control}
                    placeholder="Example: NY"
                    name="state"
                    label="State"
                  />
                  <InputController
                    control={form.control}
                    placeholder="Example: 11101"
                    name="postalCode"
                    label="Postal Code"
                  />
                </div>
                <div className="flex gap-4">
                  <InputController
                    control={form.control}
                    placeholder="YYYY-MM-DD"
                    name="dateOfBirth"
                    label="Date of Birth"
                  />
                  <InputController
                    control={form.control}
                    placeholder="Example: 1234"
                    name="ssn"
                    label="SSN"
                  />
                </div>
              </>
            )}
            <InputController
              control={form.control}
              placeholder="Enter your Email"
              name="email"
              label="Email"
              type="email"
            />
            <div className="relative">
              <InputController
                control={form.control}
                placeholder="Enter a Strong Pass"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
              />
              <Button
                className="absolute right-0 top-0 translate-y-[35px]"
                type="button"
                variant="ghost"
                onClick={() => setshowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
            <Button
              loading={loading}
              fullWidth
              className="form-btn "
              type="submit"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
          </form>
        </Form>
      )}
      <footer className="flex justify-center gap-1">
        <p className="text-15 font-normal text-gray-600">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
        </p>
        <Link className="form-link" href={isSignIn ? "/sign-up" : "/sign-in"}>
          {isSignIn ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};
