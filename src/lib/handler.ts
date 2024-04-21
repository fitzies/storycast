"use server";

import prisma from "./prisma";
import { comparePassword, hashPassword, parseJwt, signJwt } from "./utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const registerUser = async (email: string, password: string) => {
  const hashedPassword = hashPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return user;
};

const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("The email does not exist.");
  }
  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("The password does not exist.");
  }
  return user;
};

const handleAuthForm = async (data: FormData) => {
  const email = data.get("email")?.toString() ?? null;
  const password = data.get("password")?.toString() ?? null;
  const confirmPassword = data.get("confirm-password")?.toString() ?? null;

  if (
    !password ||
    !email ||
    (confirmPassword && password !== confirmPassword)
  ) {
    throw new Error("Invalid form data");
  }

  if (confirmPassword) {
    const user = await registerUser(email, password);
    const token = await signJwt(user);
    cookies().set("user", token);
    // Redirect to dashboard
    redirect("/dashboard");
  } else {
    const user = await loginUser(email, password);
    const token = await signJwt(user);
    cookies().set("user", token);
    // Redirect to dashboard
    redirect("/dashboard");
  }
};

export { handleAuthForm };
