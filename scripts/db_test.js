
const mysql = require('mysql2/promise');
require('dotenv').config();

async function testConnection() {
    console.log("Testing connection with:");
    console.log("Host:", process.env.DB_HOST);
    console.log("User:", process.env.DB_USER);
    console.log("Database:", process.env.DB_NAME);

    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log("SUCCESS: Connected to the database!");
        await connection.end();
    } catch (error) {
        console.error("CONNECTION FAILED:");
        console.error("Code:", error.code);
        console.error("Error:", error.message);
    }
}

testConnection();
