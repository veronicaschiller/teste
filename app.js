import express from "express";
import cors from "cors";
import routes from "./routes.js";

import { sequelize } from "./databases/conecta.js";
import { Cliente } from "./models/Cliente.js";
import { Destino } from "./models/Destino.js";
import { Excurcao } from "./models/Excursao.js";
import { Reserva } from "./models/Reserva.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso");
    await Cliente.sync();
    await Destino.sync();
    await Excurcao.sync();
    await Reserva.sync();
  } catch (error) {
    console.error(`Erro na conexão com o banco:`, error);
  }
}

conecta_db();

app.get("/", (req, res) => {
  res.send("API viajem");
});

app.listen(port, () => {
  console.log(`Servidor rodadno na porta: ${port}`);
});
