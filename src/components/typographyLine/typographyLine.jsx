import React from 'react';
import "./style.scss"

const TypographyLine = ({title ,description,fontSize,number,id,color}) => {

    return <div className="typography-line">
        <div className="line-title">
             <p>{title } {number ? id : null}</p>
        </div>
        <div className="line-description">
            <p style={{fontSize:fontSize ,color:color}}>{description}</p>
        </div>

    </div>
};

export default TypographyLine;