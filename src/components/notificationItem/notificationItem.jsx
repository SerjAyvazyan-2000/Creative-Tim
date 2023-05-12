import React from 'react';
import "./style.scss"
// import {notifications} from "../../utils/notifications";

const NotificationItem = ({list,remove}) => {
    return <>
        {list.map(item => (
             <div style={{background:item.color}} className="notification-Item">
                 {item.title ?<><div className="item-title"><p>{item.title}</p></div> <i className="icon-arrow-right"></i></>  : null}
                 <div className="item-body"><p>{item.body}</p></div>
                 {item.remove  ? <div onClick={()=>remove(item.id)}  className="item-remove"><i className="icon-cross"></i></div> : null}
             </div>
        ))}
    </>
};

export default NotificationItem;