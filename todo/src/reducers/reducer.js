import { useState } from 'react'
export const initialState =  [{
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        task: 'Do reducer homework',
        completed: false,
        id: 3892987590
    }
];

export let [active, setActive] = useState({});
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'


export const toDoReducer =(state, action) => {
    switch (action.type) {
        case TOGGLE_COMPLETED:
            return state.map(todo => {
                if (todo.id === active.id) {
                    console.log('worked');
                    return {...todo, completed: !todo.completed }
                }
                else {
                    console.log('no');
                    return todo;
                }
            });
            

    }
}

// return state.map(todo => {
//     if (todo.id === action.payload) {
//             return {...todo, completed: !todo.completed }
//     }
//     else {
//             return todo;
//     }
// });