const express = require('express')
const rotas = express.Router()
const Formulario = require('../bancos/Formulario.js')

rotas.get('/', (req, res) => {
    Formulario.findAll().then(function(formulario){
        return (
            res.json(formulario)
        )
    }).catch((erro) => {
        console.error('Erro ao buscar formulários:', erro)
        res.status(500).send('Erro ao buscar formulários.')
    })
})

rotas.post('/addform', (req, res) => {
    Formulario.create({
        indicador: req.body.indicador,
        celular: req.body.indicado,
        nome: req.body.nome,
        email: req.body.email,
        pais: req.body.pais,
        moeda: req.body.moeda,
        pin: req.body.pin
    }).then(()=>{
        res.redirect('https://wtnpay.onrender.com/concluido')
    }).catch((erro)=>{
        res.send("Formulario não pode ser cadastrado! " + erro)
    })
})

module.exports = rotas