require('dotenv').config();
const express = require('express');
const app = express();
require('./models');

app.use(require('cors')())

require('./controllers')(app);
require('./config/associations');

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
})