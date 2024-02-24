import { Schema, model } from 'mongoose'

const schema = new Schema({
  image: {
    type: String,
    required: [true, '缺少商品圖片']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('pictures', schema)
