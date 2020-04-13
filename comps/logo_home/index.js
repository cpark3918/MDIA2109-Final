import React from 'react';
import './logo_home.css';

const logo = require('./logo.png');

const LogoHome = () => <div className="logo_home_contain">
    <img src={logo} />
    <h1 className="logo_text">A<span>dog</span>pt</h1>
</div>

export default LogoHome;