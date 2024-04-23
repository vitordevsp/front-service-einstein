export interface ICreateUserPayload {
  email: string
  password: string
  name: string
  last_name: string
  lms_user_id: string
}

export interface ISlidingToken {
  token: string
  token_exp_date: string
}
