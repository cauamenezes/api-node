const express = require('express');
const usuarioModel = require('../model/Usuario');

/* CRIA A INSTÂNCIA DE ROTAS */
const router = express.Router();

/* CRIAR AS ROTAS */
/* ROTA DE INSERÇÃO

o router é capaz de receber requisições de verbos HTTP.

Parâmetros:
1 - Uma string representando a rota;
2 - Um callback que trata a requisição (req) e a resposta (res).
*/

router.post('/usuario/inserirUsuario', (req, res)=>{

    // console.log(req.body);

    const {nome, sobrenome, email, foto, login, senha} = req.body;

    usuarioModel.create({
        nome,
        sobrenome,
        email,
        foto,
        login,
        senha
    }).then(()=>{
        res.status(200).json({'msg': 'Usuário inserido com sucesso!'});
    });

});

module.exports = router;