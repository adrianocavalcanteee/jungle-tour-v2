// apps/backend/src/config/db.js
import { Sequelize } from "sequelize";
import "dotenv/config";

const {
  DB_DIALECT = "mysql",
  DB_HOST = "localhost",
  DB_PORT = "3306",
  DB_NAME = "jungle_tour",
  DB_USER = "root",
  DB_PASS = "",
  SQLITE_STORAGE = "./dev.sqlite",
} = process.env;

let sequelize;

if (DB_DIALECT === "sqlite") {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: SQLITE_STORAGE,
    logging: false,
  });
} else {
  sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: DB_DIALECT, // "mysql" ou "mariadb"
    logging: false,
  });
}

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(`✅ DB OK (${DB_DIALECT})`);
  } catch (e) {
    console.error("❌ Erro ao conectar no DB:", e.message);
  }
}

export default sequelize;
export { testConnection, sequelize }; // <- adiciona o named export aqui

