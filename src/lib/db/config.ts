import { z } from "zod";

const databaseEnvironmentSchema = z.object({
  DATABASE_URL: z.url("must be a valid database URL"),
});

type DatabaseEnvironment = z.infer<typeof databaseEnvironmentSchema>;

let cachedDatabaseEnvironment: DatabaseEnvironment | undefined;

function getDatabaseEnvironment() {
  if (cachedDatabaseEnvironment) {
    return cachedDatabaseEnvironment;
  }

  const result = databaseEnvironmentSchema.safeParse(process.env);

  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");

    throw new Error(`Invalid database configuration (${details})`);
  }

  cachedDatabaseEnvironment = result.data;
  return cachedDatabaseEnvironment;
}

export function getDatabaseUrl() {
  return getDatabaseEnvironment().DATABASE_URL;
}
