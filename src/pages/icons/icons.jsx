import React from 'react';
import "./style.scss"
import IconsItem from "../../components/iconsItem/iconsItem";
import {useInformation} from "../../hooks/useInformation";

const Icons = () => {
    const {iconsList} = useInformation()
    return<div className="icons-section">
        <div className="icons-box">
            <div className="icons-header">
                <p>Light Bootstrap Table Heading</p>
                <span>Created using Montserrat Font Family</span>
            </div>

            <div className="icons-list">
                 <IconsItem iconsList={iconsList}/>
            </div>
            </div>
        </div>
};

export default Icons;