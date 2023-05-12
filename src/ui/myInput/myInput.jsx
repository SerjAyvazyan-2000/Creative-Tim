import React from 'react';
import "./style.scss"
const MyInput = ({type,icon,name,placeholder,text,errorText}) => {
    return <label>
        <p>{text}</p>
        <input name={name} className="my-input" type={type} placeholder={placeholder}/>
        <span className={icon ? 'icon' : "icon"}></span>
        {type !=='search'? <span className="error-text">{errorText}</span> : null}
    </label>
};

export default MyInput;