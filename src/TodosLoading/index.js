import React from 'react';
import './TodosLoading.css';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

function TodosLoading() {
    return (
       <div className='skeleton'>
        <p className='loading-text'></p>
        <span className='loading-deleteIcon'>
            <DeleteIcon />
        </span>
       </div>
    )
  }

  export { TodosLoading };
