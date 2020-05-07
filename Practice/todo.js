function addTask() {
  console.log('HERE')
  let task = document.getElementById('input').value
  console.log(task)
  let point = document.getElementById('list')
  let li = document.createElement('li')
  let but = document.createElement("button")
  but.innerHTML = "Delete"
  
  if (task.length > 0) {
    li.appendChild(document.createTextNode('-- '+task+"   "))
    li.append(but)
    point.appendChild(li)
  }

  else{
    alert("Enter a task and press add button")
  }
  but.onclick=remove
  li.onclick = strike
  
}
document.getElementById('submit').addEventListener("click",function() {
  addTask()
})

function remove(e) {
  e.target.parentElement.remove(e.target)
}


function strike(e) {
  this.style.textDecoration="line-through"
}

