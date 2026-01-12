import express, { Request, Response } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

// Rota de Cadastro (POST)
app.post('/todos', async (req: Request, res: Response) => {
  const { title, done } = req.body

  // Validação: Não deixa criar tarefa sem título
  if (!title) {
    return res.status(400).json({ error: 'O título é obrigatório.' })
  }

  const todo = await prisma.todo.create({
    data: {
      title,
      done: done || false
    }
  })

  return res.status(201).json(todo)
})

// Rota de Listagem (GET)
app.get('/todos', async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany()
  return res.json(todos)
})

// Rota de Deleção (DELETE)
app.delete('/todos/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const todoExists = await prisma.todo.findUnique({
    where: { id }
  })

  if (!todoExists) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' })
  }

  await prisma.todo.delete({
    where: { id }
  })

  return res.status(204).send()
})

app.listen(3333, () => {
  console.log('Servidor rodando em http://localhost:3333/todos')
})