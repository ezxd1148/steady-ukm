import { createAuth as createConfiguredAuth } from "@steady-ukm/auth";
import { type Database, createPrismaClient } from "@steady-ukm/db";

import { ENV } from "./env.server";

export function getDb(): Database {
  return createPrismaClient(ENV);
}
export async function createAuth(database?: Database) {
  return createConfiguredAuth(ENV, database ?? (await getDb()));
}
