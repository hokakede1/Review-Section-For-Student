const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const app = express();
const port = 8080;




app.use(bodyParser.json());
app.use(cors());


var name = "Milo";

app.get('/api/getName', (req, res) => {
    res.status(200).send(name)
})




app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})