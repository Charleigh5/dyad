import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './packages/db-schema/schema.ts',
  out: './packages/db-schema/migrations',
  dbCredentials: {
    url: './sqlite.db',
  },
  verbose: true,
  strict: true,
});
