import React from 'react';
import "./style.scss"
const MyModal = ({children,onClose}) => {
    return <div className="modal-container">
        <div onClick={onClose} className="my-modal-bg"></div>
        <div className="modal-content">
            {children}
        </div>
    </div>
};

export default MyModal;