import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error} = useLocalStorage('TODOs_V1', []); //PARAMETROS DE CUSTOM HOOK

const [searchValue, setSearchValue] = React.useState('');

const [openModal, setOpenModal] = React.useState(false);

const resetRotation = () => {
  const button = document.querySelector('.CreateTodoButton');
  if (button) {
      button.classList.remove('rotated');
  }
};

const completedTodos = todos.filter(todo => !!todo.completed).length; //los !! hacen que todo.completed devuelva un booleano//

const totalTodos = todos.length;

const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText) 
    }
  )

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos);
  }

const completeTodo = (text) => {
const newTodos = [...todos]; // Crea una copia del array actual
const todoIndex = newTodos.findIndex(
(todo) => todo.text === text
);// Busca el índice del TODO
newTodos[todoIndex].completed = 
!newTodos[todoIndex].completed; // Cambia el estado de completado
saveTodos(newTodos); // Sincroniza el estado y localStorage
};

const deleteTodo = (text) => {
const newTodos = [...todos]; // Crea una copia del array actual
const todoIndex = newTodos.findIndex(
(todo) => todo.text === text
); // Busca el índice del TODO
newTodos.splice(todoIndex, 1); // Elimina el TODO usando su índice
saveTodos(newTodos); // Sincroniza el estado y localStorage
};
    return(
        <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
        resetRotation
        }}>
        {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};