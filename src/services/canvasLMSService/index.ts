import { canvasAPI } from "../../lib/canvasAPI"
import { ICourseCanvasLMS, IUserCanvasLMS } from "../../types/canvasLMS"
import { ICanvasCourseResponse, ICanvasUserResponse } from "../../types/canvas"

// @TODO: autenticar esse serviço
export const canvasService = {
  /** Retorna informações de um usuario pelo ID. */
  getUser: async (userId: string): Promise<ICanvasUserResponse | null> => {
    try {
      const { data } = await canvasAPI.get<IUserCanvasLMS>(`/api/v1/users/${userId}`)

      const canvasUser: ICanvasUserResponse = {
        id: userId,
        name: data.name,
        email: data.email,
        avatar_url: data.avatar_url,
      }

      return canvasUser
    }
    catch (error) {
      console.log('ERROR | canvasService.getUser: ', error)
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
      console.log('ERROR | canvasService.getCourse: ', error)
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
      console.log('ERROR | canvasService.checkUserExistsInTheCourse: ', error)
      return false
    }
  },
}
