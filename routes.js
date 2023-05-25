import { Router } from "express";
import { clienteCreate, clientesIndex } from "./controllers/clienteController.js";
import { destinoCreate, destinoIndex, destinoSearch } from "./controllers/destinoController.js";

const routes =  Router()
//cliente
routes.get('/cliente', clientesIndex)
          .put('/client/create', clienteCreate)

//reservas 
//excursão
//reserva
//destino
routes.get('/destinis', destinoIndex)
          .post('/destinis/create', destinoCreate)
          .get('/destinis/searchName/:pesq' , destinoSearch)
export default routes