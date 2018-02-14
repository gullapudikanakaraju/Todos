module.exports = function(id, request, response){
	if(id == "" || id == undefined || id == null)
	{
		response.status(200);
		response.send(JSON.stringify({
			success: false,
			reason: 'id is missing !'
		}));
	}
	else
	{
		var todo_model = require('../schemas/todo_schema.js');
		todo_model.remove({_id : id}, function(error, result){
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
					_id: id
				}));
			}
		});
	}
};