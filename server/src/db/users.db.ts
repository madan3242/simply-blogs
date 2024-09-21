import { query } from "../config"

const getAllUsers = async () => {
    const users = await query(`SELECT * FROM users`, ``);
    return users.rows;
}

const createUser = async () =>{
    
}

export {
    getAllUsers
}