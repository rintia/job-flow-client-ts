import { signIn, signOut, signUp } from "@/lib/auth-client";

export interface RegisterData {
  name: string;
  email: string;
 password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const authService = {
  async signUp(data: RegisterData) {
    return await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  },

  async signIn(data: LoginData) {
    return await signIn.email({
      email: data.email,
      password: data.password,
    });
  },

  async signOut() {
    return await signOut();
  },
};