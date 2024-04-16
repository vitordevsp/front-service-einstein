import "dotenv/config"
import Fastify from 'fastify'
import FastifyMultipart from '@fastify/multipart'
import FastifyCors from '@fastify/cors'
import { routes } from './routes'

const HOST = process.env.SERVER_HOST || '0.0.0.0'
const PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8080
const CORS_ORIGIN = process.env.SERVER_CORS_ORIGIN || '*'

let origin: string | string[] = CORS_ORIGIN
if (CORS_ORIGIN.includes(',')) {
  origin = CORS_ORIGIN.split(',').map(v => v.trim())
}

export const server = Fastify()

server.register(FastifyMultipart, { attachFieldsToBody: true })
server.register(FastifyCors, {
  origin,
})

server.register(routes)

async function start() {
  try {
    await server.listen({
      host: HOST,
      port: PORT,
    })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

    console.log('Servidor rodando na porta:', port)
  }
  catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
