import React, {useReducer } from "react";
import './Todo.css';
import { initialState, toDoReducer, TOGGLE_COMPLETED, active, setActive } from '../reducers/reducer';


const Todo = props => {
    const [state, dispatch ] = useReducer(toDoReducer, initialState);
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
       onClick={() => {  
         setActive(props.item);
        dispatch({type: TOGGLE_COMPLETED})}}
    >                    
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;