import { Reserva } from "../models/Reserva.js";

export const reservaIndex = async (req, res) =>{
    try {
        const reserva = await Reserva.findAll()
        res.status(200).json(reserva)
    } catch (error) {
        res.status(400).json(error)
    }
}
