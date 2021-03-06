import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './health.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

function clickCheckups() {
    if (true) {
        Router.push("/checkups_puppy");
    }
}

function clickMedical() {
    if (true) {
        Router.push("/medical_puppy");
    }
}

function clickBack() {
    if (true) {
        Router.push("/topic");
    }
}

const checkupsImg = require('../../cardIcons/checkups.png');
const vaccinesImg = require('../../cardIcons/vaccines.png');

const Health = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="health">
        <div className="defaultscreen">
            <div>
                <LogoSmall />
            </div>
            <Menu />
            <div id="page">
                <div className="health_pagetitle">
                    <PageTitle marginBottom="55px" text="Health" />
                </div>
                <div className="health_panels">
                    <div onClick={clickCheckups} className="health_checkups">
                        <Link href="/checkups_puppy"><CardPanel src={checkupsImg} /></Link>
                        <PanelTitle color="#B7CfD2" text="Check-Ups" />
                    </div>
                    <div onClick={clickMedical} className="health_medical">
                        <Link href="/medical_puppy"><CardPanel color="#Ef9B89" src={vaccinesImg} /></Link>
                        <PanelTitle color="#Ef9B89" text="Medical Care" />
                    </div>
                </div>
            </div>
            <div onClick={clickBack} id="backtoprev">
                <BackToPrev />
            </div>
        </div>
    </div>
}

export default Health;