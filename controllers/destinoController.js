import { Destino } from "../models/Destino.js";
import { Op } from "sequelize";

export const destinoIndex = async (req, res) => {
  try {
    const destino = await Destino.findAll();
    res.status(200).json(destino);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const destinoCreate = async (req, res) => {
  const { destino, pontos_turisticos, cultura, descricao } = req.body;
  if (!destino || !pontos_turisticos || !cultura || !descricao) {
    res.status(400).json({ id: 0, msg: "Preencha todos os campos" });
  }
  try {
    const destinos = await Destino.create({
      destino,
      pontos_turisticos,
      cultura,
      descricao,
    });
    res.status(200).json(destinos);
  } catch (error) {
    res.status(401).json(error);
  }
};
export const destinoSearch = async (req, res) => {
  const { pesq } = req.params;
  const { destino } = req.body;
  if (!destino) {
    res.status(400).json({ id: 0, msg: "Destino não encontrado" });
  }
  try {
    const destinos = await Destino.findAll(
      {
        destino,
      },
      {
        where: {
          destino: { [Op.iLike]: pesq + '%' },
        },
      }
    );
    res.status(200).json(destinos)
  } catch (error) {
    res.status(402).json(error)
  }
};
