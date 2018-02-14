module.exports = function(data, request, response){
	if(data.todo == "" || data.todo == undefined || data.todo == null)
	{
		response.status(200);
		response.send(JSON.stringify({
			success: false,
			reason: 'todo item is missing !'
		}));
	}
	else
	{
		var todo_model = require('../schemas/todo_schema.js');
		todo_model.create(data, function(error, result){
			if(error)
			{
				response.status(500);
				response.send(JSON.stringify({
					success: false,
					reason: 'some internal error occurred !'
				}));
			}
			else
			{
				response.status(200);
				response.send(JSON.stringify({
					success: true,
					result: {
						_id: result._id,
						todo: result.todo,
						created_at: result.created_at
					}
				}));
			}
		});
	}
};