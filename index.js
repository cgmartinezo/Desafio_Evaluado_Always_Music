import 'dotenv/config'
import express from 'express'
import { Estudiante } from './models/estudiante.model.js'
const app = express()

// habilitar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/estudiantes', async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll()
        return res.json(estudiantes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.get('/estudiantes/:rut', async (req, res) => {
    try {
        const { rut } = req.params
        const estudiante = await Estudiante.findOneById(rut)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

// lo más común es utilizar /users/:uid => req.params
app.delete('/estudiantes/:rut', async (req, res) => {
    try {
        const { rut } = req.params
        const estudiante = await Estudiante.remove(rut)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})


app.post('/estudiantes', async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body
        const newEstudiante = await Estudiante.create({ nombre, rut, curso, nivel })
        return res.json(newEstudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.put('/estudiantes/:rut', async (req, res) => {
    try {
        const { rut } = req.params
        const { nombre, curso, nivel } = req.body
        const estudianteUpdate = {
            rut,
            nombre,
            curso,
            nivel
        }
        const estudiante = await Estudiante.update(estudianteUpdate)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})