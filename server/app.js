// server/app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
app.use(bodyParser.json());

// Route pour sauvegarder un message
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
        await db.run(sql, [name, email, message]);
        res.status(200).json({ message: 'Message envoyé avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
