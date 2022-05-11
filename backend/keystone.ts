import { config } from '@keystone-6/core';
import { withAuth, session } from './auth';
import 'dotenv/config';
import ProductImage from './schemas/ProductImage';
import Product from './schemas/Product';
import User from './schemas/User';
import Order from './schemas/Order';
import OrderItem from './schemas/OrderItem';
import Cart from './schemas/Cart';

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    server: {
      cors: { origin: ['http://localhost:7777'], credentials: true },
      port: 3000,
      maxFileSize: 200 * 1024 * 1024,
      healthCheck: true,
    },
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres',
      onConnect: async () => { console.log('Connected to db'); },
      enableLogging: true,
      useMigrations: true,
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists: {
      Product,
      ProductImage,
      User,
      Order,
      OrderItem,
      Cart,
    },
    session,
  }),
);
