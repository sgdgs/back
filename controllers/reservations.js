import reserve from '../models/reservations'
import { StatusCodes } from 'http-status-codes'

export const create = async (req, res) => {
  const reservation = new reserve(req.body);
  await reservation.save();
  res.send(reservation);
  console.log(reservation);
}

export const remove = async (req, res) => {
  try {
    const { id } = req.params
    await reserve.findByIdAndDelete(id)
    res.status(StatusCodes.OK).send({ message: 'Reservation deleted successfully' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error deleting reservation' })
  }
}

export const list = async (req, res) => {
  const reserve = await reserve.find()
  res.status(StatusCodes.OK).send(reserve)
}

export const get = async (req, res) => {
  const { id } = req.params
  const reserve = await reserve.findById(id)
  res.status(StatusCodes.OK).send(reserve)
}
