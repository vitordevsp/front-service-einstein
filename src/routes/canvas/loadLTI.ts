import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function loadLTIRoute(app: FastifyInstance) {
  app.post('/canvas/load-lti', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userId = (req.body as any).custom_canvas_user_id.value
      const courseId = (req.body as any).custom_canvas_course_id.value

      const baseUrl = process.env.CHATBOT_TUTOR_URL
      const urlRedirect = `${baseUrl}?user_id=${userId}&course_id=${courseId}`

      return reply.redirect(301, urlRedirect)
    }
    catch (error) {
      console.error('ERROR | loadLTIRoute: ', error)
      return reply.status(500).send({ error })
    }
  })
}
