import React from 'react';
import MyInput from "../../ui/myInput/myInput";
import {NavLink} from "react-router-dom";
import "./style.scss"

const MainHeader = ({setActiveSid,activeSid,title}) => {
    return    <div className="main-header">
        <div className="main-header-title">
            <div onClick={()=>setActiveSid(!activeSid)} className="burger-menu">
                <div className="burger-item"></div>
                <div className="burger-item"></div>
                <div className="burger-item"></div>
            </div>
            <div className="header-title-text">
                <h3>{!title ?  "Error Title" : title}</h3>
            </div>
            <div className="title-icons-list">
                <i className="icon-droplet"></i>
                <ul className="icon-sphere header-notification-list">
                    <span className="icon-circle-down"></span>
                    {/*lista linelu*/}
                </ul>
            </div>
            <div className="header-search-box">
                <MyInput placeholder="Search..." type="search"/>
            </div>
        </div>

        <div className="main-header-navigation">
            <div className="account-loagOut">
                <ul>
                    <li>
                        <NavLink >Account</NavLink>

                    </li>
                    <li>
                        <NavLink >
                            <span>DropDown</span>
                            <i className="icon-circle-down"></i>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink >Log out</NavLink>

                    </li>
                </ul>
            </div>
        </div>
    </div>
};

export default MainHeader;