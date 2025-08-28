import { Router } from "express";
import {
  createComentario,
  getComentarios,
  getComentarioById,
  updateComentario,
  deleteComentario
} from "../controllers/comentarioController.js";

const router = Router();

router.post("/", createComentario);
router.get("/", getComentarios);
router.get("/:id", getComentarioById);
router.put("/:id", updateComentario);
router.delete("/:id", deleteComentario);

export default router;
