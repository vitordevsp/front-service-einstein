import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { canvasService } from "../../services/canvasLMSService"
import { coreService } from "../../services/CoreService"
import { generateAppError } from "../../utils/handleErrors"
import { IAuthenticationRequest, IAuthenticationResponse } from "../../types/canvas"
import { ICreateUserPayload } from "../../types/coreAPI"

export async function authenticationRoute(app: FastifyInstance) {
  app.post('/canvas/authentication', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { userId, courseId } = req.body as IAuthenticationRequest

      const userInfo = await canvasService.getUser(userId)
      const courseInfo = await canvasService.getCourse(courseId)
      // const isUserExist = await canvasService.checkUserExistsInTheCourse(userId, courseId)

      if (!userInfo || !courseInfo) {
        return reply.status(401).send({
          message: "Informações invalidas",
        })
      }

      const userPayload: ICreateUserPayload = {
        email: userInfo.email,
        lms_user_id: userInfo.id,
        password: userInfo.id,
        name: userInfo.name,
        last_name: "",
      }

      let token = ""
      let token_exp_date = ""

      const userCreated = await coreService.createUser(userPayload)
      if (userCreated) {
        token = userCreated.token
        token_exp_date = userCreated.token_exp_date
      }
      else {
        const responseToken = await coreService.generateToken(userInfo.email, userInfo.id)
        token = responseToken.token
        token_exp_date = responseToken.token_exp_date
      }

      const authenticationResponse: IAuthenticationResponse = {
        token,
        token_exp_date,
        userInfo,
        courseInfo
      }

      return reply.status(200).send(authenticationResponse)
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | authenticationRoute | post | /canvas/authentication: ', appError)

      return reply.status(500).send(appError)
    }
  })
}
