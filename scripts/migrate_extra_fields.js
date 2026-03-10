const mysql = require('mysql2/promise');
require('dotenv').config();

async function migrate() {
    console.log('Starting extra fields migration...');
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT || 3306
    });

    try {
        const columns = [
            'ADD COLUMN IF NOT EXISTS suitability VARCHAR(255)',
            'ADD COLUMN IF NOT EXISTS sowing_period VARCHAR(255)',
            'ADD COLUMN IF NOT EXISTS spacing VARCHAR(255)',
            'ADD COLUMN IF NOT EXISTS grains_characters VARCHAR(255)',
            'ADD COLUMN IF NOT EXISTS cuttings VARCHAR(255)'
        ];

        for (const col of columns) {
            console.log(`Executing: ALTER TABLE varieties ${col}`);
            // Note: MariaDB/MySQL ALTER TABLE doesn't support 'IF NOT EXISTS' for columns directly in all versions.
            // Using a safer approach with try-catch or checking information_schema is better but for a script like this, we can try.
            try {
                await connection.execute(`ALTER TABLE varieties ${col}`);
            } catch (innerErr) {
                if (innerErr.code === 'ER_DUP_FIELDNAME') {
                    console.log(`Column already exists, skipping.`);
                } else {
                    throw innerErr;
                }
            }
        }

        console.log('SUCCESS: Extra fields migration complete.');
    } catch (err) {
        console.error('Migration failed:', err.message);
    } finally {
        await connection.end();
    }
}

migrate();
