import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./Base";


export default function App(param) {
    return (
        <BrowserRouter basename={param.basename}>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}