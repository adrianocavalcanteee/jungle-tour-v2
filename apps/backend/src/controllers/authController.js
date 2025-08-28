import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { Usuario } from "../models/Usuario.js";

export const register = async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;
    const senha_hash = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha_hash, tipo });
    res.status(201).json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });

    const match = await bcrypt.compare(senha, usuario.senha_hash);
    if (!match) return res.status(401).json({ error: "Senha inválida" });

    const token = jwt.sign({ id: usuario.id, tipo: usuario.tipo }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
