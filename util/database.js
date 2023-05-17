import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://rudals010447:qwer1234!@cluster0.9l5xxuc.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };

let connectDB;

async function createConnection() {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
      global._mongo = await new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
  } else {
    connectDB = await new MongoClient(url, options).connect();
  }
}

createConnection();

export { connectDB };
