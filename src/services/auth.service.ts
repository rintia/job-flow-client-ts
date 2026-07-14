import { signUp } from "@/lib/auth-client";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function registerUser(data: RegisterData) {
  const result = await signUp.email({
    name: data.name,
    email: data.email,
    password: data.password,
  });

  return result;
}