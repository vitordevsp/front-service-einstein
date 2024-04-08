import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import jsonwebtoken from "jsonwebtoken"
import { canvasService } from "../../services/canvasLMSService"
import { IAuthenticationRequest, IAuthenticationResponse } from "../../types/canvas"

const secretJWT = process.env.SECRET_KEY || ''

export async function authenticationRoute(app: FastifyInstance) {
  app.post('/canvas/authentication', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const { userId, courseId } = req.body as IAuthenticationRequest

      const userInfo = await canvasService.getUser(userId)
      const courseInfo = await canvasService.getCourse(courseId)
      // const isUserExist = await canvasService.checkUserExistsInTheCourse(userId, courseId)

      // if (!userInfo || !courseInfo || !isUserExist) {
      //   return reply.status(401).send({
      //     message: "Informações invalidas",
      //   })
      // }

      const jwtPayload = {
        id: userId,
        name: userInfo?.name,
        email: userInfo?.email,
      }

      const token = jsonwebtoken.sign(jwtPayload, secretJWT)

      const authenticationResponse: IAuthenticationResponse = {
        token,
        userInfo,
        courseInfo
      }

      return reply.status(200).send(authenticationResponse)
    }
    catch (error) {
      console.error('ERROR | authenticationRoute: ', error)
      return reply.status(500).send(error)
    }
  })
}
