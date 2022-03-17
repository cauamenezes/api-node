/* IMPORTA O PACOTE SEQUELIZE PARA A APLICAÇÃO */
const sequelize = require('sequelize');

/* CRIA UMA CONSTANTE NOMEADA COMO connection QUE VAI REPRESENTAR A INSTÂNCIA DE CONEXÃO DO SEQUELIZE

PARÂMETROS DE CONEXÃO:
1 - NOME DO BANCO DE DADOS;
2 - USUÁRIO DO BANCO DE DADOS;
3 - SENHA DO BANCO DE DADOS;
4 - OBJETO JSON QUE DETERMINA O LOCAL ONDE O SERVIÇO DE BANCO DE DADOS ESTÁ SENDO EXECUTADO E SEU TIPO.

*/
const connection = new sequelize(
    'libri',
    'root',
    '12345678',
    {
        'host': 'localhost:3306',
        'dialect': 'mysql',
    }
);

module.exports = connection;