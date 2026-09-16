import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { getDatabaseConfig } from "@/lib/db/config";
import { PrismaClient } from "../../generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const database = getDatabaseConfig();
const isLocalDatabase = ["localhost", "127.0.0.1", "::1"].includes(
  database.host,
);
const adapter = new PrismaMariaDb({
  ...database,
  ssl: true,
  connectTimeout: 10_000,
  acquireTimeout: 30_000,
  connectionLimit: 5,
  allowPublicKeyRetrieval: isLocalDatabase,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
