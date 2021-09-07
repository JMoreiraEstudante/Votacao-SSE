// import Todo Models
const Linguagem = require("../models/linguagem");

//adicioando uma lista
exports.addLinguagem = (req, res) => {
    let novo = new Linguagem(req.body);
    novo.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};

//pegando todas as linguagens
exports.todasLinguagens = (req, res) => {
    Linguagem.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//pegando apenas uma linguagem
exports.idLinguagem = (req, res) => {
    Linguagem.findOne({'_id':req.params.id}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//incrementando a pontuação em 1
exports.updatePontuacao = (req, res) => {
    Linguagem.findOneAndUpdate({ nome: req.params.nome }, { $inc: { pontuacao: 1 }}, { new: true }, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
    
};

//stream de dados
exports.Stream = (req,res) => {
    res.setHeader("Content-Type", "text/event-stream");
    stream(res);
}

function stream(res){
    Linguagem.find({}, (err, linguagens) => {
        if (err) {
             res.status(500).send(err);
        }
        data = JSON.stringify(linguagens)
        res.write("data: " + ` ${data}\n\n`);
    });
    setTimeout(() => stream(res), 3000);
}