import React, { Component } from 'react';
import './App.css';
import  Tasklist from './tasklist';
import  AddNewTasks from './addtasks';
import Footer from './footer';

class App extends Component {
  constructor(props){
    super();
      this.state = {tasks:props.tasks};
      this.updateList = this.updateList.bind(this);
  }
  updateList(text){
    var updatedTasks = this.state.tasks;
    updatedTasks.push(text);
    this.setState({tasks: updatedTasks});
    
  }
  render() {

    return (
      <div className="div">
      <h1>React homework1</h1>
        <AddNewTasks updateList = {this.updateList}/>
          <Tasklist tasks ={this.state.tasks} />
          <Footer />
      </div>

    );
  }
}

export default App;
