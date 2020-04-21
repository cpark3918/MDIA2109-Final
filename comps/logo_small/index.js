import React from 'react';
import './logo_small.css';

const logo = require('../logo_home/logo.png');

const LogoSmall = () => <div className="defaultscreen">
    <div className="logo_contain">
        <img src={logo} />
    </div>
</div>

export default LogoSmall;