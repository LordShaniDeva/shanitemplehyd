import mongoose from 'mongoose';
import { logger } from '@/utils/logger';
import { MONGODB_BUCKET_NAME } from '../config';
import { MongoClient, GridFSBucket } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  );
}

/* 
  Initializes the connection to mongodb and creates a GridFSBucket
  Once connected, it will use the cached connection.
 */
export async function connectToMongo() {
  const client = new MongoClient(MONGODB_URI!);
  const bucket = new GridFSBucket(client.db(), {
    bucketName: MONGODB_BUCKET_NAME,
  });
  const mongo = await mongoose.connect(MONGODB_URI!);

  mongo.ConnectionStates;
  if (mongo.ConnectionStates.connecting) {
    logger('info', '~')('Connecting to MongoDB');
  }

  if (mongo.ConnectionStates.connected) {
    logger('success', '✓')('Connected to MongoDB');
  }
  mongo.connection.on('connected', () => {
    logger('success', '✓')('Connected to MongoDB');
  });
  mongo.connection.on('error', (err) => {
    logger('error', '✗')(err.message);
  });
  mongo.connection.on('disconnected', () => {
    logger('warning', '⚠')('Disconnected from MongoDB');
  });
  return { client, bucket: bucket!, connection: mongo };
}
