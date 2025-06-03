function addTask(event) {
  event.preventDefault();

    const inputNode = document.getElementsByClassName('todo-input')[0]
    const task = inputNode.value;


    //creatediv

    const divNode = document.createElement('div')//<div><div>

    //create list 

const listNode = document.createElement('li')//<li></li>
//to add inside list node
listNode.innerText = task;//<li>task</li>
listNode.setAttribute('class', 'todo-item')//<li class = "todo-item">task</li>

// create complete button
const completeButton = document.createElement('button')
completeButton.innerText = 'complete'
completeButton.setAttribute('class', 'complete-Btn')

// create delete button
const deleteButton = document.createElement('button')
deleteButton.innerText = 'Delete'
deleteButton.setAttribute('class', 'trash-Btn')

//push list and button inside div

divNode.appendChild(listNode);
divNode.appendChild(completeButton);
divNode.appendChild(deleteButton);

//fetch ul and append the div Node

const ulNode = document.getElementsByClassName('todo-list')[0]
ulNode.appendChild(divNode)

//add complete functionality
addCompleteFunctionality(completeButton, listNode)

//add delete functionality

addDeleteFunctionlity(deleteButton, divNode)
}

const addButton = document.getElementsByClassName('todo-button')[0];
addButton.addEventListener('click', addTask)

function addCompleteFunctionality(completeButton, listNode){
    completeButton.addEventListener('click', function() {
        if(listNode.style['text-decoration'] !== '') {
            listNode.style['text-decoration'] =''

        }else{
            listNode.style['text-decoration'] =  'line-through solid rgb(0, 0, 0)'
        }
    })
}
function addDeleteFunctionlity(deleteButton, divNode){
    deleteButton.addEventListener('click', function(){
        divNode.remove()
    })
}