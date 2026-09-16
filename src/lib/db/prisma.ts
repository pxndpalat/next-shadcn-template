import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const database = new URL(databaseUrl);
const isLocalDatabase = ["localhost", "127.0.0.1", "::1"].includes(
  database.hostname,
);
const adapter = new PrismaMariaDb({
  host: database.hostname,
  port: database.port ? Number(database.port) : 3306,
  user: decodeURIComponent(database.username),
  password: decodeURIComponent(database.password),
  database: decodeURIComponent(database.pathname.slice(1)),
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
