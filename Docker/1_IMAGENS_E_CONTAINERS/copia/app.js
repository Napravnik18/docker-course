const express = require('express') //chama o framework express
const app = express() //inicializa express
const port = 3000 //porta pra aplicação

app.get('/', (req,res) => { //cria rota de GET que vai acessar o / da nossa aplicação, vai retornar requisição ou resposta
    res.send('Olá minha imagem') //manda resposta
})

//indica porta que está escutando, tambem manda uma função anonima para dizer que o container esta sendo executado
app.listen(port, () => {
    console.log(`Executando na porta ${port}`)
}) 