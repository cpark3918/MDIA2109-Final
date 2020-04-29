import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import React from 'react';
import './menu.css';
import Nav from '../nav';

const menuIcon = require('../../cardIcons/menu.png');


const Menu = () => {

    const [pageleft, setLeft] = useState("-130%");
    const [menuleft, moveLeft] = useState("10px");

    function openNavMenu() {
        // document.querySelector("#navigation").style.left = "-5%";
        setTimeout(() => {
            setLeft("-5%");
            moveLeft("-100%");
        }, 50);
    }

    function closeNav() {
        // document.querySelector("#navigation").style.left = "-110%";
        setLeft("-110%");
        moveLeft("10px");
    }


    return <div className="app_menu">
        <div className="menu_contain" id="menu" style={{ left: menuleft }}>
            <img src={menuIcon} onClick={openNavMenu} />
        </div>
        <Nav left_css={pageleft} onClick={closeNav} />
    </div>
};

export default Menu;