import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { getDatabaseUrl } from "@/lib/db/config";
import { PrismaClient } from "../../generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const databaseUrl = getDatabaseUrl();
const parsedDatabaseUrl = new URL(databaseUrl);
const databaseHost = parsedDatabaseUrl.hostname.replace(/^\[|\]$/g, "");
const adapter = new PrismaMariaDb({
  host: databaseHost,
  port: Number(parsedDatabaseUrl.port || 3306),
  user: decodeURIComponent(parsedDatabaseUrl.username),
  password: decodeURIComponent(parsedDatabaseUrl.password),
  database: decodeURIComponent(parsedDatabaseUrl.pathname.slice(1)),
  allowPublicKeyRetrieval: true,
  connectionLimit: 5,
});

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
