import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Base";
import Home from "./Home";


export default function App(param) {
    return (
        <BrowserRouter basename={param.basename}>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}