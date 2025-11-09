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

rotas.post('/addform', async (req, res) => {
  try {
    await Formulario.create({
      indicador: req.body.indicador,
      celular: req.body.indicado,
      nome: req.body.nome,
      email: req.body.email,
      pais: req.body.pais,
      moeda: req.body.moeda,
      pin: req.body.pin
    })
    res.json({ sucesso: true, mensagem: "Cadastro realizado com sucesso!" })
  }catch(erro){
    console.error("Erro ao cadastrar formulário:", erro)
    res.status(500).json({ sucesso: false, mensagem: "Erro ao cadastrar formulário.", erro })
  }
})

rotas.post("/verificar-indicador", async (req, res) => {
  const { indicador } = req.body
  console.log(indicador)
  try {
    const existe = await Formulario.findOne({ where: { indicador } })
    res.json({ existe: !!existe })
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: "Erro no servidor" })
  }
})

rotas.post("/verificar-indicado", async (req, res) => {
  const { celular } = req.body
  try {
    const existe = await Formulario.findOne({ where: { celular } })
    res.json({ existe: !!existe })
  } catch (err) {
    console.error(err)
    res.status(500).json({ erro: "Erro no servidor" })
  }
})

module.exports = rotas