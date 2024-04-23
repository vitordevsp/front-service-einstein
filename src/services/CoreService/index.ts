import { canvasAPI } from "../../lib/canvasAPI"
import { coreAPI } from "../../lib/coreAPI"
import { generateUserDisplayName } from "../../utils/helpers"
import { IUserCanvasLMS } from "../../types/canvasLMS"
import { ICanvasUserResponse } from "../../types/canvas"
import { ICreateUserPayload, ISlidingToken } from "../../types/coreAPI"

export const coreService = {
  /** Retorna informações de um usuario pelo ID. */
  createUser: async (userPayload: ICreateUserPayload): Promise<boolean> => {
    try {
      await coreAPI.post<ISlidingToken>('/chattutor/api/v1/auth/account', userPayload)
      return true
    }
    catch (error) {
      console.log('ERROR | coreService.createUser: ', error)
      return false
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
