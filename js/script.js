'use strict';

const button = document.querySelector('.submit');
const validation_box = document.getElementById('validation_box');
const todolist = document.getElementById("todo_task");
const donelist = document.getElementById("done_task");
const task = document.getElementById('text');

button.addEventListener("click", checkValue);


function checkValue(event){

        if(!(task.value=='')){
            addTask();   
        }else{
            addValidComment();
        }
    event.preventDefault();
}


function addTask(){
    let taskItem = cretateElement(task.value);
    const close = document.getElementsByClassName("close");

    todolist.appendChild(taskItem);
    changeStatus(taskItem, makeCompleted);
    task.value = "";
    
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener("click", finishTask);
    }

    function finishTask() {
        const element = this.parentElement;
        event.stopPropagation();
        element.style.display = "none";
    }
}


function cretateElement(taskValue){
        const elementOfList = document.createElement("li");
        const label = document.createElement("label");
        const div = document.createElement("div");
        label.innerHTML = taskValue;
        elementOfList.appendChild(label); 
        div.innerHTML = "\u00D7";
        div.classList = "close";
        elementOfList.appendChild(div);
        return elementOfList;
}


const makeCompleted = function(){
    var taskItem = this;
    donelist.appendChild(taskItem);
    changeStatus(taskItem, makeIncompleted);    
}

const makeIncompleted = function(){
    const taskItem = this;
    todolist.append(taskItem);
    changeStatus(taskItem, makeCompleted);
}

function changeStatus(item, eventHandler){
    item.onclick = eventHandler;
}

function addValidComment(){
    const comment = document.createElement("p"); 
    if(!(validation_box.hasChildNodes("p"))){
        const valid_comment = "Wpisz zadanie!";
        validation_box.appendChild(comment);
        comment.innerHTML = valid_comment;
        comment.classList = "active";
        setTimeout(function(){validation_box.removeChild(comment)},2500);
        $(comment).fadeToggle(2500);
    }
}

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

