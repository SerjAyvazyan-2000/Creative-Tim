import React from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"

const NavBar = ({navBarState}) => {
    return <ul className="sidebar-menu top">
        {navBarState.map(link => (
            <li>
                <NavLink state={{name: link.name}} to={link.to} key={link.name}>
                    <i className={link.icon}></i>
                    <span>{link.name}</span>
                </NavLink>
            </li>
        ))}
    </ul>
};

export default NavBar;