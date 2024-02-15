import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { createReserve } from '../controllers/reserves.js'

const router = Router()

router.post('/', auth.jwt, createReserve)

export default router
