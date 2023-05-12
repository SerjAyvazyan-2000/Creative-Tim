import React from 'react';
import "./style.scss"
const ButtonsItem = ({placesButtons,openPlacesButton,setButtonDirection}) => {
    const handleClick = (id,direction)=>{
        openPlacesButton(id)
        setButtonDirection(direction)
    }
    return<>
        {placesButtons.map(item => (
                <button key={item.id} onClick={()=>handleClick(item.id,item.direction)} className="button-item">{item.name}</button>
        ))}
        </>
};

export default ButtonsItem;