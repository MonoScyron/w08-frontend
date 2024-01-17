import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Map from "./Map/Map";
import Players from "./Players/Players";
import Abnormalities from "./Abnormalities/Abnormalities";
import Armory from "./Armory/Armory";
import Research from "./Research/Research";

import Navigation from "./Utils/Navigation/Navigation";

function App() {
    return (
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" Component={Map}/>
                <Route path="/players" Component={Players}/>
                <Route path="/abnormalities" Component={Abnormalities}/>
                <Route path="/armory" Component={Armory}/>
                <Route path="/research" Component={Research}/>
            </Routes>
        </Router>
    );
}

export default App;