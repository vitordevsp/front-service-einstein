import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { canvasService } from "../../services/canvasService"

export async function courseInfoRoute(app: FastifyInstance) {
  app.get('/canvas/course-info/:courseId', async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const courseId = (req.params as any).courseId

      const courseInfo = await canvasService.getCourse(courseId)

      console.log('courseInfo: ', courseInfo)

      return reply.status(200).send(courseInfo)
    }
    catch (error) {
      return reply.status(500).send({ error })
    }
  })
}
