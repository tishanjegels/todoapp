window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos');  //redo this .. about saving to local storage 
    const todoList = document.querySelector('#new-todo-form');

    newToDoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.conent.value,
            category: e.target.elements.category.value,
            done: false,
        }

        todos.push(todo);

        localStorage.setItem('todos', JSON.stringify(todos));

    })
})

