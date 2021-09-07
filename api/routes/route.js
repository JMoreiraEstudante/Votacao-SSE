'use strict';

module.exports = function (app) {
    var controller = require('../controllers/controller');
    
    //rotas para linguagem
    app
        .route("/linguagem")
        .get(controller.todasLinguagens)
        .post(controller.addLinguagem);

    //rotas para uma especifica linguagem
    app
        .route("/pontuacao/:nome")
        .get(controller.idLinguagem)
        .post(controller.updatePontuacao)

    //rotas para o stream
    app
        .route("/stream")
        .get(controller.Stream);
};