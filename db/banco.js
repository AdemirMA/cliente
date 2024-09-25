const Sequelize = require("sequelize");
const sequelize = new Sequelize("clientela","root","",{
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function () {
  console.log("Sucesso na conexão!");
}).catch(function (erro) {
  console.log("Erro na conexão: " + erro);
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
}

