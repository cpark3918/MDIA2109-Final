import Link from 'next/link';
import { useEffect } from 'react';
import Router from 'next/router';
import React from 'react';
import './menu.css';

const menuIcon = require('../../cardIcons/menu.png');

function openNav(){
    document.querySelector("#menu").style.opacity = 0;
    setTimeout(function(){
        Router.push('/nav')
    }, 1000)
}

const Menu = () => {
    return <div className="menu_contain" id="menu">
        <Link><img src={menuIcon} /></Link>
    </div>
};

export default Menu;