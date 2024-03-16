import {Pool} from 'pg'


const pool = new Pool({
  user:'postgres',
  password: 'moicas',
  host: 'localhost',
  port: 5432,
  database:'handcrafted'
})



export default pool
