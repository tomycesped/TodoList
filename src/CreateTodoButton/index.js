import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'
import React from 'react';

function CreateTodoButton({setOpenModal}) {
    const {totalTodos} = React.useContext(TodoContext)
    return(
        <div className={`boton ${totalTodos === 0 && !document.querySelector('.CreateTodoButton')?.classList.contains('rotated') ? 'pulse' : ''}`}>
        <button className="CreateTodoButton"  onClick={
            (event) => {
                setOpenModal(state => !state);
                const button = event.target;
                button.classList.toggle('rotated')
                const botonDiv = button.closest('.boton');
                if (button.classList.contains('rotated')) {
                    botonDiv.classList.remove('pulse');
                } else if (totalTodos === 0) {
                    botonDiv.classList.add('pulse');
                }
            }
        }
        >+</button>
        </div>
    )
}

export { CreateTodoButton };