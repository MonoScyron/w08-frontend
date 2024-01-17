import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    // @ts-ignore
    return (
        <div>
            <nav className='navigation'>
                <ul className="horizontal-nav">
                    <li><Link to="/">Map</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/abnormalities">Abnormalities</Link></li>
                    <li><Link to="/armory">Armory</Link></li>
                    <li><Link to="/research">Research</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
