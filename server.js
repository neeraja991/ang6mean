var express = require('express');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
const app = express();
const router = express.Router();



app.get('/',(req,res) => res.send('Hello World'));
app.listen(4000,() => console.log('Express server is running on 4000'));