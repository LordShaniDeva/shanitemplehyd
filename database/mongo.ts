import mongoose from 'mongoose';
import { logger } from '@/utils/logger';
import { IMAGE_BUCKET_NAME } from './config';
import { MongoClient, GridFSBucket } from 'mongodb';

type Mongoose = typeof mongoose;

declare global {
  var client: MongoClient | null;
  var bucket: GridFSBucket | null;
  var mongoose: Promise<Mongoose> | null;
}

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
  // if (global.mongoose && global.client) {
  //   await global.mongoose;
  //   logger('success', '✓')('Connected to Cached MongoDB');
  //   return {
  //     client: global.client,
  //     bucket: global.bucket!,
  //     mongoose: global.mongoose!,
  //   };
  // }

  const client = new MongoClient(MONGODB_URI!);
  const bucket = new GridFSBucket(client.db(), {
    bucketName: IMAGE_BUCKET_NAME,
  });
  const mongo = await mongoose.connect(MONGODB_URI!);

  mongo.ConnectionStates;
  if (mongo.ConnectionStates.connecting) {
    // generate symbol for console
    //
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
  // Object.defineProperties(global, {
  //   client: {
  //     value: client,
  //     writable: true,
  //     enumerable: true,
  //   },
  //   mongoose: {
  //     value: mongoConnection,
  //     writable: true,
  //     enumerable: true,
  //   },
  //   bucket: {
  //     value: bucket,
  //     writable: true,
  //     enumerable: true,
  //   },
  // });

  return { client, bucket: bucket!, connection: mongo };
}
