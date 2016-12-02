var button = document.querySelector('.submit');
var validation_box = document.getElementById('validation_box');
var todolist = document.getElementById("todo_task");
var donelist = document.getElementById("done_task");
var task = document.getElementById('text');

button.addEventListener("click",function(event){
    var task = document.getElementById('text');
        if(!(task.value=='')){
            addTask(task);   
        }else{
            addValidComment();
        }
    event.preventDefault();
});

function cretateLi(string){
        var li = document.createElement("li");
        var label = document.createElement("label");
        label.innerHTML = string;
        li.appendChild(label); 
        var div = document.createElement("div");
        div.innerHTML = "\u00D7";
        div.classList = "close";
        li.appendChild(div);
        return li;
    }

function addTask(){
    var task = document.getElementById('text');
    var taskItem = cretateLi(task.value);
    todolist.appendChild(taskItem);
    changeStatus(taskItem, eventHandler=completed);
    task.value = "";
    
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var element = this.parentElement;
    element.style.display = "none";
  }
}}
var completed = function(){
    var taskItem = this;
    donelist.appendChild(taskItem);
    changeStatus(taskItem, eventHandler=incompleted);    
}
var incompleted = function(){
    var taskItem = this;
    todolist.append(taskItem);
    changeStatus(taskItem, eventHandler=completed);
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

 /*function localstorage_setValue(p){
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
*/

