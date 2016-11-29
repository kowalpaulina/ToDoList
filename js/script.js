var button = document.querySelector('.submit');
var todo = document.querySelector('.todo');
var validation_box = document.getElementById('validation_box');
var todolist = document.getElementById("todo_task");
var donelist = document.getElementById("done_task");
var task = document.getElementById('text');

window.onload = localstorage_getValue();

var eventHandler = "click" || "ev.keyCode == 13";

button.addEventListener("click",function(){
    var task = document.getElementById('text');
        if(!(task.value=='')){
            addTask(task);   
            
        }else{
            addValidComment();
        }
    //event.preventDefault();
});

function cretateLi(string){
        var li = document.createElement("li");
        var p = document.createElement("p");
        p.innerHTML = string;
        li.appendChild(p);     
        return li;
    }

function addTask(){
    var task = document.getElementById('text');
    var taskItem = cretateLi(task.value);
    var p = todolist.appendChild(taskItem);
    changeStatus(taskItem,completed);
    task.value = "";
    localstorage_setValue(p);
}

var completed = function(){
    var taskItem = this;
    donelist.appendChild(taskItem);
    changeStatus(taskItem, incompleted);
    localstorage_setValue(taskItem);
}

var incompleted = function(taskItem){
    var taskItem = this;
    todolist.append(taskItem);
    changeStatus(taskItem, completed);
    localstorage_setValue();
}


function changeStatus(item, eventHandler){
    item.onclick = eventHandler;
}


function addValidComment(){
    var comment = document.createElement("p"); 
    if(!(validation_box.hasChildNodes("p"))){
        var valid_comment = "Wpisz zadanie!";
        validation_box.appendChild(comment);
        comment.innerHTML = valid_comment;
        comment.classList = "active";
        setTimeout(function(){validation_box.removeChild(comment)},2500);
        $(comment).fadeToggle(2500);
    }}
  
  
 function localstorage_setValue(p){
    var todotask = $(p).val();
    console.log(todotask);
    var donetask = $(task).val();
    localStorage.setItem("task", todotask);
    localStorage.setItem("donetask", donetask);
}

function localstorage_getValue(){
    var new_todotask = localStorage.getItem("todo");
    var new_donetask = localStorage.getItem("donetask");
    
    $('#todo_task li p').val(new_todotask);
    $('#done_task li p').val(new_donetask);
}


