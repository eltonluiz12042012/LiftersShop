import React from "react";
import { Routes, Route } from 'react-router-dom';
import Page0 from './components/pages/page0/Page0'
import Page1 from './components/pages/page1/Page1'

const Routers = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Page0 />}/>
            <Route exact path="/product/:id" element={<Page1 />} />
        </Routes>
    )
};

export default Routers;