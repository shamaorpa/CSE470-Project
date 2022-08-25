import dotenv from 'dotenv';
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const properties = {
  PORT: process.env.PORT || 3000,
  NO_REPLY_EMAIL_ID: process.env.NO_REPLY_EMAIL_ID || 'rajvirahmedshuvo10@gmail.com',
  NO_REPLY_EMAIL_PASSWORD:
    process.env.NO_REPLY_EMAIL_PASSWORD || 'Iloveriki10',
  NODE_ENV: process.env.NODE_ENV || 'production',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
  JWT_EXPIRE: process.env.JWT_EXPIRE,
  MONGO_URI:
    process.env.MONGO_URI ||
    'mongodb+srv://development:8HlA3ekRKZ1tKkdj@development.hewie.mongodb.net/meritspace_dev?retryWrites=true&w=majority',
  POSTHOG_KEY: process.env.POSTHOG_KEY,
};

export default properties;
