module.exports = function(request, response){
	var todo_model = require('../schemas/todo_schema.js');
	todo_model.find({}, function(error, result){
		if(error)
		{
			response.status(500);
			response.send(JSON.stringify({
				success: false,
				reason: 'some internal error  occurred !'
			}));
		}
		else
		{
			response.status(200);
			response.send(JSON.stringify({
				success: true,
				length: result.length,
				todos: result
			}));
		}
	});
};