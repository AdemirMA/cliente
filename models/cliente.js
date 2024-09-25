const db = require('../db/banco.js');

const Clientes = db.sequelize.define("clientes",{
    nome: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING
    },
    cep: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
      type: db.Sequelize.STRING
    }
});

//Clientes.sync({force: true});

Clientes.create({
    nome: "ademr",
    endereco: "rua",
    bairro: "bairro",
    cep: "00000000" ,
    cidade: "cidade",
    estado: "estado"
})

module.exports = Clientes