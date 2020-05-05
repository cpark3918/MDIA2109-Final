import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './topic.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

function clickMaintenance() {
    document.querySelector(".Topic").style.left = "-100%";
    setTimeout(function(){
        Router.push("/maintenance");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/lifestage");
    }
}

function clickTraining() {
    document.querySelector(".Topic").style.left = "-100%";
    setTimeout(function(){
        Router.push("/training");
    }, 600)
}


function clickHealth() {
    document.querySelector(".Topic").style.left = "-100%";
    setTimeout(function(){
        Router.push("/health");
    }, 600)
}

const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');

const Topic = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

return <div
    style={{ backgroundColor: backgroundColor }}
    className="Topic" id="page">
    <div className="defaultscreen">

            <LogoSmall />
            <Menu />
        <div className="topic_pagetitle">
            <PageTitle text="Choose a" />
            <PageTitle marginTop="15px" text="topic" />
        </div>
        <div className="topic_panels">
            <div onClick={clickMaintenance} className="topic_maintenance">
            <Link href="/maintenance"><CardPanel src={maintenanceImg} /></Link >
                <PanelTitle color="#B7CfD2" text="Maintenance" />
            </div>
            <div onClick={clickTraining} className="topic_training">
            <Link href="/training"><CardPanel color="#Ef9B89" src={trainingImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Training" />
            </div>
            <div onClick={clickHealth} className="topic_health">
            <Link href="/health"><CardPanel color="#B7D4A0" src={healthImg} /></Link>
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div>
}

export default Topic;