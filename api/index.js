/* IMPORTA O PACOTE EXPRESS PARA A APLICAÇÃO */
const express = require('express');

/* CRIA UMA INSTÂNCIA DO PACOTE EXPRESS PARA SER UTILIZADA NA APLICAÇÃO */
const app = express();

/* INSTÂNCIA DO SERVIDOR (EXPRESS) */
/* 3000 é o número da porta do servidor. A porta 3000 é padrão para desenvolvimento */
app.listen(3000, ()=>{

    console.log('SERVIDOR RODANDO EM http://localhost:3000');
    console.log('TESTE2');
});
