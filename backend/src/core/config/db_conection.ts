import mongoose from "mongoose";
export const conn = mongoose.createConnection("mongodb://localhost:27017/re");

// db connection
export const connectToDB = async () => {
  try {
    await conn.asPromise();
    console.log("Successfully connected to the database");
  } catch (e) {
    console.error("Error connecting to the database", e);
    process.exit(1);
  }
};
