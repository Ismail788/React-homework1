import React, { Component } from 'react';
import './App.css';

class Tasklist extends Component {
  constructor(){
    super();
    
  }
  render() {
    var items = this.props.tasks.map((elem, i)=>{
      return <li key = {i}>{elem}</li>
    });
   return  (
       <ul>
       {items}
      </ul>
)
  }
}


export default Tasklist;
