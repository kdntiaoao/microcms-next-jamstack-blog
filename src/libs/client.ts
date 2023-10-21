import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'jioqufj7i9',
  apiKey: process.env.API_KEY || '',
});
