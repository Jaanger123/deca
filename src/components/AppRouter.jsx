import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, About } from '../pages';
import React from 'react';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AppRouter;
