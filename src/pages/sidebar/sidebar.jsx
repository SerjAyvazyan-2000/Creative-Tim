import React, {useMemo} from 'react';
import "./style.scss"
import {NavLink} from "react-router-dom";
import defaultImg from "../../assets/images/sidebar-5.jpg"
import NavBar from "../../components/navBar/navBar";
import {navLinks} from "../../utils/routes";
import {useSelector} from "react-redux";

const Sidebar = ({activeSid}) => {
    const changeImage = useSelector(state => state.SidebarStyle.img)
    const changeColor = useSelector(state => state.SidebarStyle.color)
    console.log(changeImage,"nkars")

    const sidebarImage = useMemo(()=>{
        if(changeImage === null){
             return defaultImg
        }
        if(changeImage.img){
             return  changeImage.img
        }
        if(!changeImage.img){
             return  ''
        }
    },[changeImage])


    return <section className={!activeSid ? "sidebar-section" : "sidebar-section active"}>
        <div
            style={{backgroundImage: `url(${sidebarImage})`}}
            className="sidebar-image G-image"></div>
        <div style={{backgroundColor:changeColor}} className="sidebar-bg">
                <div className="brand-name">
                    <NavLink to={"/dashboard"}>
                        <h3>Creative Tim</h3>
                    </NavLink>
                </div>
                <nav>
                    <NavBar navBarState={navLinks}/>
                </nav>

            </div>


    </section>

};

export default Sidebar;