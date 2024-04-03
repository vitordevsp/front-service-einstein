import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { canvasService } from "../../services/canvasLMSService"

export async function courseInfoRoute(app: FastifyInstance) {
  app.get('/canvas/course-info/:courseId', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const courseId = (req.params as any).courseId

      const courseInfo = await canvasService.getCourse(courseId)

      return reply.status(200).send(courseInfo)
    }
    catch (error) {
      console.error('ERROR | courseInfoRoute: ', error)
      return reply.status(500).send({ error })
    }
  })
}
