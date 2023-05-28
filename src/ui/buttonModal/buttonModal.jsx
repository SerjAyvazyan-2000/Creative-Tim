import React from 'react';
import "./style.scss"
import RemoveIcon from "../removeIcon/removeIcon";

const ButtonModal = ({modalInfo, buttonDirection,removeModalInfo}) => {

    return <div className={buttonDirection ? buttonDirection : "buttons-modal"}>
        {modalInfo.length ? modalInfo.map((item, index) => {
            return <div style={{backgroundColor: `${item.color}`}} key={item.id} className="button-info">
                <span className="icon-checkmark"></span>
                <p>{item.title}</p>
                <RemoveIcon icon={"icon-cross"} onClick={()=>removeModalInfo(item.id)}/>
            </div>
        }) : null}


    </div>

};

export default ButtonModal;