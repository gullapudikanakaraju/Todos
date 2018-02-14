module.exports = function(app){
	app.post('/addTodo', function(request, response){
		var add_todo_model = require('../models/add_todo_model.js');
		var data = {};
		data.todo = request.body.todo;
		data.created_at = new Date().getTime();
		add_todo_model(data, request, response);
	});
};