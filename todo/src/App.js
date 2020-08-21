import React, { useReducer } from 'react';
import { initialState, toDoReducer, TOGGLE_COMPLETED } from './reducers/reducer';
import ToDoList from './components/list';
import ToDoForm from './components/form';
import './App.css';

function App() {
 const [state, dispatch ] = useReducer(toDoReducer, initialState);
  return (
    <div>
      <ToDoForm dispatch={dispatch}/>
      <ToDoList todos={state} dispatch={dispatch}/>
    </div> 
  );
}

export default App;
