import mongoose, {Schema} from 'mongoose'
// @ts-ignore
import authService from "../service/auth.service.ts";

interface IUser extends mongoose.Document {
  email: string
  password: string,
  compareWithPassword?: (value: string) => void
}

const userSchema = new Schema({
  email: {type: String, trim: true, require: true},
  password: {type: String, trim: true, require: true}
})
const User = mongoose.model<IUser>("User", userSchema)


userSchema.methods = {
  async compareWithPassword(password: string) {
    await authService.comparePasswords(this.password, password)
  }
}

export type {IUser}
export default User