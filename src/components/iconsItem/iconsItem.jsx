import React from 'react';
import "./style.scss"

const IconsItem = ({iconsList}) => {
    return <>
        {iconsList.map(icon => (
            <div key={icon.id} className="icons-item">
                <i className={icon.name}></i>

                <p>{icon.name}</p>
            </div>
        ))}
    </>
};

export default IconsItem;