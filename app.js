let btn = document.querySelector("button");

let input = document.querySelector(".search-box");

let taskList = document.querySelector("ul");

btn.addEventListener('click',function(){
          
    const taskText = input.value;

    const taskItem = document.createElement('li');

    taskItem.textContent = taskText;
    

    taskList.appendChild(taskItem);

    taskItem.classList.add('List-item');

    input.value = '';

    taskItem.addEventListener("click",function(){
        taskItem.style.textDecoration = "line-through";
    })
});

