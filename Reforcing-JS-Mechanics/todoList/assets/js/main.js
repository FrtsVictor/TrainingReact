
const inputs = document.querySelector('.new-todo');
const container = document.querySelector('container');
const ul = document.querySelector('.ul')
const button = document.querySelector('.btn-add');

inputs.addEventListener('keypress', (e)=>{
   if(e.keyCode === 13){
       if(!inputs.value)return;
       addTodo(inputs.value);
    }
} )

button.addEventListener('click', ()=>{
    if(!inputs.value)return;
    addTodo(inputs.value);

});


function addTodo(text){
    const newLi = createLi()
    newLi.textContent = text;
    ul.appendChild(newLi);
    createDelButton(newLi)
    clearInput();
    saveTodos();
}

function createLi(){
    const newLi = document.createElement('li');
    return newLi;
}

function clearInput(){
    inputs.value = '';
    inputs.focus();
}

function createDelButton(li) {
    let btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.setAttribute('class', 'delete');
    btn.setAttribute('title', 'Delete this todo');
    li.appendChild(btn);
}

document.addEventListener('click', (e)=>{
    const ele = e.target;
    if(ele.classList.contains('delete')){
        ele.parentElement.remove();
        saveTodos();
    }
})


function saveTodos(){
    const liTodos = ul.querySelectorAll('li');
    let todoTextList = [];
    

    for( let todo of liTodos){
        let todoText = todo.innerText;

        todoText = todoText.replace('Delete', '').trim();
        todoTextList.push(todoText);

    }
    console.log(todoTextList)


    const todoJSON = JSON.stringify(todoTextList);
    console.log(todoJSON);
    localStorage.setItem('todoListSaved', todoJSON);


}

function retriveSavedTodos(){
    const todos = localStorage.getItem('todoListSaved');
    const todosList = JSON.parse(todos);
    
    for (const td of todosList) {
        addTodo(td)
    }
}

retriveSavedTodos();

