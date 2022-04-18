const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const path = require("path");  
require("dotenv").config();
require('./db')
const app = express();
 
app.use(cors());
app.use(morgan('dev'));
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
// Start the server
const PORT = process.env.PORT || 8080;

app.listen(app.get('port'), () => console.log('server running ' +app.get('port')));