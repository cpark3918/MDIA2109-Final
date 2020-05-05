import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './topic.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import BackToPrev from '../../comps/backtoprev';
import Menu from '../../comps/menu';

function clickMaintenance() {
    if (true) {
    Router.push("/maintenanceadult");
    }
}


function clickTraining() {
    if (true) {
    Router.push("/trainingadult");
    }
}

function clickBack() {
    if (true) {
        Router.push("/lifestage");
    }
}

function clickHealth() {
    if (true) {
    Router.push("/healthadult");
    }
}

const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');

const TopicAdult = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="Topic">
    <div className="defaultscreen">
        <div className="topic_logo">
            <LogoSmall />
        </div>
        <Menu />
        <div className="topic_pagetitle">
            <PageTitle text="Choose a" />
            <PageTitle marginTop="15px" text="topic" />
        </div>
        <div className="topic_panels">
            <div onClick={clickMaintenance} className="topic_maintenance">
            <Link href="/maintenanceadult"><CardPanel src={maintenanceImg} /></Link >
                <PanelTitle color="#B7CfD2" text="Maintenance" />
            </div>
            <div onClick={clickTraining} className="topic_training">
            <Link href="/trainingadult"><CardPanel color="#Ef9B89" src={trainingImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Training" />
            </div>
            <div onClick={clickHealth} className="topic_health">
            <Link href="/healthadult"><CardPanel color="#B7D4A0" src={healthImg} /></Link>
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div>

export default TopicAdult;