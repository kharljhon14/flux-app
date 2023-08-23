import { getClient } from '@/db';
import { faker } from '@faker-js/faker';

import { hash } from 'bcrypt';

async function loadFakeData(numUsers: number = 10) {
  console.log(`executing load fake data. generating ${numUsers} users.`);

  const client = await getClient();

  await client.connect();

  try {
    await client.query('begin');

    const saltRounds = 10;

    for (let i = 0; i < numUsers; i++) {
      const hashedPassword = await hash(`flux${i}`, saltRounds);

      await client.query(
        'insert into public.users (username, password, avatar) values ($1, $2, $3)',
        [faker.internet.userName(), hashedPassword, faker.image.avatar()]
      );
    }

    const res = await client.query(
      'select id from public.users order by created_at desc limit $1',
      [numUsers]
    );

    for (const row of res.rows) {
      for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
        await client.query('insert into public.posts (user_id, content) values ($1, $2)', [
          row.id,
          faker.lorem.sentence(),
        ]);
      }
    }

    for (const row1 of res.rows) {
      for (const row2 of res.rows) {
        if (row1.id != row2.id) {
          if (Math.random() > 0.5) {
            await client.query('insert into follows (user_id, follower_id) values ($1, $2)', [
              row1.id,
              row2.id,
            ]);
          }
        }
      }
    }

    await client.query('commit');
  } catch (err) {
    await client.query('rollback');
    throw err;
  } finally {
    await client.end();
  }

  const res = await client.query('select 1');

  console.log(res);
}

loadFakeData();
