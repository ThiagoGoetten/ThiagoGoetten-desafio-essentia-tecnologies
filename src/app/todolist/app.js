const express = require('express');
const mysql = require('mysql2');
const app = express();

// Configuração do MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '10141823',
    database: 'todolist'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

app.use(express.json());

// Rota de exemplo
app.get('/usuarios', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));



