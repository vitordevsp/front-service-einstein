import { canvasAPI } from "../../lib/canvasAPI"
import { ICanvasCourseResponse, ICanvasUserResponse } from "../../types/canvas"

export const canvasService = {
  getUser: async (userId: string): Promise<ICanvasUserResponse | null> => {
    if (!userId) return null

    // const { data } = await canvasAPI.get('/...user-info')

    return {
      name: 'Vitor Sampaio'
    }
  },

  getCourse: async (courseId: string): Promise<ICanvasCourseResponse | null> => {
    if (!courseId) return null

    // const { data } = await canvasAPI.get('/...course-info')

    return {
      name: 'Curso canvas'
    }
  },
}
