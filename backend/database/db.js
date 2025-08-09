import pg from "pg";
import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT, APIURL } = process.env;

export const pool = new Pool({
  host: PGHOST,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: PGPORT,
  url: APIURL,
});
