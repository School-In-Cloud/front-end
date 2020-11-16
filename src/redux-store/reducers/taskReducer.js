const INITIALSTATE = {
    todos: []
}

export const taskReducer = (state = INITIALSTATE, actions) => {
    switch(actions.type) {
        case('ADD_TODO'): 
            return {
                ...state, todos: [...state.todos, {
                    todo: actions.todo,
                    id: actions.id,
                    publishedDate: actions.publishedDate
                }] 
            }
        default: 
            return state
    }
}