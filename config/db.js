const mysql2 = require('mysql2');
require('dotenv').config();

const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT, // <--- Indispensable pour Aiven (26451)
    ssl: {
        rejectUnauthorized: false // <--- Obligatoire pour accepter le certificat d'Aiven
    }
});

db.connect((err) => {
    if (err) {
        console.error('Erreur connexion MySQL (Vérifie ton port et ton SSL) :', err.message);
        return;
    }
    console.log('MySQL Aiven connecté ✅');
});

module.exports = db.promise();