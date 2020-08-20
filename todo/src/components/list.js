import React from 'react';
import Todo from './todo';

const ToDoList = props => {
    return (
      <div className='list'>
        {props.todos.map(item => (
          <Todo key={item.id} item={item} dispatch={props.dispatch}/>
        ))}
      </div>
    );
  };
  
  export default ToDoList;