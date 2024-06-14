import { pool } from "../database/connection.js";

const findAll = async () => {
    const query = {
        text: 'SELECT * FROM SKATERS',

    }
    const { rows } = await pool.query(query)
    return rows
}


const create = async (email, nombre, password, anos_experiencia, especialidad, foto, estado) => {
    const query = {
        text: "INSERT INTO SKATERS (email, nombre, password, anos_experiencia, especialidad, foto, estado) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ",
        values: [email, nombre, password, anos_experiencia, especialidad, foto, estado]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const findOneByMail = async (mail) => {
    const query = {
        text: "SELECT * FROM SKATERS WHERE email = $1",
        values: [mail]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const findOneById = async (id) => {
    const query = {
        text: "SELECT * FROM SKATERS WHERE id = $1",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: "DELETE FROM SKATERS WHERE id = $1 RETURNING *",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async (skater) => {
    const query = {
        text: "UPDATE SKATERS SET nombre= $1, password= $2, anos_experiencia= $3, especialidad= $4 WHERE id= $5 RETURNING *",
        values: [skater.nombre, skater.password, skater.anos_experiencia, skater.especialidad, skater.id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const updateStatus = async (id, estado) => {
    const query = {
        text: "UPDATE SKATERS SET estado= $1 WHERE id= $2 RETURNING *",
        values: [estado, id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const modelSkater = {
    findAll,
    create,
    findOneByMail,
    findOneById,
    remove,
    update,
    updateStatus
}