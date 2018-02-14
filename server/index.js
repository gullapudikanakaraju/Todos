var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 8000));

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', function(request, response){
	console.log('in /');
	response.status(200);
	response.sendFile(path.join(__dirname, '../client/index.html'));
});

// to add a todo item
require('./controllers/add_todo_controller.js')(app);

// to fetch all todos
require('./controllers/get_all_todos_controller.js')(app);

// to delete a todo item
require('./controllers/delete_todo_controller.js')(app);

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});