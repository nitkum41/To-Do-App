import uuidv4 from 'uuid/v4'

let todos=[]

const loadTodos=()=>{
    const todoJSON = localStorage.getItem('todos')
    try{
        return todoJSON ?JSON.parse(todoJSON):[]

    }catch(e){
        todos= []

    }

}

const getTodos=()=> todos

const createTodo =(text)=>{
    todos.push({
        id:uuidv4(),
        text:text,
        completed:false
    })
    saveTodos()


}
const saveTodos=()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}

const removeTodo=(id)=>{
    const todoIndex = todos.findIndex((todo)=>todo.id===id)

    if(todoIndex>-1){
        todos.splice(todoIndex,1)
        saveTodos()
    }

}

const toggleTodo = (id)=>{
    const todo = todos.find((todo)=>todo.id===id)

    if(todo){
        todo.completed=!todo.completed
        saveTodos()
    }

}

loadTodos()




export { createTodo,loadTodos,getTodos,saveTodos,removeTodo,toggleTodo }