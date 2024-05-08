import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { generateAppError } from "../../utils/handleErrors"

export async function loadStyleTutor(app: FastifyInstance) {
  app.get('/tutor/load-style-tutor', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const urlRedirect = process.env.CHATBOT_TUTOR_STYLE_FILE_URL || ""
      return reply.redirect(301, urlRedirect)
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | loadStyleTutor | get | /tutor/load-style-tutor: ', appError)

      return reply.status(500).send(appError)
    }
  })
}
