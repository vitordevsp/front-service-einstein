import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function authenticationRoute(app: FastifyInstance) {
  app.post('/canvas/authentication', (req: FastifyRequest, reply: FastifyReply) => {
    console.log('authenticationRoute: ', req.body)

    return reply.status(200).send({
      ok: true,
    })
  })
}
