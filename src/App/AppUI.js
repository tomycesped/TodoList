import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { NoResults } from '../NoResults'; // Importa el nuevo componente
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    resetRotation,
    searchValue, // Asegúrate de obtener searchValue del contexto
  } = React.useContext(TodoContext);

  return (
    <> 
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        
        {!loading && searchedTodos.length === 0 && !searchValue && (
          <EmptyTodos />
        )}
        {!loading && searchedTodos.length === 0 && searchValue && (
          <NoResults />
        )}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} resetRotation={resetRotation} />

      {openModal && (
        <Modal>
          <TodoForm resetRotation={resetRotation} />
        </Modal>
      )}
    </>
  );
}

export { AppUI };