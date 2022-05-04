/* eslint-disable no-console */
import mongoose, { ConnectOptions } from "mongoose";

interface IConnection {
  isConnected?: boolean | number;
}

const connection: IConnection = {};

async function connect() {
  const mongoURI = process.env.NEXT_PUBLIC_MONGO_URI;

  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  } as ConnectOptions);
  console.log("new connection");
  connection.isConnected = mongoose.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

const db = { connect, disconnect };
export default db;
