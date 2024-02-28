import { Router } from 'express'
import { create, login, logout, extend, getProfile, editCart, getCart, changePassword, updatePassword } from './controllers/users.js'
import * as auth from './middlewares/auth.js'

const router = Router()

router.post('/', create)
router.post('/login', auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.patch('/extend', auth.jwt, extend)
router.get('/me', auth.jwt, getProfile)
router.patch('/cart', auth.jwt, editCart)
router.get('/cart', auth.jwt, getCart)
router.patch('/password', auth.jwt, changePassword, updatePassword)

export default router
