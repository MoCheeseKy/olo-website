import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URI || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URI is not set in environment variables");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
