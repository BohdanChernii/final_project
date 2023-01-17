import mongoose, {Schema} from 'mongoose'

interface IClient extends mongoose.Document {
  name: string
  surname: string
  phone: string
  age: number
  course: string
  course_format: string
  status: string
  sum: number | null
  alreadyPaid: number | null
  group: null | string
  created_at: string
  manager: string | null
  _v?: string
}

const clientSchema = new Schema({
    name: {type: String, trim: true, require: true},
    surname: {type: String, trim: true, require: true},
    phone: {type: String, trim: true, require: true},
    course: {type: String, trim: true, require: true},
    status: {type: String, trim: true, require: true},
    sum: {type: String, trim: true, default: null, require: true},
    alreadyPaid: {type: String, trim: true, default: null, require: true},
    group: {type: String, trim: true, default: null, require: true},
    created_at: {type: String, trim: true, require: true},
    manager: {type: String, trim: true, default: null, require: true},
  }, {
    timestamps: true
  }
)

const Client = mongoose.model<IClient>('Client', clientSchema)

export type {IClient}
export default Client