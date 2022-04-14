const express = require('express');
const app = express();

app.use(express.static(__dirname+"/angularApp/src"));

app.get("/", (req, res) => {
    res.send("solicitando ruta raiz");
});

app.listen(5000, () => console.log('server running'));