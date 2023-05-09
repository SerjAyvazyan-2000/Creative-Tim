import React, {useEffect} from 'react';
import "./style.scss"

import MainHeader from "../header/mainHeader";
import PageRouter from "../../components/pageRouter/pageRouter";
import {useLocation} from "react-router-dom";
import Footer from "../footer/footer";
import {routes} from "../../utils/routes";

const MainContent = ({setActiveSid, activeSid}) => {
    const location = useLocation()
    return <section className={!activeSid ? "content-section" : "content-section active"}>
        <MainHeader
            activeSid={activeSid}
            setActiveSid={setActiveSid}
            title={!location.state ? "Dashboard" : location.state.name}
        />
        <div className="router-pages-box">
            <PageRouter routes={routes}/>
        </div>
        <Footer/>
    </section>

};

export default MainContent;