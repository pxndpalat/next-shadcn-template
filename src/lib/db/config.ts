import { z } from "zod";

const databaseEnvironmentSchema = z.object({
  DATABASE_HOST: z.string().trim().min(1, "is required"),
  DATABASE_PORT: z.coerce.number().int().min(1).max(65_535).default(3306),
  DATABASE_USER: z.string().trim().min(1, "is required"),
  DATABASE_PASSWORD: z.string(),
  DATABASE_NAME: z.string().trim().min(1, "is required"),
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

export function getDatabaseConfig() {
  const environment = getDatabaseEnvironment();

  return {
    host: environment.DATABASE_HOST,
    port: environment.DATABASE_PORT,
    user: environment.DATABASE_USER,
    password: environment.DATABASE_PASSWORD,
    database: environment.DATABASE_NAME,
  };
}

export function getDatabaseUrl() {
  const config = getDatabaseConfig();
  const url = new URL("mysql://localhost");

  url.hostname = config.host;
  url.port = String(config.port);
  url.username = config.user;
  url.password = config.password;
  url.pathname = `/${config.database}`;

  return url.toString();
}
