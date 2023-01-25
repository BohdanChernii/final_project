import {HydratedDocument} from "mongoose";

class InferSchemaType<T> {
}

class ObtainSchemaGeneric<T, U> {
}

interface IClient extends HydratedDocument<InferSchemaType<IClient>, ObtainSchemaGeneric<IClient, "TInstanceMethods">, ObtainSchemaGeneric<IClient, "TVirtual">>{
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

  toJSON(): IClient;
}


const normalize = (client:IClient ): IClient => {
  client = client.toJSON()

  delete client._v
  return client
}



  const normalizeMany = (clients: Array<IClient>) => clients.map((client) => normalize(client))


export default normalizeMany