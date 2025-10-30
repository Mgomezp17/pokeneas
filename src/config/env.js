import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  hostname: process.env.HOSTNAME,
  bucketName: process.env.BUCKET_NAME,
};
