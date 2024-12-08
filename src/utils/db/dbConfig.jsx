import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:jsDB9miH5Caw@ep-polished-cake-a53jpid0.us-east-2.aws.neon.tech/zero2hero?sslmode=require"
);
export const db = drizzle(sql, { schema });
