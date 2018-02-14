module.exports = function(app){
	app.get('/getAllTodos', function(request, response){
		var get_all_todos_model = require('../models/get_all_todos_model.js');
		
		get_all_todos_model(request, response);
	});
};