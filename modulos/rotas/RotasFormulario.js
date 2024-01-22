const express = require('express')
const rotas = express.Router()
const Formulario = require('../bancos/Formulario.js')

rotas.get('/', (req, res) => {
    Formulario.findAll().then(function(formulario){
        return (
            res.json(formulario)
        )
    })
})

rotas.post('/addform', (req, res) => {

    Formulario.create({
        indicador: req.body.indicador,
        celular: req.body.celular,
        nome: req.body.nome,
        email: req.body.email,
        confirmEmail: req.body.confirmEmail,
        pais: req.body.pais,
        moeda: req.body.moeda,
        pin: req.body.pin
    }).then(()=>{
        res.redirect('https://wtnpay.onrender.com')
    }).catch((erro)=>{
        res.send("Formulario não pode ser cadastrado! " + erro)
    })
})

module.exports = rotas