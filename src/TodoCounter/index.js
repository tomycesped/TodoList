import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';
function TodoCounter(){

 const {completedTodos,
   totalTodos} =  React.useContext(TodoContext);

  if (totalTodos===0) {
     return (
      <h1>
        No hay tareas por completar
      </h1>
     );}
  if (totalTodos===completedTodos) {
    return(
      <h1>
         Completaste todos las tareas! 🥳
      </h1>
    )}
       return (
      <h1>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas
      </h1>
    )
  }

  export { TodoCounter };