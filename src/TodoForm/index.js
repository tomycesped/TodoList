import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm({ resetRotation }) {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        resetRotation();
    };

    const onCancel = () => {
        setOpenModal(false);
        resetRotation()
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea placeholder="Cortar Cebolla..." value={newTodoValue} onChange={onChange} required/>
            <div className="TodoForm-buttonContainer">
            <button type="button"  className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar
            </button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">Agregar
            </button>
            </div>
        </form>
    )

}

export { TodoForm };