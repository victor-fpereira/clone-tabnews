import database from "infra/database";

async function status(req, res) {
  const updatedAt = new Date().toISOString();
  const dbVersion = await database.query("SHOW server_version");
  const dbMaxConn = await database.query("SHOW max_connections;");
  const dbName = process.env.POSTGRES_DB;

  const dbOpenConn = await database.query({
    text: "SELECT COUNT(*)::int from pg_stat_activity WHERE datname = $1;",
    values: [dbName],
  });

  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersion.rows[0].server_version,
        max_connections: parseInt(dbMaxConn.rows[0].max_connections),
        open_connections: dbOpenConn.rows[0].count,
      },
    },
  });
}

export default status;
