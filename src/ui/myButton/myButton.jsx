import React from 'react';
import "./style.scss"

const MyButton = ({text}) => {
    return <button className="my-button" >
        {text}
    </button>
};

export default MyButton;