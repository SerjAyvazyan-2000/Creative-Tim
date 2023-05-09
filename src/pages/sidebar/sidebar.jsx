import React from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import sidebarImg from "../../assets/images/sidebar-5.jpg"
import NavBar from "../../components/navBar/navBar";
import {navBarState} from "../../utils/navBarState";

const Sidebar = ({activeSid}) => {
    return <section className={!activeSid ? "sidebar-section" : "sidebar-section active"}>
        <div style={{backgroundImage: `url(${sidebarImg})`}} className="sidebar-image G-image">
            <div className="sidebar-bg">
                <div className="brand-name">
                    <NavLink to={"/dashboard"}>
                        <h3>Creative Tim</h3>
                    </NavLink>
                </div>
                <nav>
                    <NavBar navBarState={navBarState}/>
                </nav>

            </div>

        </div>

    </section>

};

export default Sidebar;