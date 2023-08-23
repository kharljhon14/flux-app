import { Client } from 'pg';

export async function getClient() {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'flux',
    password: 'zheoden',
    port: 5432,
  });

  return client;
}
