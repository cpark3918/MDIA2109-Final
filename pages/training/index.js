import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './training.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

function clickCommands() {
    if (true) {
        Router.push("/commandinfopuppy");
    }
}

function clickSocializing() {
    if (true) {
        Router.push("/socializinginfopuppy");
    }
}

function clickBack() {
    if (true) {
        Router.push("/topic");
    }
}

const commandsImg = require('../../cardIcons/commands.png');
const socializingImg = require('../../cardIcons/socializing.png');

const Training = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training">
    <div className="defaultscreen">
            <LogoSmall />
            <Menu />
        <div className="mainscreentraining">
            <div className="training_pagetitle">
                <PageTitle marginBottom="55px" text="Training" />
            </div>
            <div className="training_panels">
                <div onClick={clickCommands} className="training_commands">
                    <Link href="/commandinfopuppy"><CardPanel src={commandsImg} /></Link>
                    <PanelTitle color="#B7CfD2" text="Commands" />
                </div>
                <div onClick={clickSocializing} className="training_socializing">
                    <Link href="/traininginfopuppy"><CardPanel color="#Ef9B89" src={socializingImg} /></Link>
                    <PanelTitle color="#Ef9B89" text="Socializing" />
                </div>
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div>

export default Training;