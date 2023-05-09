import React from 'react';
import "./style.scss"

const UsersItem = ({name,id,userName,email}) => {
    return <div className="users-item">
        <h3>{id}{name}</h3>
        <p>{userName}</p>
        <p>{email}</p>
    </div>
};

export default UsersItem;