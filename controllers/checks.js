import reserves from '../models/reserves'
import { StatusCodes } from 'http-status-codes'
import validator from 'validator'

export const get = async (req, res) => {
  try {
    const result = await reserves.find()
    res.status(StatusCodes.OK).json({
      success: true,
      message: '',
      result
    })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}

export const edit = async (req, res) => {
  try {
    if (!validator.isMongoId(req.params.id)) throw new Error('ID')

    const { id } = req.params
    const { name, date, phone } = req.body
    const data = await reserves.findByIdAndUpdate(id, { name, date, phone })
    res.status(StatusCodes.OK).json({
      success: true,
      message: '',
      result: data
    })
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: '未知錯誤'
    })
  }
}
