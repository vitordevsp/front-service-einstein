import { canvasAPI } from "../../lib/canvasAPI"
import { ICanvasCourse, ICanvasUser } from "../../types/canvas"

export const canvasService = {
  getUser: async (userId: string): Promise<ICanvasUser | undefined> => {
    if (!userId) return undefined

    const { data } = await canvasAPI.get('/...user-info')

    return {
      name: 'Vitor Sampaio'
    }
  },

  getCourse: async (courseId: string): Promise<ICanvasCourse | undefined> => {
    if (!courseId) return undefined

    const { data } = await canvasAPI.get('/...course-info')

    return {
      name: 'Curso canvas'
    }
  },
}
