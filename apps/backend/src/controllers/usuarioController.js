import { Usuario } from '../models/Usuario.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });

    await usuario.update(req.body);
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });

    await usuario.destroy();
    res.json({ message: "Usuário removido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
