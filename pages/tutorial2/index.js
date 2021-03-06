import Router from 'next/router';
import React, { useEffect } from 'react';
import './tutorial2.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import PageTitle from '../../comps/pagetitle';

const tapIcon = require('../../animations/tap.gif')

function nextTutorial() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/tutorial3");
    }, 600)
}

function prevTutorial() {
    document.querySelector("#page").style.left = "100%";
    setTimeout(function () {
        Router.push("/tutorial1");
    }, 600)
}

const Tutorial02 = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PageTitle text="Tutorial" color="#000" fontSize="35pt" />
            </div>
            <Menu />
            <div id="page">
                <div className="tut_box" onClick={nextTutorial}>
                    <div className="tut_topics">
                        <h2 id="maint">Maintenance</h2>
                        <h2 id="train">Training</h2>
                        <h2 id="health">Health</h2>
                        <img id="tut2_tap" src={tapIcon} />
                    </div>
                    <p>Choose between the given categories</p>
                </div>
                <div className="progress_box">
                    <div className="progress_inactive" onClick={prevTutorial}></div>
                    <div className="progress_active"></div>
                    <div className="progress_inactive" onClick={nextTutorial}></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                </div>
            </div>
        </div>
    </div>
};

export default Tutorial02;