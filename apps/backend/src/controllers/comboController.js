import { Combo } from "../models/Combo.js";

export const createCombo = async (req, res) => {
  try {
    const combo = await Combo.create(req.body);
    res.status(201).json(combo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCombos = async (req, res) => {
  try {
    const combos = await Combo.findAll();
    res.json(combos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getComboById = async (req, res) => {
  try {
    const combo = await Combo.findByPk(req.params.id);
    if (!combo) return res.status(404).json({ error: "Combo não encontrado" });
    res.json(combo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCombo = async (req, res) => {
  try {
    const combo = await Combo.findByPk(req.params.id);
    if (!combo) return res.status(404).json({ error: "Combo não encontrado" });

    await combo.update(req.body);
    res.json(combo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCombo = async (req, res) => {
  try {
    const combo = await Combo.findByPk(req.params.id);
    if (!combo) return res.status(404).json({ error: "Combo não encontrado" });

    await combo.destroy();
    res.json({ message: "Combo removido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
