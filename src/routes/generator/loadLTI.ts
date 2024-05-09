import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { generateAppError } from "../../utils/handleErrors"

export async function generatorLoadLTIRoute(app: FastifyInstance) {
  app.post('/generator/load-lti', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userId = (req.body as any).custom_canvas_user_id.value
      const courseId = (req.body as any).custom_canvas_course_id.value

      const baseUrl = process.env.QUESTION_GENERATOR_URL
      const urlRedirect = `${baseUrl}?user_id=${userId}&course_id=${courseId}`

      return reply.redirect(301, urlRedirect)
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | loadLTIRoute | post | /generator/load-lti: ', appError)

      return reply.status(500).send(appError)
    }
  })
}
