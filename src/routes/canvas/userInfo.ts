import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { canvasService } from "../../services/canvasLMSService"
import { generateAppError } from "../../utils/handleErrors"

export async function userInfoRoute(app: FastifyInstance) {
  app.get('/canvas/user-info/:userId', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userId = (req.params as any).userId

      const userInfo = await canvasService.getUser(userId)

      return reply.status(200).send(userInfo)
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | userInfoRoute | get | /canvas/user-info/:userId: ', appError)

      return reply.status(500).send(appError)
    }
  })
}
