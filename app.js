const path = require('path')
const express = require('express')

const app = express()
const herokuPort = process.env.PORT || 3000
//Se o process.env.port não existir, o valor fica 3000

//__dirname retorna o caminho atual
const publicPath = path.join(__dirname, "../public")

//inicia diretorio padrão do servidor e funciona no Heroku
app.use(express.static(publicPath))
app.listen(herokuPort, () => {
    console.log(`Listering on port ${herokuPort}.`) //log para server local
})