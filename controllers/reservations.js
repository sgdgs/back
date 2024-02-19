// import Reservations from '../models/reservations'
// import { StatusCodes } from 'http-status-codes'

// export const create = async (req, res) => {
//   try {
//     const reservation = new Reservations(req.body)
//     await reservation.save()
//     res.status(StatusCodes.OK).send(reservation)
//   } catch (error) {
//     res.status(StatusCodes.BAD_REQUEST).send(error)
//   }
// }

// export const remove = async (req, res) => {
//   try {
//     const { id } = req.params
//     await Reservations.findByIdAndDelete(id)
//     res.status(StatusCodes.OK).send({ message: 'Reservation deleted successfully' })
//   } catch (error) {
//     res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Error deleting reservation' })
//   }
// }

// export const list = async (req, res) => {
//   const reservations = await Reservations.find()
//   res.status(StatusCodes.OK).send(reservations)
// }

// export const get = async (req, res) => {
//   const { id } = req.params
//   const reservation = await Reservations.findById(id)
//   res.status(StatusCodes.OK).send(reservation)
// }
