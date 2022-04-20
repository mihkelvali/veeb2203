const todosListElement = document.getElementById('todos-list');
const emptyListElement = document.getElementById('empty-list');
const inputElement = document.getElementById('todo-input');

let id = 0;
const todos = [];

addTodo('Task 1');
addTodo('Task 2');
addTodo('Task 3');
renderList();

function addTodo(newTitle) {
    const newTodo = {
        id: id,
        title: newTitle,
        isDone: false,
    };
    todos.push(newTodo);
    id++;
}

function toggleIsDone(clickedId) {
    const index = todos.findIndex((todo) => todo.id == clickedId);
    todos[index].isDone = !todos[index].isDone;
    renderList();
}

function deleteTodo(clickedId) {
    const index = todos.findIndex((todo) => todo.id == clickedId);
    todos.splice(index, 1);
    renderList();
}

function renderList() {
    if (todos.length == 0) {
        todosListElement.style.display = 'none';
        emptyListElement.style.display = 'flex';
    } else {
        emptyListElement.style.display = 'none';
        todosListElement.style.display = 'block';
    }

    todosListElement.innerHTML = '';
    for (let i = 0; i < todos.length; i++) {
        let todoTitleClass = 'todo-title';
        if (todos[i].isDone) {
            todoTitleClass += ' todo-done';
        }
        todosListElement.innerHTML += `
            <div class="todo">
                <div onclick="toggleIsDone(${todos[i].id})" class="${todoTitleClass}">${todos[i].title}</div>
                <div onclick="deleteTodo(${todos[i].id})" class="todo-delete">x</div>
            </div>
        `;
    }
}

inputElement.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if (inputElement.value != '') {
            addTodo(inputElement.value);
            inputElement.value = '';
            renderList();
        }
    }
});
