"use strict"; // enable modern Javascript modifications

/**********************************************************
 * MongoDB
 **********************************************************/

const { MongoClient } = require("mongodb");

// load environment variables for .env file into process.env
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    await client.connect();

    // obtain references to a database and one of its collections
    const db = 

  }
}