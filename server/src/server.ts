import fastify from 'fastify'

import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)

app
  .listen({
    host: 'localhost',
    port: 3333,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
