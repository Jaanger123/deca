import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, About } from '../pages';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/civic-engagement" element={} />
            <Route path="/products" element={} /> */}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRouter;
