require('dotenv').config();
const App = require('./app');
const { config } = require('./database/models');

const port = process.env.APP_PORT || 3003;

App.listen(port, () => console.log('listening port:', port));