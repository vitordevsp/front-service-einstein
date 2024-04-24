import { coreAPI } from "../../lib/coreAPI"
import { ICreateUserPayload, ISlidingToken } from "../../types/coreAPI"

export const coreService = {
  /** Retorna informações de um usuario pelo ID. */
  createUser: async (userPayload: ICreateUserPayload): Promise<ISlidingToken | null> => {
    try {
      const { data } = await coreAPI.post<ISlidingToken>('/chattutor/api/v1/auth/account', userPayload)
      return data
    }
    catch (error) {
      console.log('ERROR | coreService.createUser: ', error)
      return null
    }
  },

  /** Retorna informações de um usuario pelo ID. */
  generateToken: async (email: string, password: string): Promise<ISlidingToken> => {
    try {
      const { data } = await coreAPI.post<ISlidingToken>('/chattutor/api/v1/auth/sliding', {
        email,
        password,
      })

      return data
    }
    catch (error) {
      console.log('ERROR | coreService.generateToken: ', error)
      throw error
    }
  },
}
