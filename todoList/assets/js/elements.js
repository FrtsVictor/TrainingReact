(()=>{
    const container = document.querySelector('.container')
    const pInput = document.createElement('p') 
    const todoTitle = document.createElement('h1')
    const button = document.createElement('button')
    const inputs = document.createElement('input')
    const ul = document.createElement('ul')
    const p = document.createElement('p')

    p.textContent = 'My todoList'

    todoTitle.textContent= 'Todo List'

    button.classList.add('btn-add')
    button.textContent = 'Add'
    
    inputs.type = 'text'
    inputs.placeholder = 'New Todo'
    inputs.classList.add('new-todo')

    ul.classList.add('ul')


    pInput.appendChild(inputs)
    pInput.appendChild(button)

    container.appendChild(todoTitle)
    container.appendChild(pInput)
    container.appendChild(p)
    container.appendChild(ul)
})()