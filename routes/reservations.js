import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create, remove, list, get } from '../controllers/reservations.js'

const router = Router()

router.post('/', auth.jwt, create)
router.delete('/:id', remove)
router.get('/', list)
router.get('/me', auth.jwt, get)

export default router
