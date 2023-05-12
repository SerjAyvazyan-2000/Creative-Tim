import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "./style.scss"

const NavBar = ({navBarState}) => {
    const [subMenuActive,setSubMenuActive] = useState(false)

    const openSubMenu = (name) => {
        setSubMenuActive(!subMenuActive)
    }
    return <ul className="sidebar-menu top">
        {navBarState.map(link => (
            <li>
                <NavLink state={{name: link.name}} to={link.to} key={link.name}>
                    <i className={link.icon}></i>
                    <span>{link.name}</span>
                    {link.subMenu ?
                        <span onClick={openSubMenu} className={!subMenuActive ? "menu-arrow " : "menu-arrow arrow-rotate"}></span>
                    :null}
                </NavLink>
                {link.subMenu ?
                    <ul className={!subMenuActive ? "sub-menu-list " : "sub-menu-list active-Sub-Menu"}>
                        <li>
                            <NavLink to={link.subMenu.to}>
                                <i className={link.subMenu.icon}></i>
                                <span>{link.subMenu.name}</span>
                            </NavLink>
                        </li>
                    </ul>
                    : null}
            </li>
        ))}
    </ul>
};

export default NavBar;