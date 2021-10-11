const express = require('express');
const path = require('path');
const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname, './partials'));

const app = express();

app.set('views', './views');
app.set('view engine', 'hbs');
