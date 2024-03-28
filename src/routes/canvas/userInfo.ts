import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { canvasApi } from "../../services/canvasApi"

export async function userInfoRoute(app: FastifyInstance) {
  app.get('/canvas/user-info/:userId', (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userId = (req.params as any).userId

      const userInfo = canvasApi.getUser(userId)

      return reply.status(200).send(userInfo)
    }
    catch (error) {
      return reply.status(500).send({ error })
    }
  })
}
