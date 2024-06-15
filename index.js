const inputEl = document.getElementById("input-el")
const taskContainer =document.getElementById("task-container")

function add () {
  if (inputEl.value === ''){
    alert("you must write something")
  } else 
  {
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = ("\u00D7");
    li.appendChild(span)
  }
  inputEl.value = ''
  save()
}

taskContainer.addEventListener("click", function(e){
if(e.target.tagName === "LI") {
  e.target.classList.toggle("checked");
  save()
} else if (e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
  save()
}


}, false)

function save(){
localStorage.setItem("data", taskContainer.innerHTML)}

function getData(){
  taskContainer.innerHTML = localStorage.getItem("data")
}

getData()