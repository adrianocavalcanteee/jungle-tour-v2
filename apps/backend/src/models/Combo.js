import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Combo = sequelize.define("Combo", {
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT },
  preco: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  info_extra: { type: DataTypes.TEXT }
});
