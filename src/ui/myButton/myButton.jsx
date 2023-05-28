import React from 'react';
import "./style.scss"


const MyButton = React.forwardRef((props,ref)=>(
     <button ref={ref}  onClick={props.onClick} className="my-button" >
        {props.text}
    </button>
))
export default MyButton;