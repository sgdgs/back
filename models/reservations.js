import { Schema, model } from 'mongoose'

const schema = new Schema({
  // user: {
  //   type: ObjectId,
  //   ref: 'users',
  //   required: [true, '缺少使用者']
  // },
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
})

export default model('reserve', schema)
