import { Pool } from "pg";

let DATABASE_URL = `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

const pool = new Pool({
    connectionString: DATABASE_URL
});

const query = (text: any, params: any) => pool.query(text, params);
const end = pool.end();

export {
    query,
    end
}