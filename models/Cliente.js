import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Cliente = sequelize.define('Cliente',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nome:{
        type: DataTypes.STRING(40),
    },
    indentidade:{
        type: DataTypes.STRING(10),
        allowNull:false
        },
    endereco:{
        type: DataTypes.STRING(50),
        allowNull:false
    },
    telefone:{
        type: DataTypes.STRING(30),
        allowNull:false
    }
},{
    timestamps:false,
})
