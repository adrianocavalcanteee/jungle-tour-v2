import { Router } from "express";
import {
  createCombo,
  getCombos,
  getComboById,
  updateCombo,
  deleteCombo
} from "../controllers/comboController.js";

const router = Router();

router.post("/", createCombo);
router.get("/", getCombos);
router.get("/:id", getComboById);
router.put("/:id", updateCombo);
router.delete("/:id", deleteCombo);

export default router;
