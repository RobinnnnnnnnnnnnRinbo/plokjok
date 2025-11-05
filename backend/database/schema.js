import { pool } from './db.js';

export const createTables = async () => {
  // Example table creation using Supabase
  const { error } = await pool.rpc('create_tables', {
  });

  if (error) throw error;
};