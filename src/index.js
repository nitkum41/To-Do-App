import {setFilters} from './filters'
import { createTodo,loadTodos,saveTodos} from './todo'

import { renderTodos } from './views'



renderTodos()



document.querySelector('#add-todo').addEventListener('input',(e)=>{
    setFilters({
        searchText:e.target.value
    })
    renderTodos()
})


document.querySelector('#new-todo').addEventListener('submit',(e)=>{
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    if(text.length>0){
        createTodo(text)
        renderTodos()
        e.target.elements.text.value=''
    }



})

document.querySelector('#hide').addEventListener('change',(e)=>{
    setFilters({
        hideCompleted:e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage',(e)=>{
    if(e.key==='todos'){
        loadTodos()
        renderNotes()
    }
})