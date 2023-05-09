import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../../pages/dashboard/dashboard";

const PageRouter = ({routes}) => {
    return <Routes>
        <Route path={"/*"} element={<Dashboard/>}/>
        {routes.map(route => (
            <Route path={route.path} element={route.components}/>
        ))}
    </Routes>


};

export default PageRouter;