import { useState } from "react";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";
import copyIcon from "./copy.png";
import checkIcon from "./copying.png";

function TodoItem(props) {
  const [copied, setCopied] = useState(false);

  const copyTask = () => {
    navigator.clipboard.writeText(props.text)
      .then(() => {
        setCopied(true); // Cambia el estado a "copiado"
        setTimeout(() => setCopied(false), 500); 
      })
      .catch(err => console.error("Error al copiar: ", err));
  };

  return (
    <div id="items">
      <button className="CopyButton" onClick={copyTask}>
        <img src={copied ? checkIcon : copyIcon} alt="Copiar tarea" />
      </button>
      <li className="TodoItem">
        <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <DeleteIcon onDelete={props.onDelete} />
      </li>
    </div>
  );
}

export { TodoItem };
