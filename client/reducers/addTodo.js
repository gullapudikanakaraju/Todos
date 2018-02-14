import React from 'react';

export default (state= {
	    initial: true,
		todos: [],
		isPending: false,
		error: null
	}, action) => {
	switch(action.type){

		case "ADD_TODO_PENDING" :
			return Object.assign({}, state, {
				isPending: true
			});

		case "ADD_TODO_FULFILLED" :
			if(action.payload.data.success == true)
				return Object.assign({}, state, {
					isPending: false,
					todos: [action.payload.data.result, ...state.todos]
				});
			else
				return Object.assign({}, state, {
					isPending: false,
					error: {
						reason: action.payload.data.reason
					}
				});

		case "ADD_TODO_REJECTED" :
			return Object.assign({}, state, {
				isPending: false,
				error: action.payload
			});

		case "REMOVE_TODO_PENDING" :
			return state;

		case "REMOVE_TODO_FULFILLED" :
			if(action.payload.data.success == true)
			{
				let temp = [];
			    for(let i=0;i<state.todos.length;i++)
			    {
			    	if(state.todos[i]._id !== action.payload.data._id)
			    		temp.push(state.todos[i]);
			    }
				return Object.assign({}, state, {
					todos: temp
				});			
			}
			else
			{
				return Object.assign({}, state, {
					error: {
						reason: action.payload.data.reason
					}
				});
			}

		case "REMOVE_TODO_REJECTED" :
			return Object.assign({}, state, {
				error: action.payload
			});

		case "FETCH_ALL_TODOS_PENDING" :
			return state;

		case "FETCH_ALL_TODOS_FULFILLED" :
			if(action.payload.data.success == true)
			{
				return Object.assign({}, state, {
					initial: false,
					todos: action.payload.data.todos
				});			
			}
			else
			{
				return Object.assign({}, state, {
					error: {
						reason: action.payload.data.reason
					}
				});
			}

		case "FETCH_ALL_TODOS_REJECTED" :
			return Object.assign({}, state, {
				initial: false,
				error: action.payload
			});

		default: 
			return state;
	}
};
