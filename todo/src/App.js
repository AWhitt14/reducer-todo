import React, { useReducer } from 'react';
import { initialState, toDoReducer, TOGGLE_COMPLETED } from './reducers/reducer';
import ToDoList from './components/list';
import './App.css';

function App() {
 const [state, dispatch ] = useReducer(toDoReducer, initialState);

  return (
    <div className="App">
      <ToDoList todos={state}/>
    </div> 
  );
}

export default App;
