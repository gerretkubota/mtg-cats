require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();

const router = require('../server/routes/router.js');

const app = express();

app.use(bodyParser);

router(app);

const PORT = 4000;

app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));
