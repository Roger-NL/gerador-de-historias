// server.js

const express = require('express');
const app = express();
const path = require('path');
const sqlite3 = require('sqlite3').verbose(); // Adicionado
const bodyParser = require('body-parser');    // Adicionado

// Configurar o body-parser para lidar com dados JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('database.db');

// Criar a tabela 'historias' se não existir
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS historias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    conteudo TEXT NOT NULL
  )`);
});

// Servir arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(__dirname));

// Rotas para as páginas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/criar.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'criar.html'));
});

app.get('/historia.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'historia.html'));
});

app.get('/biblioteca.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'biblioteca.html'));
});

app.get('/sobre.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'sobre.html'));
});

app.get('/contato.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'contato.html'));
});

// Rota para salvar a história no banco de dados
app.post('/salvar-historia', (req, res) => {
  const { titulo, conteudo } = req.body;

  db.run(`INSERT INTO historias (titulo, conteudo) VALUES (?, ?)`, [titulo, conteudo], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erro ao salvar a história.');
    }
    res.status(200).send('História salva com sucesso!');
  });
});

// Rota para obter todas as histórias do banco de dados
app.get('/obter-historias', (req, res) => {
  db.all(`SELECT * FROM historias`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erro ao obter as histórias.');
    }
    res.json(rows);
  });
});

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
