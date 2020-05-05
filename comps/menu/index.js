import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import React, {Component} from 'react';
import './menu.css';
import Nav from '../nav';

import BackDrop from '../backdrop';

const menuIcon = require('../../cardIcons/menu.png');


// const Menu = () => {

//     const [pageleft, setLeft] = useState("0%");
//     const [menuleft, moveLeft] = useState("10px");

//     function openNavMenu() {
//         // document.querySelector("#navigation").style.left = "-5%";
//         setTimeout(() => {
//             setLeft("-5%");
//             moveLeft("-100%");
//         }, 50);
//     }

//     function closeNav() {
//         // document.querySelector("#navigation").style.left = "-110%";
//         setLeft("-110%");
//         moveLeft("10px");
//     }


//     return <div className="app_menu">
//         <div className="menu_contain" id="menu" style={{ left: menuleft }}>
//             <img src={menuIcon} onClick={openNavMenu} />
//         </div>
//         <BackDrop />
//         <Nav left_css={pageleft} onClick={closeNav} />
//     </div>
// };

// export default Menu;

class Menu extends Component {
    state = {
        slideNav: false
    };

    navOpen = () => {
        this.setState((prevState) => {
            return {slideNav: !prevState.openNav};
        });
    };

    navClose = () => {
        this.setState({slideNav: false})
    }

    render() {
        let nav;
        let backdrop;

        if (this.state.slideNav){
            nav = <Nav click={this.navClose}/>;
            backdrop = <BackDrop click={this.navClose}/>;
        }
        return (
        <div className="app_menu">
        <div className="menu_contain" id="menu" >
            <img src={menuIcon} onClick={this.navOpen}/>
        </div>
        {backdrop}
        <Nav  show={this.state.slideNav}/>
    </div>
        );
    }
}

export default Menu;