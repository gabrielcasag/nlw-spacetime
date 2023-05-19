import fastify from 'fastify'
import cors from '@fastify/cors'

import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // true allow all origins, right is the address of all envs
})
app.register(memoriesRoutes)

app
  .listen({
    host: 'localhost',
    port: 3333,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
