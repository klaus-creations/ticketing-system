import mongoose from "mongoose";

import { DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "please create your database uri inside the .env.<development/production>.local"
  );
}

console.log(DB_URI);
const connectDB = async function () {
  try {
    await mongoose.connect(DB_URI);
    console.log(`database connected successfully`);
  } catch (error) {
    console.log(
      "Error while trying to connect to the database",
      error?.message || error
    );
    process.exit(1);
  }
};

export default connectDB;
