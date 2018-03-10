import React, { Component } from 'react';
import './App.css';

class AddNewTasks extends Component {
  constructor(){
    super();
    this.justsubmited =this.justsubmited.bind(this);
  }
  justsubmited(event){
    event.preventDefault();
    var input = event.target.querySelector('input');
    var value = input.value;
    input.value = '';
    this.props.  updateList(value);
  }
  render() {
    return (
      <form onSubmit={this.justsubmited}>
   <input type="text" />
</form>

);
  }
}

export default AddNewTasks;
