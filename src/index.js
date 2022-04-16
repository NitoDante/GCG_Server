require("dotenv").config();
require('./db')
const app = require('./app');


app.listen(app.get('port'), () => console.log('server running ' +app.get('port')));