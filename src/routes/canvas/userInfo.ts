import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { canvasService } from "../../services/canvasService"

export async function userInfoRoute(app: FastifyInstance) {
  app.get('/canvas/user-info/:userId', (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userId = (req.params as any).userId

      const userInfo = canvasService.getUser(userId)

      return reply.status(200).send(userInfo)
    }
    catch (error) {
      return reply.status(500).send({ error })
    }
  })
}
