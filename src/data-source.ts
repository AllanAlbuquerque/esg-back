import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Tasks } from './entity/Tasks';
import { Activity } from './entity/Activity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'berry.db.elephantsql.com',
  port: 5432,
  username: 'tuteziaa',
  password: 'sGhqgmsphfZbmqsCaU4Rr2UslMmyjJsi',
  database: 'tuteziaa',
  synchronize: true,
  logging: false,
  entities: [User, Tasks, Activity],
  migrations: [],
  subscribers: [],
});
