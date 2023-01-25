import mongoose, {Schema} from 'mongoose'

interface IAuth {
  _user_id: Schema.Types.ObjectId
  accessToken: string
  refreshToken: string
}

const clientsSchema = new Schema({
  _user_id: {type: Schema.Types.ObjectId, ref: "User"},
  accessToken: {type: String},
  refreshToken: {type: String}
})

const OAuth = mongoose.model<IAuth>("OAuth", clientsSchema)

export default OAuth