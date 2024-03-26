import pool from '../../utils/postgres';

export async function fetchProductFromDB(){
  try{
    const client = await pool.connect();
    // console.log("connected");

    
    const result = await client.query("SELECT * FROM product");
    const data = result.rows;
    // console.log("Fetched data", data);

    client.release();
    return data;
  }catch(error){
    console.log("error fetching data", error);
    throw error;
  }
}

