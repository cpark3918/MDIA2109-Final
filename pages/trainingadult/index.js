import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './trainingadult.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';


function clickCommands() {
    if (true) {
    Router.push("/commandinfoadult");
    }
}

function clickSocializing() {
    if (true) {
    Router.push("/socializinginfoadult");
    }
}

const commandsImg = require('../../cardIcons/commands.png');
const socializingImg = require('../../cardIcons/socializing.png');

const Training = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training">
    <div className="defaultscreen">
        <div className="training_logo">
            <LogoSmall />
        </div>
        <div className="training_pagetitle">
            <PageTitle marginBottom="55px" text="Training" />
        </div>
        <div className="training_panels">
            <div onClick={clickCommands} className="training_commands">
                <Link href="/commandinfoadult"><CardPanel src={commandsImg} /></Link>
                <PanelTitle color="#B7CfD2" text="Commands" />
            </div>
            <div onClick={clickSocializing} className="training_socializing">
            <Link href="/traininginfoadult"><CardPanel color="#Ef9B89" src={socializingImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Socializing" />
            </div>
        </div>
    </div>
</div>

export default Training;