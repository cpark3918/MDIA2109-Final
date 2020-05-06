import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './trainingsenior.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';


function clickCommands() {
    if (true) {
    Router.push("/commandinfosenior");
    }
}

function clickSocializing() {
    if (true) {
    Router.push("/socializinginfosenior");
    }
}

function clickBack() {
    if (true) {
        Router.push("/topicsenior");
    }
}

const commandsImg = require('../../cardIcons/commands.png');
const socializingImg = require('../../cardIcons/socializing.png');

const TrainingSenior = ({ backgroundColor}) => {

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);
    
return <div
    style={{ backgroundColor: backgroundColor }}
    className="training" id="page">
    <div className="defaultscreen">
            <LogoSmall />
        <Menu />
        <div className="training_pagetitle">
            <PageTitle marginBottom="55px" text="Training" />
        </div>
        <div className="training_panels">
            <div onClick={clickCommands} className="training_commands">
                <Link href="/commandinfosenior"><CardPanel src={commandsImg} /></Link>
                <PanelTitle color="#B7CfD2" text="Commands" />
            </div>
            <div onClick={clickSocializing} className="training_socializing">
            <Link href="/traininginfosenior"><CardPanel color="#Ef9B89" src={socializingImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Socializing" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div>
}

export default TrainingSenior;

