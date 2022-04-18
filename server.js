const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const path = require("path");  

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.static(path.join(__dirname,'images','teamsIcons')));  

app.get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
  });
app.use("/api/players",require('./src/routes/players.routes'))
app.use("/api/teams",require('./src/routes/teams.routes'))
app.use("/api/matches",require('./src/routes/matches.routes'))


module.exports = app;