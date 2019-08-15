var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

//username: Taine
//password: wordpass1

var User = require('./user-model');

var connectionString = 'mongodb://Taine:wordpass1@cluster0-shard-00-00-41olx.mongodb.net:27017,cluster0-shard-00-01-41olx.mongodb.net:27017,cluster0-shard-00-02-41olx.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(connectionString,{ useNewUrlParser: true });
var  db = mongoose.connection;
db.once('open', () => console.log('Database connected'));
db.on('error', () => console.log('Database error'));


var app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));


var router = express.Router();

router.get('/testing', (req, res) => {
    res.send('<h1>This should be visible if test works</h1>')
})

router.get('/users', (req, res) => {

	Project.find()
	.then((projects) => {
	    return res.json(projects);
	});
})


app.use('/api', router);


const apiPort = 4000;
app.listen(apiPort, () => console.log('Listening on port '+apiPort));