import { Schema, model } from 'mongoose'

const schema = new Schema({
  image: {
    type: String,
    required: [true, '缺少商品圖片']
  },
  name: {
    type: String,
    required: [true, '缺少商品名稱']
  }
  // description: {
  //   type: String,
  //   required: [true, '缺少商品說明']
  // },
  // category: {
  //   type: String,
  //   required: [true, '缺少商品分類'],
  //   enum: {
  //     values: ['衣服', '食品', '3C', '遊戲'],
  //     message: '商品分類錯誤'
  //   }
  // },
  // sell: {
  //   type: Boolean,
  //   required: [true, '缺少商品上架狀態']
  // }
}, {
  timestamps: true,
  versionKey: false
})

export default model('pictures', schema)
