/* eslint-disable no-console */
import mongoose, { ConnectOptions } from "mongoose";

interface IConnection {
  isConnected?: boolean | number;
}

const connection: IConnection = {};

async function connect() {
  const mongoURI = process.env.NEXT_PUBLIC_MONGO_URI;
  console.log("sdasd");
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
function convertDocumentToObject(document: any) {
  document._id = document._id.toString();
  document.createdAt = document.createdAt.toISOString();
  document.updatedAt = document.updatedAt.toISOString();
  return document;
}
const db = { connect, disconnect, convertDocumentToObject };
export default db;
