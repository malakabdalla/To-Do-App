const todolist = [];

const renderTodoList = () => {
  const todolistHTML = todolist
    .map((todoobject, i) => {
      const { name, dueDate, completed } = todoobject;
      return `
        
                <div  class="todoitem ${
                  completed ? "completed" : ""
                }">${name}</div>
                <div  class="todoitem ${
                  completed ? "completed" : ""
                }">${dueDate}</div>
                <button onclick="deleteTodo(${i})" class="deletebutton">Delete</button>
                <button onclick="toggleComplete(${i})" class="completebutton" ${
        completed ? 'style="text-decoration: line-through;"' : ""
      }>Complete</button>
            
           
        `;
    })
    .join("");

  document.querySelector(".js-todo-list").innerHTML = todolistHTML;
};

const addTodo = () => {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-selector");
  const dueDate = dateInputElement.value;

  todolist.push({
    name: name,
    dueDate: dueDate,
    completed: false,
  });

  inputElement.value = "";
  renderTodoList();
};

const deleteTodo = (index) => {
  todolist.splice(index, 1);
  renderTodoList();
};

const toggleComplete = (index) => {
  todolist[index].completed = !todolist[index].completed;
  renderTodoList();
};

renderTodoList();
