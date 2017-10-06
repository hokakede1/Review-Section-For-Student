const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(cors())


app.get('/api/hello', (req,res) => {
    axios.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=9618a7c6df4946c0b5ba0da63ea1448a')
    .then(articles => {
        res.status(200).send(articles.data)
    })
    
})








app.listen(port, () => {
    console.log(`Your Server Is Running On Port ${port}`)
})
