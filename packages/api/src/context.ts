import type { Session } from "@steady-ukm/auth";
import type { Database } from "@steady-ukm/db";

export type Context = {
  session: Session | null;
  db: Database;
};
