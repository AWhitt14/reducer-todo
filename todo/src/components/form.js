import React,{ useState } from "react";
import { ADD_TASK, REMOVE_COMPLETED } from '../reducers/reducer';



const ToDoForm = props => {
    
    const [taskName, setTaskName] = useState('')

    const hc = e => {
        setTaskName(e.target.value);
        console.log(taskName);
    }

    const os = (e) => {
        e.preventDefault();
       props.dispatch({type: ADD_TASK, payload: {task: taskName, completed: false,
        id: Date.now(),}});
    }

    return (
      <div className='head'>
        <form onSubmit={os}>
            <input type='text' name='task' onChange={hc} />
            <button>add task</button>
        </form>
        <button onClick={()=> {props.dispatch({type: REMOVE_COMPLETED})}}>clear completed</button>
      </div>
    );
  };
  
  export default ToDoForm;