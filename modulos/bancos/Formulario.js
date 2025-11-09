    const Conexao = require('../Conexao.js')
    const Sequelize = Conexao.Sequelize
    const sequelize = Conexao.sequelize

    const Formulario = sequelize.define('formulario', {
        indicador: {
            type: Sequelize.STRING
        },
        celular: {
            type: Sequelize.STRING
        },
        nome: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        pais: {
            type: Sequelize.STRING
        },
        moeda: {
            type: Sequelize.STRING
        },
        pin: {
            type: Sequelize.STRING
        }
    })

    //Cria a tebela **usar uma unica vez**
    //Formulario.sync({force: true})

    module.exports = Formulario