import { Comentario } from "../models/Comentario.js";

export const createComentario = async (req, res) => {
  try {
    // filtro básico de palavrões
    const texto = req.body.texto.replace(/palavrao|xingamento/gi, "***");

    const comentario = await Comentario.create({
      ...req.body,
      texto
    });

    res.status(201).json(comentario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.findAll();
    res.json(comentarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getComentarioById = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (!comentario) return res.status(404).json({ error: "Comentário não encontrado" });
    res.json(comentario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (!comentario) return res.status(404).json({ error: "Comentário não encontrado" });

    await comentario.update(req.body);
    res.json(comentario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteComentario = async (req, res) => {
  try {
    const comentario = await Comentario.findByPk(req.params.id);
    if (!comentario) return res.status(404).json({ error: "Comentário não encontrado" });

    await comentario.destroy();
    res.json({ message: "Comentário removido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Arquivo: comentarioController.js
export const criarComentario = async (req, res) => {
  try {
    res.json({ message: "Comentário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listarComentarios = async (req, res) => {
  try {
    res.json({ message: "Lista de comentários!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
