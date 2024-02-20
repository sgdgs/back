import 'dotenv/config'
import express from 'express'
import { mongoose, ObjectId } from 'mongoose'
import cors from 'cors'
import routeUsers from './routes/users.js'
import routeProducts from './routes/products.js'
import routeOrders from './routes/orders.js'
// import routeReserve from './routes/reservations.js'
import routePictures from './routes/pictures.js'
import { StatusCodes } from 'http-status-codes'
import mongoSanitize from 'express-mongo-sanitize'
import './passport/passport.js'

const app = express()

app.use(cors({
  // origin = 請求的來源
  // callback(錯誤, 是否允許)
  origin(origin, callback) {
    if (origin === undefined || origin.includes('github.io') || origin.includes('localhost')) {
      callback(null, true)
    } else {
      callback(new Error('CORS'), false)
    }
  }
}))

app.use(express.json())
app.use(mongoSanitize())

const Reservation = mongoose.model('Reservation', new mongoose.Schema({
  date: {
    type: Date,
    required: [true, '缺少日期']
  },
  name: {
    type: String,
    required: [true, '缺少姓名']
  },
  phone: {
    type: String,
    required: [true, '缺少電話']
  },
  service: {
    type: String,
    required: [true, '缺少服務']
  }
}))

app.post('/reservations', async (req, res) => {
  const reservation = new Reservation(req.body)
  await reservation.save()
  res.send(reservation)
  console.log(reservation)
})

app.delete('/reservations/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Reservation.findByIdAndDelete(id)
    res.status(200).send({ message: 'Reservation deleted successfully' })
  } catch (error) {
    res.status(500).send({ message: 'Error deleting reservation' })
  }
})

app.get('/reservations', async (req, res) => {
  const reservations = await Reservation.find()
  res.send(reservations)
})

app.get('/reservations/:id', async (req, res) => {
  try {
    const result = await Reservation.find({ user: req.user._id })
    res.status(StatusCodes.OK).json({
      success: true,
      message: '',
      result
    })
  } catch (error) {
    res.status(404).send({ message: 'Reservation not found' })
  }
})

app.use((_, req, res, next) => {
  res.status(StatusCodes.FORBIDDEN).json({
    success: false,
    message: '請求被拒絕'
  })
})

app.use((_, req, res, next) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: '資料格式錯誤'
  })
})

app.use('/users', routeUsers)
app.use('/products', routeProducts)
app.use('/orders', routeOrders)
app.use('/pictures', routePictures)
// app.use('/reserve', routeReserve)

app.all('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: '找不到'
  })
})

app.listen(process.env.PORT || 4000, async () => {
  console.log('伺服器啟動')
  await mongoose.connect(process.env.DB_URL)
  mongoose.set('sanitizeFilter', true)
  console.log('資料庫連線成功')
})
