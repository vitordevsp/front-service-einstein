import { canvasAPI } from "../../lib/canvasAPI"
import { generateUserDisplayName } from "../../utils/helpers"
import { generateAppError } from "../../utils/handleErrors"
import { ICourseCanvasLMS, IUserCanvasLMS } from "../../types/canvasLMS"
import { ICanvasCourseResponse, ICanvasUserResponse } from "../../types/canvas"

// @TODO: autenticar esse serviço
export const canvasService = {
  /** Retorna informações de um usuario pelo ID. */
  getUser: async (userId: string): Promise<ICanvasUserResponse | null> => {
    try {
      const { data } = await canvasAPI.get<IUserCanvasLMS>(`/api/v1/users/${userId}`)

      const display_name = generateUserDisplayName(data.name)

      const canvasUser: ICanvasUserResponse = {
        id: userId,
        name: data.name,
        display_name,
        email: data.email,
        avatar_url: data.avatar_url,
      }

      return canvasUser
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | canvasService.getUser: ', appError)

      return null
    }
  },

  /** Retorna informações de um curso pelo ID. */
  getCourse: async (courseId: string): Promise<ICanvasCourseResponse | null> => {
    try {
      const { data } = await canvasAPI.get<ICourseCanvasLMS>(`/api/v1/courses/${courseId}`)

      const canvasCourse: ICanvasCourseResponse = {
        id: courseId,
        name: data.name,
        start_at: data.start_at,
        end_at: data.end_at,
      }

      return canvasCourse
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | canvasService.getCourse: ', appError)

      return null
    }
  },

  /** Retorna um boolean que indica se o usuário existe na lista do curso. */
  checkUserExistsInTheCourse: async (userId: string, courseId: string): Promise<boolean> => {
    try {
      await canvasAPI.get(`/api/v1/courses/${courseId}/users/${userId}`)
      return true
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | canvasService.checkUserExistsInTheCourse: ', appError)

      return false
    }
  },
}
