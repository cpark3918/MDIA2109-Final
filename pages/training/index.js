import React from 'react';
import './training.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';

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
            <div className="training_commands">
                <CardPanel src={commandsImg} />
                <PanelTitle color="#B7CfD2" text="Commands" />
            </div>
            <div className="training_socializing">
                <CardPanel color="#Ef9B89" src={socializingImg} />
                <PanelTitle color="#Ef9B89" text="Socializing" />
            </div>
        </div>
    </div>
</div>

export default Training;