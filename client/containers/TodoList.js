import React from 'react';
import {connect} from 'react-redux';
import {addTodo as add} from '../actions/addTodo.js';
import {removeTodo as remove} from '../actions/removeTodo.js';
import {fetchAllTodos as fetchAll} from '../actions/fetchAllTodos.js';

class TodoList extends React.Component
{
	constructor(props)
	{
		super(props);
	    this.removeTodoItem = this.removeTodoItem.bind(this);
	}
	componentDidMount()
	{
		this.props.fetchAllTodos();
	}
	removeTodoItem(event)
	{
		this.props.removeTodo(event.target.getAttribute('id'));
	}
	render()
	{
		let todos = this.props.todosInStore;
		return (
			<div>
			{
				todos.length <= 0 ? <p>No todo's yet !</p> :
				todos.map(todoItem => (
					<div key={todoItem._id}>
						<div className="row">
							<div className="col-sm-7">
								<p><b> {todoItem.todo} </b></p>
							</div>
							<div className="col-sm-4">
								<button className="btn btn-danger" type="button" style= {{float:'right'}} id= {todoItem._id} onClick={this.removeTodoItem}> 
									Remove 
								</button>
							</div>
							<div className="col-sm-1"></div>
						</div>
						<div className="row">
							<div className="col-xs-12">
								<p> {new Date(todoItem.created_at).toUTCString()} </p>
							</div>
						</div>
						<hr />
					</div>
				))
			}
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return  {
		todosInStore: state.addTodo.todos
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeTodo: (todoId) => {
			dispatch(remove(todoId));
		},
		fetchAllTodos: () => {
			dispatch(fetchAll());
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);