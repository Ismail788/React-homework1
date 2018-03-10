import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const tasklist  = [
   'Description:',  'Get out of bed, Wed Sep 13 2017',
   'Description: ', 'Brush teeth, Thu Sep 14 2017',
  'Description: ', 'Eat breakfast, Fri Sep 15 2017'
];




ReactDOM.render(<App tasks = {tasklist} />, document.getElementById('root'));
