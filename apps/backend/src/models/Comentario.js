import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Comentario = sequelize.define("Comentario", {
  texto: { type: DataTypes.TEXT, allowNull: false },
  aprovado: { type: DataTypes.BOOLEAN, defaultValue: false }
});