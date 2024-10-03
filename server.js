// server.js

const express = require('express');
const app = express();
const path = require('path');

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

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
