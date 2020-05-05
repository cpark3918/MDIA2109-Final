import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './tutorial1.css';
import LogoSmall from '../../comps/logo_small';
import CardPanel from '../../comps/cardpanel';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import Menu from '../../comps/menu'

const tapIcon = require('../../animations/tap.gif')

function nextTutorial() {
    if (true) {
        Router.push('/tutorial2')
    }
}

const Tutorial01 = () => {
    return <div>
        <div className="defaultscreen" >
            <div className="tut">
                <div className="tut_icons">
                    <LogoSmall />
                    <PageTitle text="Tutorial" color="#000" fontSize="35pt" />
                </div>
                <Menu />
                <div className="tut_box" id="tut1_box" onClick={nextTutorial}>
                    <CardPanel />
                    <PanelTitle text="Small" color="#B0D0D3" />
                    <img id="tut1_tap" src={tapIcon} />
                    <p>Tap through each card to get the<br></br>specific information for your dog </p>
                </div>
                <div className="progress_box">
                    <div className="progress_active"></div>
                    <div className="progress_inactive" onClick={nextTutorial}></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                </div>
            </div>
        </div>
    </div>
};

export default Tutorial01;