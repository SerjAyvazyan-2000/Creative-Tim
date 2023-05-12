import React from 'react';
import "./style.scss"
const ButtonModal = ({buttonList,buttonDirection}) => {

    return <div className={buttonDirection ?  buttonDirection : "buttons-modal"}>
        {buttonList.length ? buttonList.map((item, index) => {
            return <div key={item.id}   className="button-info">
                <p>{item.title}</p>
            </div>
        }) : null}


    </div>

};

export default ButtonModal;