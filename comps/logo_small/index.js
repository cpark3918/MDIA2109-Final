import React from 'react';
import './logo_small.css';
import Link from 'next/link';
import Router from 'next/router';

function clickLogoSmall() {
    if (true) {
    Router.push("/");
    }
}

const logo = require('../logo_home/logo.png');

const LogoSmall = () => <div className="defaultscreen">
    <div onClick={clickLogoSmall} className="logo_contain">
        <Link href="/"><img src={logo} /></Link>
    </div>
</div>

export default LogoSmall;