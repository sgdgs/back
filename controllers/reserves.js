import reserves from '../models/reserves'
import { StatusCodes } from 'http-status-codes'

export const createReserve = async (req, res) => {
  try {
    await reserves.create(req.body)
    res.status(StatusCodes.OK).json({
      success: true,
      message: '預約成功'
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message
      })
    } else if (error.name === 'MongoError' && error.code === 11000) {
      res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: '已經有人預約了這個時間'
      })
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤'
      })
    }
  }
}
