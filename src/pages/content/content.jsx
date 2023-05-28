import React, {useEffect, useState} from 'react';
import "./style.scss"

import MainHeader from "../header/mainHeader";
import PageRouter from "../../components/pageRouter/pageRouter";
import {useLocation} from "react-router-dom";
import Footer from "../footer/footer";
import PluginSettings from "../../components/pluginSettings/pluginSettings";
import {routes} from "../../utils/routes";
import SidebarStyle from "../../components/sidebarStyle/sidebarStyle";

const MainContent = ({setActiveSid, activeSid}) => {
    const location = useLocation()
    const [openSidebarStyle, setOpenSidebarStyle] = useState(false)


    const handleClick = () => {
        setOpenSidebarStyle(!openSidebarStyle)
    }
    return <>

        <section className={!activeSid ? "content-section" : "content-section active"}>
            <MainHeader
                activeSid={activeSid}
                setActiveSid={setActiveSid}
                title={!location.state ? "Dashboard" : location.state.name}
            />
            <div className="router-pages-box">



                <PageRouter routes={routes}/>
                <PluginSettings onClick={handleClick}/>
            </div>
            <Footer/>
        </section>

        {openSidebarStyle ? <SidebarStyle/> : null}
    </>

};

export default MainContent;