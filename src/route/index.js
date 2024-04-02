import { Router } from 'express'
import songRoutes from './songRoutes.js'

const router = Router()

router.use('/song', songRoutes)

export default router
