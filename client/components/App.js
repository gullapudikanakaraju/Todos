import React, { Component } from 'react';
import TodoInput from '../containers/TodoInput.js';
import TodoList from '../containers/TodoList.js';
let styleTodoList = {
	border: '1px solid gray',
	borderRadius: '1px',
	padding: '15px',
	backgroundColor: '#999966'
};

export default (props) => {
	return (
		<div className="container">
			<br />

			<div className="row">
				<div className="col-sm-12">
					<center>
						<h2>TODO's</h2>
					</center>
				</div>
			</div>

			<br />

			<div className="row">
			    <div className="col-sm-6 col-sm-offset-3">
					<TodoInput />
				</div>
			</div>

			<br />

			<div className="row">
			    <div className="col-sm-6 col-sm-offset-3">
			    	<div style={styleTodoList}>
			    		<TodoList />
			    	</div>
				</div>
			</div>
		</div>
	);
};