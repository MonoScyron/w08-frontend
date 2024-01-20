import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
}

const Navigation: React.FC<NavigationProps> = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        switch(buttonId) {
            case 0:
                navigate('/')
                break;
            case 1:
                navigate('/agents')
                break;
            case 2:
                navigate('/abnormalities')
                break;
            case 3:
                navigate('/armory')
                break;
            case 4:
                navigate('/research')
                break;

        }
    };

    return (
        <div className="navigation-buttons">
            <button
                className={`nav-button ${activeButton === 0 ? 'active' : ''}`}
                onClick={() => handleButtonClick(0)}
            >
                Map
            </button>
            <button
                className={`nav-button ${activeButton === 1 ? 'active' : ''}`}
                onClick={() => handleButtonClick(1)}
            >
                Employee List
            </button>
            <button
                className={`nav-button ${activeButton === 2 ? 'active' : ''}`}
                onClick={() => handleButtonClick(2)}
            >
                Abno. List
            </button>
            <button
                className={`nav-button ${activeButton === 3 ? 'active' : ''}`}
                onClick={() => handleButtonClick(3)}
            >
                Armory
            </button>
            <button
                className={`nav-button ${activeButton === 4 ? 'active' : ''}`}
                onClick={() => handleButtonClick(4)}
            >
                Research
            </button>
            <button
                className={`nav-button ${activeButton === 5 ? 'active' : ''}`}
                onClick={() => handleButtonClick(5)}
            >
                Work Log
            </button>
        </div>
    );
};

export default Navigation;
