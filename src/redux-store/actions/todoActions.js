export const addTodo = newTodo => {
    return {type:'ADD_TODO', todo: newTodo, id: Math.random(), publishedDate: Date.now()}
}
