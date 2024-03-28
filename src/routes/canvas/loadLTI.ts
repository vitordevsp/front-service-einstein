import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function loadLTIRoute(app: FastifyInstance) {
  app.post('/canvas/load-lti', async (req: FastifyRequest, reply: FastifyReply) => {
    const userId = (req.body as any).user_id.value
    const courseId = (req.body as any).context_id.value

    console.log('userId: ', userId)
    console.log('courseId: ', courseId)

    const baseUrl = 'https://lustrous-bienenstitch-527ff8.netlify.app'
    const urlRedirect = `${baseUrl}?user_id=${userId}&context_id=${courseId}`

    return reply.redirect(301, urlRedirect)
  })
}
