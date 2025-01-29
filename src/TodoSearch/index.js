import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
    return (
      <div id='Search'>
        <p>Busca tareas ⬇️</p>
      <input placeholder="Cortar cebolla..."
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }
    }
       />
      </div>
    )
  }

  export { TodoSearch };
