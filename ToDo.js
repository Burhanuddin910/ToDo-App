let ToDoList_TASK = [];
let ToDoList_DATE = [];
RenderTasks();

    const add_button = document.querySelector('.add-button');
    add_button.addEventListener('click',ADD);

function ADD()
{
    let task = document.querySelector('.task-input').value;
    let date = document.querySelector('.date-input').value;

    if((task === '') || (date === ''))
    {
        alert('Please enter both task and date');
        return;
    }

    ToDoList_TASK.push(task);
    ToDoList_DATE.push(date);

    document.querySelector('.task-input').value = '';
    document.querySelector('.date-input').value = '';

    RenderTasks();
}

function RenderTasks()
{
    let TaskHtml = '';
    for(let i = 0; i < ToDoList_TASK.length; i++)
    {
        TaskHtml = TaskHtml + `<span class="display-task">${ToDoList_TASK[i]}</span>
                               <span class="display-date">${ToDoList_DATE[i]}</span>
                               <button class="delete-button" onclick="DeleteTask(${i})">Delete</button>`;
    }
    document.querySelector('.task-container').innerHTML = TaskHtml;
}
function DeleteTask(index)
{
    ToDoList_DATE.splice(index,1);
    ToDoList_TASK.splice(index,1);
    RenderTasks();
}

flatpickr("#datepicker", {
    disableMobile: true
  });
