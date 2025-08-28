import { Estabelecimento } from "../models/Estabelecimento.js";

export const createEstabelecimento = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.create(req.body);
    res.status(201).json(estabelecimento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEstabelecimentos = async (req, res) => {
  try {
    const estabelecimentos = await Estabelecimento.findAll();
    res.json(estabelecimentos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEstabelecimentoById = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.findByPk(req.params.id);
    if (!estabelecimento) return res.status(404).json({ error: "Estabelecimento não encontrado" });
    res.json(estabelecimento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEstabelecimento = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.findByPk(req.params.id);
    if (!estabelecimento) return res.status(404).json({ error: "Estabelecimento não encontrado" });

    await estabelecimento.update(req.body);
    res.json(estabelecimento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEstabelecimento = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.findByPk(req.params.id);
    if (!estabelecimento) return res.status(404).json({ error: "Estabelecimento não encontrado" });

    await estabelecimento.destroy();
    res.json({ message: "Estabelecimento removido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
