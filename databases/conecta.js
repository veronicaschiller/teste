import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("viajem", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});
