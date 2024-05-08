import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { generateAppError } from "../../utils/handleErrors"

export async function loadScriptTutor(app: FastifyInstance) {
  app.get('/tutor/load-script-tutor', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const urlRedirect = process.env.CHATBOT_TUTOR_SCRIPT_FILE_URL || ""
      return reply.redirect(301, urlRedirect)
    }
    catch (error) {
      const appError = generateAppError(error)
      console.error('ERROR | loadScriptTutor | get | /tutor/load-script-tutor: ', appError)

      return reply.status(500).send(appError)
    }
  })
}
