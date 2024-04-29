import { AxiosError } from "axios"
import { IAppError } from "../services/CoreService/app"
import { ICoreAPIError } from "../types/coreAPI"

export class AppError {
  status: number
  message: string
  description: string
  origin: string

  constructor(options: IAppError) {
    this.status = options.status
    this.message = options.message
    this.description = options.description
    this.origin = options.origin
  }
}

export function generateAppError(error: any, options?: Partial<IAppError>): AppError {
  if (error instanceof AppError) return error

  let status = 0
  let message = "Erro desconhecido"
  let description = "Erro desconhecido"
  let origin = "AppError"

  if (error instanceof AxiosError) {
    const err = error as AxiosError<ICoreAPIError>

    status = err.response?.status || -1
    message = err.response?.data?.messages?.message || err.message
    description = err.response?.data.status || "Erro desconhecido"
    origin = "AxiosError"
  }
  else if (error instanceof Error) {
    const err = error as Error

    status = 1
    message = err.message
    description = "Erro interno na aplicação"
    origin = "Error"
  }
  else if (options) {
    if (options.status) status = options.status
    if (options.message) message = options.message
    if (options.description) description = options.description
  }

  return new AppError({
    status,
    message,
    description,
    origin,
  })
}
