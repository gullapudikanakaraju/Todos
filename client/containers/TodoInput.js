import React from 'react';
import {connect} from 'react-redux';
import {addTodo as add} from '../actions/addTodo.js';

class TodoInput extends React.Component
{
	constructor(props)
	{
		super(props);
		this.textInput = null;
		this.onClickButton = this.onClickButton.bind(this);
	}
	shouldComponentUpdate(nextProps, nextState)
	{
		if(this.props.add.isPending === nextProps.add.isPending && this.props.add.initial === nextProps.add.initial)
			return false;
		else
			return true;
	}
	onClickButton(event)
	{
		this.props.addTodo(this.textInput.value);
	}
	render()
	{
		let buttonText = null;
		let buttonStatus = null;
		if(this.props.add.initial == true){
			buttonText= "Add Todo";
			buttonStatus= true;
		}
		else{
			buttonText= this.props.add.isPending ? 'Adding ...' : 'Add Todo';
			buttonStatus= this.props.add.isPending;
			if(this.props.add.isPending == false)
				this.textInput.value = "";
		}
		
		return(
			<div>
				<div className="input-group">
				    <input type="text" className="form-control" ref={(input) => this.textInput=input} placeholder= "Enter a todo" disabled= {buttonStatus}/>
				    <div className="input-group-btn">
				      <button className="btn btn-success" type="button" onClick={this.onClickButton} disabled= {buttonStatus}> {buttonText} </button>
				    </div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return  {
		add: state.addTodo
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (todo) => {
			dispatch(add(todo));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);