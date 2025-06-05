const database = require("../../../../../infra/database.js");

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("Perform a simple query to the database", async () => {
  const result = await database.query("SELECT 1 + 1 AS sum");
  console.log(result);
});
