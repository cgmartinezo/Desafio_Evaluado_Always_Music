import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM ESTUDIANTES')
    return rows
}

const findOneById = async (rut) => {
    const query = {
        text: `SELECT * FROM ESTUDIANTES WHERE RUT = $1`,
        values: [rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const create = async ({ nombre, rut, curso, nivel }) => {
    // consultas parametrizadas
    // consultas preparadas
    const query = {
        text: `
        INSERT INTO ESTUDIANTES (NOMBRE,RUT, CURSO, NIVEL) 
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        values: [nombre, rut, curso, nivel]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (rut) => {
    const query = {
        text: `
            DELETE FROM ESTUDIANTES
            WHERE RUT = $1
            RETURNING *
        `,
        values: [rut]
    }

    const { rows } = await pool.query(query)
    return rows[0]

}


const update = async (estudiante) => {
    const query = {
        text: `
            UPDATE ESTUDIANTES
            SET NOMBRE = $1,
            CURSO = $2,
            NIVEL = $3
            WHERE RUT = $4
            RETURNING *
        `,
        values: [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const Estudiante = { findAll, create, findOneById, remove, update }

