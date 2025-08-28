import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Estabelecimento = sequelize.define("Estabelecimento", {
  nome: { type: DataTypes.STRING, allowNull: false },
  cnpj: { type: DataTypes.STRING, unique: true, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  validado: { type: DataTypes.BOOLEAN, defaultValue: false }
});
