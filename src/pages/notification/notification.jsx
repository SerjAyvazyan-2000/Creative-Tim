import React, {useEffect, useState} from 'react';
import "./style.scss"
import {notifications} from "../../utils/notifications";
const Notification = () => {
    const filterNotification = (filterName) => {
         return  notifications.filter(item => item.category === filterName)
    }
    return<div className="notification-section">
        <div className="notification-box">
            <div className="notification-header">
                <p>Notification</p>
                <span>Handcrafted by our friend Robert McIntosh. Please checkout the full documentation.</span>
            </div>

            <div className="notification-body">

                <div className="notification-style">
                    notification-style
                </div>
                <div className="notification-states">
                    notification-states
                </div>
            </div>



        </div>
        </div>
};

export default Notification;