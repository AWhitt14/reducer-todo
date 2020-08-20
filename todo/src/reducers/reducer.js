
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

export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVED_COMPLETED';

export const toDoReducer =(state, action) => {
    switch (action.type) {
        case REMOVE_COMPLETED:
            return state;
        case TOGGLE_COMPLETED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    console.log('worked',todo);
                    return {...todo, completed: !todo.completed }
                }
                else {
                    return todo;
                }
            });

        default:
            return state;
            

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