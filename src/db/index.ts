import { Client, QueryResult } from 'pg';
require('dotenv').config();

export async function getClient(): Promise<Client> {
  console.log(process.env.POSTGRES_URL);
  if (process.env.POSTGRES_URL) {
    const client = new Client({
      connectionString: `${process.env.POSTGRES_URL}?sslmode=require`,
    });
    return client;
  }

  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'flux',
    password: 'zheoden',
    port: 5432,
  });

  return client;
}

export async function sql(sql: string, values?: Array<any>): Promise<QueryResult<any>> {
  const client = await getClient();

  await client.connect();

  const res = await client.query(sql, values);

  await client.end();

  return res;
}

(async () => {
  await getClient();
})();
