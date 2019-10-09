require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser').json();

const imageController = require('../server/controllers/imageController.js');

const app = express();

app.use(bodyParser);

app.get('/', imageController.images);

const PORT = 4000;

app.listen(PORT, () => console.log(`Connected to PORT ${PORT}`));
