import express from 'express'
import { adminLogin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/login',adminLogin)

export default adminRouter