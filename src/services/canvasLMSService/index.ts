import { canvasAPI } from "../../lib/canvasAPI"
import { ICourseCanvasLMS, IUserCanvasLMS } from "../../types/canvasLMS"
import { ICanvasCourseResponse, ICanvasUserResponse } from "../../types/canvas"

// @TODO: autenticar esse serviço
export const canvasService = {
  /** Retorna informações de um usuario pelo ID. */
  getUser: async (userId: string): Promise<IUserCanvasLMS | null> => {
    try {
      const { data } = await canvasAPI.get<IUserCanvasLMS>(`/api/v1/users/${userId}`)
      return data
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
      return data
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
