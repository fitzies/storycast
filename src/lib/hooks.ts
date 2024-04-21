import { useCookies } from "next-client-cookies";
import { parseJwt } from "./utils";
import { User } from "@prisma/client";

const useUser = () => {
  const cookies = useCookies();
  let user: User | null = parseJwt(cookies.get("user")!).user ?? null;

  return { user };
};

export { useUser };
