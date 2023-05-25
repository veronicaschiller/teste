import { Excursao } from "../models/Excursao.js";

export const excursaoIndex = async (req, res) => {
    try {
        const excursao = await Excursao.findAll()
        res.send(200).json(excursao)
    } catch (error) {
        res.send(400).json(error)
    }
}