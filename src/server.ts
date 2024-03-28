import "dotenv/config"

import Fastify, { FastifyInstance } from 'fastify'
import FastifyMultipart from '@fastify/multipart'
import { routes } from './routes'

export const server: FastifyInstance = Fastify({})

server.register(FastifyMultipart, { attachFieldsToBody: true })

server.register(routes)

async function start() {
  try {
    await server.listen({ port: 8080 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

    console.log('Servidor rodando na porta:', port)
  }
  catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
