import {Pool} from 'pg'


const pool = new Pool({
  user:'xxxxxxxx',
  password: 'xxxxxx',
  host: 'xxxxx',
  port: 123,
  database:'xxxxxx'
})



export default pool
