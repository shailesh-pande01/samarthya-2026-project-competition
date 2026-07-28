import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  const activeCache = cached!;
  if (activeCache.conn) {
    return activeCache.conn;
  }

  if (!activeCache.promise) {
    const opts = {
      bufferCommands: false,
    };

    activeCache.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    activeCache.conn = await activeCache.promise;
  } catch (e) {
    activeCache.promise = null;
    throw e;
  }

  return activeCache.conn;
}
