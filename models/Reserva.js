import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";
import { Cliente } from "./Cliente.js";

export const Reserva = sequelize.define('Reserva',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    nome_hotel:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    data_excursao:{
        type:DataTypes.DATE,
        allowNull:false
    },

},{
    timestamps:false
})

Reserva.belongsTo(Cliente,{
    foreignKey:{
        name:'cliente_id',
        allowNull:false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Cliente.hasMany(Reserva,{
    foreignKey:'cliente_id'
})