import { User } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";
var jwt = require("jsonwebtoken");
import crypto from "crypto";

interface JwtPayload {
  user: any;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const hashPassword = (password: string): string => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return `${salt}:${hash}`;
};

const comparePassword = (password: string, hashedPassword: string): boolean => {
  const [salt, hash] = hashedPassword.split(":");
  const derivedHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  return hash === derivedHash;
};

export const signJwt = async (user: User): Promise<string> => {
  const secret = process.env.JWT_SECRET || "privatekey"; // Use environment variable or secure config

  return new Promise<string>((resolve, reject) => {
    jwt.sign({ user } as JwtPayload, secret, (err: any, token: string) => {
      if (err) {
        reject(err);
      } else {
        resolve(token as string);
      }
    });
  });
};

function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function isUser(token: string | undefined) {
  if (!token) return null;
  let user = JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString()
  ).user;
  if (user && user.email) {
    return true;
  }
  return false;
}

export { cn, hashPassword, comparePassword, parseJwt, isUser };
