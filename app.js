const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Conexao = require('./modulos/Conexao.js')
const sequelize = Conexao.sequelize
const cors = require('cors')
const RotasFormulario = require('./modulos/rotas/RotasFormulario.js')

sequelize.authenticate().then(  () => {
    console.log('Conectado com sucesso!')
}).catch(   (erro) => {
    console.log('Falha ao se conectar: ' + erro)
})

app.use(cors({
    origin: ['https://wtnpay.onrender.com', 'https://wtnpay.com', 'https://www.wtnpay.com', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return (
        res.send('Testinho')
    )
})

app.use('/rotasForm', RotasFormulario)

app.listen(process.env.PORT || 5000, () => {
    console.log('Servidor rodando na URL http://localhost:5000/')
})