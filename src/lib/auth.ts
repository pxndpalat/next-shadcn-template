import { prismaAdapter } from "@better-auth/prisma-adapter";
import { betterAuth } from "better-auth/minimal";
import { nextCookies } from "better-auth/next-js";

import { prisma } from "@/lib/db/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    database: {
      joins: true,
    },
  },
  plugins: [nextCookies()],
});
