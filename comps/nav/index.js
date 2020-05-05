import { useEffect, useState } from 'react';
import React from 'react';
import './nav.css';
import Link from 'next/link';
import Router from 'next/router';

import BackDrop from '../backdrop';

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

const Nav = props => {

    // const [pageleft, setLeft] = useState("-110%");

    // useEffect(()=>{
    //     if (page_left === "-110%"){
    //         setTimeout(()=>{
    //             setLeft("-5%");
    //         }, 50);
    //     } 
    // }, []);


    // function openNav() {
    //     setTimeout(() => {
    //         setLeft("-5%");
    //     }, 50);
    // }

    let navClasses = 'navigation';
    if (props.show){
        navClasses = 'navigation open';
    }

    return ( <div className={navClasses}>
        <div className="nav_box">
            <img src={closeWindow}/>
            <div className="nav_menu">
                <Link href="/"><p onClick={clickNavHome} className="nav_text">Home</p></Link>
                <Link href="/about"><p onClick={clickNavAbout} className="nav_text">About Adogpt</p></Link>
                <Link href="/tutorial1"><p onClick={clickNavTut} className="nav_text">Tutorial</p></Link>
                <Link href="/resources"><p onClick={clickNavRes}>Resources</p></Link>
            </div>
        </div>
    </div>
    );
};


export default Nav;