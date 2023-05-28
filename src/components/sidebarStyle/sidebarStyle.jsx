import React from 'react';
import "./style.scss"
import {useInformation} from "../../hooks/useInformation";
import {useDispatch, useSelector} from "react-redux";
import {setColor, setImage} from "../../store/redusers/sidebarImage";

const SidebarStyle = () => {
    const {sidebarImages, adjustmentsColor} = useInformation()

    const dispatch = useDispatch()

    const handleClick = (item) => {
        dispatch(setImage(item))
    }
    const changeColor = (color) => {
         dispatch(setColor(color))
    }
    return <div className="sidebar-style">
        <div className="header-title"><p>Sidebar Style</p></div>
        <div className="image-open">
            <p>Background Image</p>
            <div>
                <span onClick={()=>dispatch(setImage(sidebarImages[0]))}>ON</span>
                <span onClick={()=>dispatch(setImage(''))}>OFF</span>
            </div>
        </div>

        <div className="adjustments-line">
            <div className="adjustments-title"><p>Filters</p></div>
            <div className="adjustments-tools">
                {adjustmentsColor.map(item => (
                    <span onClick={()=>changeColor(item.color)} style={{backgroundColor: item.color}} data-color={item.color}></span>
                ))}
            </div>
        </div>

        <div className="images-change-block">
            <div className="adjustments-title"><p>SIDEBAR IMAGES</p></div>
            <div className="image-items">
                {sidebarImages.map(item => (
                    <div onClick={()=>handleClick(item)} className="switch-trigger G-image" style={{backgroundImage: `url(${item.img})`}}
                         key={item.id}></div>
                ))}
            </div>

        </div>

    </div>
};

export default SidebarStyle;


