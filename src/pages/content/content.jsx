import React, {useEffect} from 'react';
import "./style.scss"

import MainHeader from "../header/mainHeader";
import PageRouter from "../../components/pageRouter/pageRouter";
import {useLocation} from "react-router-dom";
import Footer from "../footer/footer";
import {useInformation} from "../../hooks/useInformation";
import PluginSettings from "../../components/pluginSettings/pluginSettings";

const MainContent = ({setActiveSid, activeSid}) => {
    const [iconsList,navBarState,notifications,routes] = useInformation()
    const location = useLocation()
    return <section className={!activeSid ? "content-section" : "content-section active"}>
        <MainHeader
            activeSid={activeSid}
            setActiveSid={setActiveSid}
            title={!location.state ? "Dashboard" : location.state.name}
        />
        <div className="router-pages-box">
            <PageRouter routes={routes}/>
            <PluginSettings/>
        </div>
        <Footer/>
    </section>

};

export default MainContent;