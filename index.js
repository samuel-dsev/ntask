const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .include('models')
    .then('middlewares')
    .then('routes')
    .then('boot')
    .into(app);

