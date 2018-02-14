import axios from 'axios';

export const addTodo = (todo) => {
	return dispatch => dispatch({
		type: 'ADD_TODO',
		payload: axios.post('http://localhost:8000/addTodo', {
			todo: todo
		})
	}).catch((error) => {
			console.log('ERROR OCCURRED'+ error);
	});
};