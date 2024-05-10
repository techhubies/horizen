import { z } from "zod";

export const AuthformSchema =({type}:AuthFormProps)=> z.object({
  firstName:type ==="sign-in" ? z.string().optional(): z.string().min(3),
  lastName:type ==="sign-in" ? z.string().optional(): z.string().min(3),
  address1:type ==="sign-in" ? z.string().optional(): z.string().min(30),
  city:type ==="sign-in" ? z.string().optional(): z.string().min(5),
  state:type ==="sign-in" ? z.string().optional(): z.string().min(2).max(2),
  postalCode:type ==="sign-in" ? z.string().optional(): z.string().min(3).max(6),
  dateOfBirth:type ==="sign-in" ? z.string().optional(): z.string().min(3),
  ssn:type ==="sign-in" ? z.string().optional(): z.string().min(3),
  email: z.string().email(),
  password: z
      .string()
      .min(8, { message: "Your password should be at least 8 characters." }),
});
