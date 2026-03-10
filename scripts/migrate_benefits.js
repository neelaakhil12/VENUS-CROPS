
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

async function migrate() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
        console.log("Adding benefits column to varieties table...");
        await connection.query('ALTER TABLE varieties ADD COLUMN IF NOT EXISTS benefits TEXT');
        console.log("SUCCESS: benefits column added.");
    } catch (err) {
        console.error("Migration failed:", err);
    } finally {
        await connection.end();
    }
}

migrate();
