import { canvasAPI } from "../../lib/canvasAPI"
import { ICourseCanvas, IUserCanvas } from "../../types/canvas"

export const canvasService = {
  getUser: async (userId: string): Promise<IUserCanvas | undefined> => {
    if (!userId) return undefined

    const { data } = await canvasAPI.get('/...user-info')

    return {
      name: 'Vitor Sampaio'
    }
  },

  getCourse: async (courseId: string): Promise<ICourseCanvas | undefined> => {
    if (!courseId) return undefined

    const { data } = await canvasAPI.get('/...course-info')

    return {
      name: 'Curso canvas'
    }
  },
}
