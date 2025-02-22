// Request

export interface IAuthenticationRequest {
  email?: string
  userId: string
  courseId: string
}

// Response

export interface IAuthenticationResponse {
  token: string
  token_exp_date: string
  userInfo: ICanvasUserResponse | null
  courseInfo: ICanvasCourseResponse | null
}

export interface ICanvasUserResponse {
  id: string
  name: string
  display_name: string
  avatar_url: string
  email: string
}

export interface ICanvasCourseResponse {
  id: string
  name: string
  start_at: string
  end_at: string
}
