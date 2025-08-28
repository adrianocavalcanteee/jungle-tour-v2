import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js"; 

export const Usuario = sequelize.define("Usuario", {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    senha_hash: { type: DataTypes.STRING, allowNull: false }, 
    tipo: { type: DataTypes.ENUM("cliente", "fornecedor"), allowNull: false }
    
}); 