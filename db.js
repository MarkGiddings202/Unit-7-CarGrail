const { pool } = require('pg')

const pool = new pool ({
    database: 'CarGrail',
    user: 'postgres',
    password: ''
})

module.export = {
    pool
}