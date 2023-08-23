import { Client, QueryResult } from 'pg';

export async function getClient(): Promise<Client> {
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
