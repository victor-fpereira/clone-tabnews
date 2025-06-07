const database = require("infra/database");

let RESPONSE_BODY = undefined;

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  RESPONSE_BODY = await response.json();
  expect(RESPONSE_BODY.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(RESPONSE_BODY.updated_at).toISOString();
  expect(RESPONSE_BODY.updated_at).toEqual(parsedUpdatedAt);
});

test("Verify Postgres version in use", async () => {
  const dbVersion = RESPONSE_BODY.dependencies.database.version;
  expect(dbVersion).toBe("16.9");
});

test("Verify Postgres max connections", async () => {
  const dbMaxConn = RESPONSE_BODY.dependencies.database.max_connections;
  expect(dbMaxConn).toBe(100);
});

test("Verify Postgres open connections", async () => {
  const dbOpenConn = RESPONSE_BODY.dependencies.database.open_connections;
  expect(dbOpenConn).toBe(1);
});
