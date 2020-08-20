import React, { useReducer } from "react";
import '../App.css';
import {initialState, toDoReducer, TOGGLE_COMPLETED} from '../reducers/reducer';

const Todo = props => {
  
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
       onClick={() => props.dispatch({type: TOGGLE_COMPLETED, payload: props.item.id})}
    >                    
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;