interface IUserCanvas {
  name: string
}

interface ICourseCanvas {
  name: string
}

export const canvasApi = {
  getUser: (userId: string): IUserCanvas | undefined => {
    if (!userId) return undefined

    return {
      name: 'Vitor Sampaio'
    }
  },

  getCourse: (courseId: string): ICourseCanvas | undefined => {
    if (!courseId) return undefined

    return {
      name: 'Vitor Sampaio'
    }
  },
}
