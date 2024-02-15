import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { get, edit } from '../controllers/checks.js'

const router = Router()

router.get('/reservations', get)
router.patch('/:id', auth.jwt, edit)

export default router
