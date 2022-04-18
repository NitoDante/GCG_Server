const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const path = require("path");  

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'images','teamsIcons')));  

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/players",require('./src/routes/players.routes'))
app.use("/api/teams",require('./src/routes/teams.routes'))
app.use("/api/matches",require('./src/routes/matches.routes'))

app.get("/", (req, res) => {
    res.send("solicitando ruta raiz");
});

module.exports = app;