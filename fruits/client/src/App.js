// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ChatbotPage from './pages/ChatbotPage';
import TranslatorPage from './pages/TranslatorPage';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';
import RegisterPage from './pages/RegisterPage';

const App = () => {
    const location = useLocation(); // Get the current location

    return (
        <>
            {/* Conditionally render the Navbar */}
            {location.pathname !== '/' && location.pathname !== '/register' }
            
            <Routes>
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/translator" element={<TranslatorPage />} />
                <Route path="/faqs" element={<FaqPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>

            {/* Always render the Footer */}
            <Footer />
        </>
    );
};


// Wrap the App component with Router
const WrappedApp = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
