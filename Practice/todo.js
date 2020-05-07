function addTask(task) {
  console.log('HERE')
  
  console.log(task)
  let point = document.getElementById('list')
  let li = document.createElement('li')
  let but = document.createElement("button")
  but.setAttribute("class", 'button')
  but.innerHTML = "Delete"
  
  if (task.length > 0) {
    if (check(task)) {
      li.appendChild(document.createTextNode('---   '+task+"   "))
      li.append(but)
      point.appendChild(li)
      task.value ="reset"
    }
    else{
      alert("Task Exists")
    }
  }

  else{
    alert("Enter a task and press add button")
  }
  but.onclick=remove
  li.onclick = strike
  
}

function check(item) {
  let tag = document.querySelectorAll('li')
  console.log(tag)
  if (tag.length === 0) return true
  console.log(tag[0].textContent)
  for (let i = 0; i < tag.length;i++) {
    let pre = tag[i].textContent.split(" ")
    console.log(pre)
    console.log(pre[3])
    console.log(item)
    if (item === pre[3]) 
    return false
  }
  return true
}

document.getElementById('submit').addEventListener("click",function() {
  let task = document.getElementById('input').value
  let blank = document.getElementById('input')
  blank.value = ""
  addTask(task)
})

function remove(e) {
  e.target.parentElement.remove(e.target)
}

let flag = false
function strike(e) {
  if (!flag) {
    flag = true
    this.style.textDecoration="line-through"
  }
  else{
    this.style.textDecoration="none"
    flag = false
  }
}

