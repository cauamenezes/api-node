/* IMPORTA O PACOTE EXPRESS PARA A APLICAÇÃO */
const express = require('express');

/* CRIA UMA INSTÂNCIA DO PACOTE EXPRESS PARA SER UTILIZADA NA APLICAÇÃO */
const app = express();

/* IMPORTA A CONTROLLER DE USUÁRIO */
const controllerUsuario = require('./controller/UsuarioController');

/* CONFIGURAÇÕES DO EXPRESS PARA MANNIPULAR FORMATO JSON */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* CONFIGURAÇÃO DA ROTA DE USUÁRIO

Parâmetros:
1 - A raiz das requisições que é representada por uma "/"
2 - 
*/
app.use('/', controllerUsuario)

/* IMPORTA O ARQUIVO DE CONEXÃO */
// const connection = require('./database/database');

/* IMPORTA O ARQUIVO DE MODEL DE USUÁRIO */
// const usuario = require('./model/Usuario');

/* INSTÂNCIA DO SERVIDOR (EXPRESS) */
/* 3000 é o número da porta do servidor. A porta 3000 é padrão para desenvolvimento */
app.listen(3000, ()=>{

    console.log('SERVIDOR RODANDO EM http://localhost:3000');
});
