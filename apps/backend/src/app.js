import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import healthRoutes from "./routes/health.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import estabelecimentoRoutes from "./routes/estabelecimento.routes.js";
import comboRoutes from "./routes/combo.routes.js";
import comentarioRoutes from "./routes/comentario.routes.js";

const app = express ();

app.use(helmet());
app.use(cors({ origin:"*"}));
app.use(morgan("dev"));
app.use(express.json());

app.use("api", authRoutes);
app.use("api", healthRoutes);
app.use("api", usuarioRoutes);
app.use("api", estabelecimentoRoutes);
app.use("api", comboRoutes);
app.use("api", comentarioRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "API funcionando!" });
});

app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/estabelecimento", estabelecimentoRoutes);
app.use("/api/combo", comboRoutes);
app.use("/api/comentario", comentarioRoutes);

console.log("Rotas carregadas:");
console.log("✅ /api/auth");
console.log("✅ /api/health"); 
console.log("✅ /api/usuarios");
console.log("✅ /api/estabelecimento");
console.log("✅ /api/combo"); 
console.log("✅ /api/comentario");




export default app;


