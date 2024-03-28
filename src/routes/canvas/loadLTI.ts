import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function loadLTIRoute(app: FastifyInstance) {
  app.post('/canvas/load-lti', (req: FastifyRequest, reply: FastifyReply) => {
    // const { context_id, user_id } = req.body

    // console.log('context_id: ', context_id)
    // console.log('user_id: ', user_id)

    // const baseUrl = 'https://lustrous-bienenstitch-527ff8.netlify.app'
    // const urlRedirect = `${baseUrl}?user_id=${user_id}&context_id=${context_id}`

    // return res.redirect(301, urlRedirect)

    return reply.status(200).send({
      ok: true,
    })
  })
}
