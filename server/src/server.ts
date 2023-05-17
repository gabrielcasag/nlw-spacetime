import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', (req, res) => {
  return 'oi'
})

app.get('/users', (req, res) => {
  const users = prisma.user.findMany()

  return users
})

app
  .listen({
    host: 'localhost',
    port: 3333,
  })
  .then(() => {
    console.log('listening on port 3333')
  })
