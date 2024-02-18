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
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: '未知錯誤'
      })
    }
  }
}

export const deleteReserve = async (req, res) => {
  try {
    const { id } = req.params
    const result = await reserves.findByIdAndDelete(id)
    if (result) {
      res.status(StatusCodes.OK).json({
        success: true,
        message: '刪除成功'
      })
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '找不到預約'
      })
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}

export const getReserves = async (req, res) => {
  try {
    const result = await reserves.find()
    res.status(StatusCodes.OK).json(result)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}

export const getReserve = async (req, res) => {
  try {
    const { id } = req.params
    const result = await reserves.findById(id)
    if (result) {
      res.status(StatusCodes.OK).json(result)
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: '找不到預約'
      })
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}
