const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoUl = document.getElementById('todo-ul');

window.addEventListener('DOMContentLoaded', loadTodos);

function loadTodos() {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    savedTodos.forEach(task => renderTodo(task));
}

addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    renderTodo(todoText);
    saveTodo(todoText);
    todoInput.value = '';
});

function saveTodo(task) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodo(task) {
    const li = document.createElement('li');
    li.className = 'todo-item flex justify-between items-center bg-gray-200 p-2 rounded';
    li.innerHTML = `
        <span class="todo-text">${task}</span>
        <button class="delete-btn bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Delete</button>
      `;
    todoUl.appendChild(li);
}

document.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        const task = li.querySelector('.todo-text').textContent;

        li.remove();

        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(t => t !== task);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});