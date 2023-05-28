import React, {useEffect, useMemo, useState} from 'react';
import "./style.scss"
import NotificationItem from "../../components/notificationItem/notificationItem";
import {useInformation} from "../../hooks/useInformation";
import ButtonsItem from "../../components/buttonsItem/buttonsItem";
import ButtonModal from "../../ui/buttonModal/buttonModal";
import {useFilterList} from "../../hooks/useFilterList";
import MyButton from "../../ui/myButton/myButton";
import MyModal from "../../ui/myModal/myModal";
import {useRandomRgb} from "../../hooks/useRandomRgb";

const Notification = () => {
    const { notifications, placesButtons} = useInformation()
    const {randomRGB} = useRandomRgb()
    const [filterNotification, notificationStyle, notificationState, remove] = useFilterList(notifications)
    const [modalInfo, setModalInfo] = useState([])
    const [buttonDirection, setButtonDirection] = useState('')
    const [openModal, setOpenModal] = useState(false)



    useEffect(() => {
        filterNotification()
    }, [])


    const openPlacesButton = (id) => {
        let objButton = {
            title: 'Welcome to Light Bootstrap Dashboard - a beautiful freebie',
            description: 'for every web developer',
            icon: 'icon-coin-dollar',
            remove:"icon-cross",
            color: randomRGB(),
            id: Date.now()
        }
        setModalInfo([...modalInfo, objButton])
    }
    const handleClick = () => {
        setOpenModal(!openModal)
    }
    const removeModalInfo = (id) =>{
        let newInfo = modalInfo.filter(item => item.id !== id)
        setModalInfo(newInfo)
    }



    return <>
        <div className="notification-section">
            <div className="notification-box">
                <div className="notification-header">
                    <p>Notification</p>
                    <span>Handcrafted by our friend Robert McIntosh. Please checkout the full documentation.</span>
                </div>
                <div className="notification-body">
                    <div className="notification-style">
                        <p>Notification State</p>
                        <NotificationItem
                            list={notificationState}
                            remove={remove}

                        />
                    </div>
                    <div className="notification-states">
                        <p>Notification style</p>
                        <NotificationItem
                            list={notificationStyle}
                            remove={remove}
                        />
                    </div>
                </div>
                <div className="places-buttons">
                    <div className="card-title">
                        <p>Notifications Places</p>
                        <span>Click to view notifications</span>
                    </div>
                    <div className="buttons-box" >
                        <ButtonsItem
                            placesButtons={placesButtons}
                            setButtonDirection={setButtonDirection}
                            openPlacesButton={openPlacesButton}
                        />
                    </div>
                    <div className="notification-modal">
                        <p>Modal</p>
                        <MyButton onClick={handleClick}
                                  text={"Launch Modal Mini"}
                        />
                    </div>
                </div>

            </div>

        </div>
        {modalInfo.length ?
            <ButtonModal
                modalInfo={modalInfo}
                buttonDirection={buttonDirection}
                removeModalInfo={removeModalInfo}
            />
            : null}
        {openModal ? <MyModal
            children={"Always have an access to your profile"}
            onClose={handleClick}
        /> : null}
    </>
};

export default Notification;