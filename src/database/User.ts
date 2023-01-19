import mongoose, {Schema} from 'mongoose'

interface IUser extends mongoose.Document {
  email: string
  password: string
}

const userSchema = new Schema({
  email: {type: String, trim: true, require: true},
  password: {type: String, trim: true, require: true}
})
const User = mongoose.model<IUser>("User", userSchema)

export type {IUser}
export default User