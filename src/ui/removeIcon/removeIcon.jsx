import React from 'react';

const RemoveIcon = ({icon,onClick}) => {
    return<i onClick={onClick} className={`remove-icon ${icon}`}>

        </i>
};

export default RemoveIcon;