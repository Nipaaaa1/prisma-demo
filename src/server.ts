import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors"

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())


app.get('/api/users', async (req: Request, res: Response) => {
    const data = {
        data: await prisma.user.findMany()
    }
    res.send(data)
})

app.get('/api/users/:id', async (req: Request, res: Response) => {
    const data = {
        data: await prisma.user.findFirst({
            where: {
                id: req.params.id
            }
        })
    }
    res.send(data)
})

app.post('/api/users', async (req: Request, res: Response) => {
    const createUser = await prisma.user.create({
        data: req.body
    })
    res.send(createUser)
})

app.put('/api/users/:id', async (req: Request, res: Response) => {
    const updateUser = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })
    res.send(updateUser)
})

app.delete('/api/users/:id', async (req: Request, res: Response) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.send(deleteUser)
})

app.get('/*', (req: Request, res: Response) => {
    res.send('Please refer to documentation in Github')
})

app.listen(3000, () => {
    console.log("Server running at port 3000")
})