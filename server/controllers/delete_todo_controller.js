module.exports = function(app){
	app.post('/deleteTodo', function(request, response){
		var delete_todo_model = require('../models/delete_todo_model.js');
		
		delete_todo_model(request.body.id, request, response);
	});
};