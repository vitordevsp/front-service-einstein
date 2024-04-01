// Request

export interface IAuthenticationRequest {
  email: string
  userId: string
  courseId: string
}

// Response

export interface IAuthenticationResponse {
  token: string
  userInfo: ICanvasUserResponse
  courseInfo: ICanvasCourseResponse
}

export interface ICanvasUserResponse {
  name: string
}

export interface ICanvasCourseResponse {
  name: string
}
