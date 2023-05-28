import React from 'react';
import "./style.scss"
const PluginSettings = ({onClick}) => {
    return<div onClick={onClick} className="fixed-plugin">
             <i  className="icon-cog"></i>
        </div>
};

export default PluginSettings;