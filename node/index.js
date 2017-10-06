const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())


app.get(`/api/hello/:name1/:name2/:name3/:name4`,(req,res) => {
    console.log(req.params);
    console.log(req.query)
    res.status(200).send({hello: 'hello'})
})





app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})