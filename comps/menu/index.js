import Link from 'next/link';
import { useEffect } from 'react';
import Router from 'next/router';
import React from 'react';
import './menu.css';
import Nav from '../nav';

const menuIcon = require('../../cardIcons/menu.png');

function openNav(){
    document.querySelector("#menu").style.opacity = 0;
    document.querySelector("#navigation").style.left = 0;
    setTimeout(function(){
        Router.push('/nav')
    }, 1000)
}

const Menu = () => {
    return <div className="menu_contain" id="menu" onClick={openNav}>
        <img src={menuIcon} />
        <Nav />
    </div>
};

export default Menu;