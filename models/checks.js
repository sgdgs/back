import { Schema, model, ObjectId } from 'mongoose'

const checkSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  check: {
    type: Boolean,
    required: [true, '缺少檢查欄位']
  }
}, {
  versionKey: false,
  timestamps: true
})

const schema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  checks: {
    type: [checkSchema],
    validate: {
      validator(value) {
        return Array.isArray(value) && value.length > 0
      },
      message: '檢查不能為空'
    }
  }
}, { versionKey: false, timestamps: true })

export default model('checks', schema)
