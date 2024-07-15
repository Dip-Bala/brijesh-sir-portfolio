import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import "./App.css";
import { Home, Events, Publications, Research, Resume } from './pages/Pages';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {
    return (
        <div className = "bg-white">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </Router>
        </div>

    );
}

export default App