import { ApiEnum } from "./enum"

export type TApiData = {
  title: string
  id: string,
  api: TApi[]
}

type TApi = {
  title: string,
  id: string,
  type: ApiEnum,
  endpoint: string,
  description: string,
  parameter: TParameter[]
  responses: TResponse[]
  sample: TSample[]
}

type TSample = {
  name: string,
  payload: string,
  contentType: string,
  json: any,
}

type TResponse = {
  code: number,
  message: string,
  parameter: TParameter[],
}

type TParameter = {
  name: string,
  description: string,
  params: TParam[]
}

type TParam = {
  name: string,
  type: string,
  required: boolean,
  description: string,
  restriction: string[],
  schema?: TSchema[]
}

type TSchema = {
  name: string,
  type: string,
  required: boolean,
  description: string,
}