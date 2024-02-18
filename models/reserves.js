import { Schema, model, ObjectId } from 'mongoose'

const schema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  date: {
    type: Date,
    required: [true, '缺少預約日期']
  },
  name: {
    type: String,
    required: [true, '缺少預約人姓名']
  },
  phone: {
    type: String,
    required: [true, '缺少預約人電話']
  },
  service: {
    type: String,
    required: [true, '缺少預約服務']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('reserves', schema)
