import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function userInfoRoute(app: FastifyInstance) {
  app.get('/canvas/user-info', (req: FastifyRequest, reply: FastifyReply) => {
    return reply.status(200).send({
      ok: true,
    })
  })
}
