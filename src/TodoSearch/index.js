import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
    return (
      <div id='Search'>
        <p>Hecho con amor por @tomcesped 🖤 </p>
      <input placeholder="Buscar..."
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
