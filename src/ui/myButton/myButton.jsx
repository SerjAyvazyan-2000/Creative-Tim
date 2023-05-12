import React from 'react';
import "./style.scss"

const MyButton = ({text,onClick}) => {
    return <button onClick={onClick} className="my-button" >
        {text}
    </button>
};

export default MyButton;