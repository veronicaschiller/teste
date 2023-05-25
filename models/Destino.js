import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Destino = sequelize.define('Destino',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    destino:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    pontos_turisticos:{
        type:DataTypes.DECIMAL(3),
        allowNull:false
    },
    cultura:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    descricao:{
        type:DataTypes.STRING(300),
        allowNull:false
    }
},
{
    timestamps:false
})