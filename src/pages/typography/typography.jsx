import React from 'react';
import "./style.scss"
import TypographyLine from "../../components/typographyLine/typographyLine";
import {useTypography} from "../../hooks/typography";

const Typography = () => {
  const {typographyList} = useTypography()


    return <div className="typography-section">

        <div className="typography-box">
            <div className="typography-header">
                <p>Light Bootstrap Table Heading</p>
                <span>Created using Montserrat Font Family</span>
            </div>
            <div className="typography-body">
                {typographyList.map(item => (
                    <TypographyLine
                        title={item.title}
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        fontSize={item.fonsSize}
                        number={item.number}
                        color={item.color}
                    />
                ))}


            </div>
        </div>

    </div>
};

export default Typography;