import React from 'react';
import './User.css';

const User = ({id,email,name,onDelete}) => {

     const handleDelete=()=>{
        onDelete(id);
     }

    return (
        <div className='list'>
        <span>{email}</span>
        <span>{name}</span>
        <span>
            <button>edit</button>
            <button onClick={handleDelete}>delete</button>
        </span>
            
        </div>
    );
};

export default User;