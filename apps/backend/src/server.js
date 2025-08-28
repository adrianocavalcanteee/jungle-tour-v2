// apps/backend/src/server.js
import "dotenv/config";
import app from "./app.js";
import sequelize, { testConnection } from "./config/db.js";
import "./models/associations.js";

const PORT = Number(process.env.PORT || 3001);

async function startServer() {
  // 1) Testa DB (não cai se falhar)
  await testConnection();

  // 2) Tenta sincronizar (se falhar, só loga)
  try {
    await sequelize.sync(); // ou { alter: true } se quiser ajustar schema em dev
    console.log("📦 Models sincronizados");
  } catch (e) {
    console.error("⚠️ Erro no sync:", e.message);
  }

  // 3) Sobe servidor
  app.listen(PORT, () => {
    console.log(`🚀 API rodando em http://localhost:${PORT}`);
    console.log("🧪 Teste rápido de rotas:");
    console.log(`  GET  http://localhost:${PORT}/api/health`);
    console.log(`  POST http://localhost:${PORT}/api/auth/register`);
    console.log(`  POST http://localhost:${PORT}/api/auth/login`);
    console.log(`  GET  http://localhost:${PORT}/api/usuarios`);
    console.log(`  GET  http://localhost:${PORT}/api/estabelecimentos`);
    console.log(`  POST http://localhost:${PORT}/api/combos`);
    console.log(`  GET  http://localhost:${PORT}/api/comentarios`);
  });
}

startServer();
