import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create, getAll, remove } from '../controllers/pictures.js'
import upload from '../middlewares/upload.js'
import admin from '../middlewares/admin.js'

const router = Router()

router.post('/', auth.jwt, admin, upload, create)
router.get('/all', getAll)
router.patch('/:id', auth.jwt, admin, upload)
router.delete('/:id', auth.jwt, admin, remove)

export default router
