import axios from 'axios';

export const removeTodo = (todoId) => {
	return dispatch => dispatch({
		type: 'REMOVE_TODO',
		payload: axios.post('http://localhost:8000/deleteTodo', {
			id: todoId
		})
	}).catch((error) => {
			console.log('ERROR OCCURRED'+ error);
	});
};