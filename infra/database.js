const { Client } = require("pg");
require("dotenv").config({ path: ".env.development" });

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect();

  try {
    const result = await client.query(queryObject);
    return result;
  } catch (error) {
    console.log(error);
  } finally {
    await client.end();
  }
}

module.exports = {
  query: query,
};

// export default {
//   query: query,
// };
