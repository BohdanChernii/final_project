import mongoose, {Schema} from 'mongoose'

interface IClient extends mongoose.Document {
  name: string
  surname: string
  phone: string
  age: number
  email: string
  course: string
  course_format: string
  course_type: string
  status: string
  sum: number | null
  already_paid: number | null
  created_at: string
  msg: string | null
  utm: string
  _v?: string
}

const clientSchema = new Schema({
    name: {type: String, trim: true, require: true},
    surname: {type: String, trim: true, require: true},
    phone: {type: String, trim: true, require: true},
    email: {type: String, trim: true,require: true},
    course: {type: String, trim: true, require: true},
    course_format: {type: String, trim: true, require: true},
    course_type: {type: String, trim: true, require: true},
    status: {type: String, trim: true, require: true},
    sum: {type: String, trim: true, default: null, require: true},
    already_paid: {type: String, trim: true, default: null, require: true},
    created_at: {type: String, trim: true, require: true},
    msg: {type: String, trim: true, default: null, require: true},
  utm:{type: String, trim: true, default: null, require: true},
  }, {
    timestamps: true
  }
)

const Client = mongoose.model<IClient>('Client', clientSchema)

export type {IClient}
export default Client