const express = require('express');
const path = require('path');

const validar = require('./middlewares/validar');

const app = express();

app.use(express.json());

// SERVIR ARQUIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')));

//ROTA COM MIDDLWARES
app.post('/cadastro', validar, (req, res) => {
    res.json({ mensagem: "paciente cadastrado com sucesso"});
});

app.listen(3000, () => {
   console.log("Rodando em http://localhost:3000");
});


