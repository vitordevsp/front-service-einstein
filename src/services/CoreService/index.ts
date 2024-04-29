import { coreAPI } from "../../lib/coreAPI"
import { generateAppError } from "../../utils/handleErrors"
import { ICreateUserPayload, ISlidingToken } from "../../types/coreAPI"

export const coreService = {
  /** Cria um usuario. */
  createUser: async (userPayload: ICreateUserPayload): Promise<ISlidingToken | null> => {
    try {
      const { data } = await coreAPI.post<ISlidingToken>('/chattutor/api/v1/auth/account', userPayload)
      return data
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | coreService.createUser: ', appError)

      return null
    }
  },

  /** Retorna o token de acesso. */
  generateToken: async (email: string, password: string): Promise<ISlidingToken> => {
    try {
      const { data } = await coreAPI.post<ISlidingToken>('/chattutor/api/v1/auth/sliding', {
        email,
        password,
      })

      return data
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | coreService.generateToken: ', appError)

      throw error
    }
  },
}
