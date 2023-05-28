import React, {useEffect, useState} from 'react';
import ButtonModal from "../../ui/buttonModal/buttonModal";
import {logDOM} from "@testing-library/react";
import {useRandomRgb} from "../../hooks/useRandomRgb";

const Dashboard = () => {
    const [openModalText, setOpenModalText] = useState(true)
    const {randomRGB} = useRandomRgb()
    setTimeout(()=>{
        setOpenModalText(false)

    },2000)


    const modalText = [
        {
            title: 'Welcome to Light Bootstrap Dashboard - a beautiful freebie',
            description: 'for every web developer',
            icon: 'icon-coin-dollar',
            color: randomRGB(),
            id: Date.now()
        }
    ]

    return <>
        <div className="dashboard-section">
            hello Dashboard
        </div>

        {openModalText ?
            <ButtonModal
                modalInfo={modalText}
                buttonDirection={"rightTop"}
            />

            : null
        }

    </>
};

export default Dashboard;