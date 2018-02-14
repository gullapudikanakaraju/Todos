import axios from 'axios';

export const fetchAllTodos = () => {
	return dispatch => dispatch({
		type: 'FETCH_ALL_TODOS',
		payload: axios.get('http://localhost:8000/getAllTodos')
	}).catch((error) => {
			console.log('ERROR OCCURRED'+ error);
	});
};