import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { createReserve, deleteReserve, getReserves, getReserve } from '../controllers/reserves.js'

const router = Router()

router.post('/', auth.jwt, createReserve)
router.delete('/:id', auth.jwt, deleteReserve)
router.get('/', getReserves)
router.get('/:id', getReserve)

export default router
