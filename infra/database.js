const { Client } = require("pg");
require("dotenv").config();

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

module.exports = {
  query: query,
};

// export default {
//   query: query,
// };
