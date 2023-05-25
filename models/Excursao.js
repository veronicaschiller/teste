import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";
import { Destino } from "./Destino.js";

export const Excurcao = sequelize.define('Excurcao',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    empresa:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    preco:{
        type:DataTypes.REAL,
        allowNull:false
    },
    data_viajem:{
        type:DataTypes.DATE,
        allowNull:false
    },
    duracao_viajem:{
        type:DataTypes.TIME,
        allowNull:false
    },
    capacidade:{
        type:DataTypes.DECIMAL(3),
        allowNull:false
    }
},
{
    timestamps:false
});

Excurcao.belongsTo(Destino,{
    foreignKey:{
        name:'destino_id',
        allowNull:false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Destino.hasMany(Excurcao,{
    foreignKey:'destino_id'
})