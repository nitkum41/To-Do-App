

const filters ={
    searchText:'',
    hideCompleted: false
}

const setFilters=({searchText,hideCompleted})=>{
    if(typeof hideCompleted === 'boolean'){
        filters.hideCompleted=hideCompleted
    }
    if(typeof searchText==='string'){
        filters.searchText=searchText
    }
    

}
const getFilters =()=> filters


export {getFilters,setFilters}