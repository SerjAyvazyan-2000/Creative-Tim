import React from 'react';
import "./style.scss"

const UsersItem = ({name,id,userName,email,removeUser}) => {
    return <div className="users-item">
        <h3>{id}{name}</h3>
        <p>{userName}</p>
        <p>{email}</p>
        <div className="delete-tools">
            <i onClick={()=>removeUser(id)} className="icon-cross"></i>
        </div>
    </div>
};

export default UsersItem;