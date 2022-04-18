const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});
app.use("/api/players",require('./routes/players.routes'))
app.use("/api/teams",require('./routes/teams.routes'))
app.use("/api/matches",require('./routes/matches.routes'))
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});