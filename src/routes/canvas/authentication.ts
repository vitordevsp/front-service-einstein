import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import jsonwebtoken from "jsonwebtoken"
import { canvasService } from "../../services/canvasService"
import { IAuthentication } from "../../types/canvas"

const secretJWT = process.env.SECRET_KEY || ''

export async function authenticationRoute(app: FastifyInstance) {
  app.post('/canvas/authentication', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const authData = req.body as IAuthentication

      const userInfo = await canvasService.getUser(authData.userId)
      const courseInfo = await canvasService.getCourse(authData.courseId)

      if (!userInfo || !courseInfo) {
        return reply.status(401).send({
          message: "Informações invalidas",
        })
      }

      const token = jsonwebtoken.sign(authData, secretJWT)

      return reply.status(200).send({
        token,
        userInfo,
        courseInfo
      })
    }
    catch (error) {
      return reply.status(500).send(error)
    }
  })
}
