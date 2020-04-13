import React from 'react';
import './nav.css';

const closeWindow = require('../../cardIcons/close_white.png')

const Nav = () => {
    return <div className="nav_contain">
        <div className="nav_box">
            <img src={closeWindow} />
            <div className="nav_menu">
                <p className="nav_text">Home</p>
                <p className="nav_text">About Adogpt</p>
                <p className="nav_text">Tutorial</p>
                <p>Resources</p>
            </div>
        </div>
    </div>
};

export default Nav;