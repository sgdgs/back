import { mongoose, ObjectId } from 'mongoose'
const schema = new mongoose.Schema({
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
  },
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  }
})

export default mongoose.model('reserve', schema)
