import { getClient } from '../db/index';
import { hash } from 'bcrypt';

async function loadAdminUser(username: string, password: string) {
  console.log('executing loading admin user');
  const saltRounds = 10;

  const hashedPassword = await hash(password, saltRounds);

  const client = await getClient();

  await client.connect();
  await client.query('insert into public.users(username, password, is_admin) values ($1, $2 ,$3)', [
    username,
    hashedPassword,
    true,
  ]);

  await client.end();
}

loadAdminUser('admin', 'password');
