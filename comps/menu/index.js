import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import React from 'react';
import './menu.css';
import Nav from '../nav';

const menuIcon = require('../../cardIcons/menu.png');

const closeWindow = require('../../cardIcons/close_white.png')

function clickNavHome() {
    if (true) {
        Router.push("/");
    }
}

function clickNavAbout() {
    if (true) {
        Router.push("/about");
    }
}

function clickNavTut() {
    if (true) {
        Router.push("/tutorial1");
    }
}

function clickNavRes() {
    if (true) {
        Router.push("/resources");
    }
}

// function openNav(){
//     document.querySelector("#menu").style.opacity = 0;
//     // document.querySelector("#navigation").style.left = 0;
//     // setTimeout(function(){
//     //     Router.push('/nav')
//     // }, 1000)
// }

// const [pageleft, setLeft] = useState("-100%");

// useEffect(()=>{
//     setTimeout(()=>{
//         setLeft(0);
//     }, 50)
// })

const Menu = () => {

    const [pageleft, setLeft] = useState("-110%");

    function openNavMenu() {
        // document.querySelector("#navigation").style.left = "-5%";
        setTimeout(() => {
            setLeft("-5%");
        }, 50);
    }

    function closeNav() {
        // document.querySelector("#navigation").style.left = "-110%";
        setTimeout(() => {
            setLeft("-110%");
        }, 50);
    }

    return <div className="menu_contain" id="menu">
        <img src={menuIcon} onClick={openNavMenu} />
        {/* <div id="nav"><Nav left_css={pageleft}/></div> */}
        <div className="nav_contain" id="navigation" style={{ left: pageleft }}>
            <div className="nav_box">
                <img src={closeWindow} onClick={closeNav} />
                <div className="nav_menu">
                    <Link href="/"><p onClick={clickNavHome} className="nav_text">Home</p></Link>
                    <Link href="/about"><p onClick={clickNavAbout} className="nav_text">About Adogpt</p></Link>
                    <Link href="/tutorial1"><p onClick={clickNavTut} className="nav_text">Tutorial</p></Link>
                    <Link href="/resources"><p onClick={clickNavRes}>Resources</p></Link>
                </div>
            </div>
        </div>
    </div>
};

export default Menu;