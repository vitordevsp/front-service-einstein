import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function loadScriptTutor(app: FastifyInstance) {
  app.get('/canvas/load-script-tutor', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const urlRedirect = process.env.CHATBOT_TUTOR_SCRIPT_FILE_URL || ""
      return reply.redirect(301, urlRedirect)
    }
    catch (error) {
      console.error('ERROR | loadScriptTutor: ', error)
      return reply.status(500).send({ error })
    }
  })
}
