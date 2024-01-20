import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Map from "./Map/Map";
import Agents from "./Agents/Agents";
import Abnormalities from "./Abnormalities/Abnormalities";
import Armory from "./Armory/Armory";
import Research from "./Research/Research";

import Navigation from "./Utils/Navigation/Navigation";

function App() {
    return (
        <div className='background-image'>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" Component={Map}/>
                    <Route path="/agents" Component={Agents}/>
                    <Route path="/abnormalities" Component={Abnormalities}/>
                    <Route path="/armory" Component={Armory}/>
                    <Route path="/research" Component={Research}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;