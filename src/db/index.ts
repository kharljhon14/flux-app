import { Client, QueryResult } from 'pg';
require('dotenv').config();

export async function getClient(): Promise<Client> {
  const client = new Client({
    connectionString: `postgres://default:dcMGjE3xlCX6@ep-dark-brook-50602543-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require`,
  });
  return client;

  // const client = new Client({
  //   user: 'postgres',
  //   host: 'localhost',
  //   database: 'flux',
  //   password: 'zheoden',
  //   port: 5432,
  // });

  // return client;
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
