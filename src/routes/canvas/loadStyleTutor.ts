import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"

export async function loadStyleTutor(app: FastifyInstance) {
  app.get('/canvas/load-style-tutor', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const urlRedirect = process.env.CHATBOT_TUTOR_STYLE_FILE_URL || ""
      return reply.redirect(301, urlRedirect)
    }
    catch (error) {
      console.error('ERROR | loadStyleTutor: ', error)
      return reply.status(500).send({ error })
    }
  })
}
