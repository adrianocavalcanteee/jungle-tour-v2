import { Router } from "express";
import {
  createEstabelecimento,
  getEstabelecimentos,
  getEstabelecimentoById,
  updateEstabelecimento,
  deleteEstabelecimento
} from "../controllers/estabelecimentoController.js";

const router = Router();

router.post("/", createEstabelecimento);
router.get("/", getEstabelecimentos);
router.get("/:id", getEstabelecimentoById);
router.put("/:id", updateEstabelecimento);
router.delete("/:id", deleteEstabelecimento);

export default router;
