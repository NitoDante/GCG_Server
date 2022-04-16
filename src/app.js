const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/players",require('./routes/players.routes'))
app.use("/api/teams",require('./routes/teams.routes'))

app.get("/", (req, res) => {
    res.send("solicitando ruta raiz");
});

module.exports = app;