import  { getFilters } from "./filters"
import  { getTodos,toggleTodo,saveTodos,removeTodo} from "./todo"

//render application todos based on filters



const renderTodos = ()=>{
    const todos = getTodos()
    const { searchText,hideCompleted }=getFilters()
    const todoEl=document.querySelector('#search-todo')

    let renderedTodos = todos.filter((todo)=>todo.text.toLowerCase().includes(searchText.toLowerCase()))

    renderedTodos = renderedTodos.filter((todo)=>!todo.completed || !hideCompleted)

    const incompleteTodos = renderedTodos.filter((todo)=>!todo.completed)

    todoEl.innerHTML=''

    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if(renderedTodos.length>0){
        renderedTodos.forEach((todo)=>{
            todoEl.appendChild(generateTodoDOM(todo))

        })

    }
    else{
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent='No to-dos to show'
        todoEl.appendChild(emptyMessage)
    }

            
    

}


//generate todo DOM elements for individual todo

const generateTodoDOM = (todo)=>{

    const todoEl = document.createElement('label')

    const containerEl = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    
    //set up todo checkbox
    
    checkBox.setAttribute('type','checkbox')
    checkBox.checked=todo.completed
    containerEl.appendChild(checkBox)
    checkBox.addEventListener('change',(e)=>{
       
        toggleTodo(todo.id)
        renderTodos()
    })

    

    //set up todo text
    
    todoText.textContent=todo.text
    containerEl.appendChild(todoText)



    //set up container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //set up remove button
   
    removeButton.textContent='Remove'
    removeButton.classList.add('button','button--text')
    todoEl.appendChild(removeButton)

    removeButton.addEventListener('click',()=>{
        removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}


//generate summary for the todo elements
const generateSummaryDOM = (incompleteTodos)=>{

    const summary = document.createElement('h2')
    summary.classList.add('list-title')
    const plural = incompleteTodos.length===1?'':'s'

    summary.textContent =`You have ${incompleteTodos.length} todo${plural} left`
    return summary
    
}


export { renderTodos,generateTodoDOM,generateSummaryDOM }

