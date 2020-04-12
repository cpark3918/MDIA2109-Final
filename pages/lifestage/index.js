import React from 'react';
import './lifestage.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';

import puppyImgs from '../../cardIcons/puppy.png';

const puppyImg = {
    src: puppyImgs,
}
const adultImg = require('../../cardIcons/adult.png');
const seniorImg = require('../../cardIcons/adult.png');

const LifeStages = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="Life_Stage">
    <div className="defaultscreen">
        <div className="life-stage_logo">
            <LogoSmall />
        </div>
        <div className="life-stage_pagetitle">
            <PageTitle color="#B7CfD2" text="At which" />
            <PageTitle color="#B7CfD2" text="lifestage are" />
            <PageTitle color="#B7CfD2" text="they in?" />
        </div>
        <div className="life-stage_panels">
            <div className="life-stage_puppy">
                <CardPanel src={puppyImg.src} />
                <PanelTitle color="#B7CfD2" text="Puppy" />
            </div>
            <div className="life-stage_adult">
                <CardPanel color="#Ef9B89" src={adultImg} />
                <PanelTitle color="#Ef9B89" text="Adult" />
            </div>
            <div className="life-stage_senior">
                <CardPanel color="#B7D4A0" src={seniorImg} />
                <PanelTitle color="#B7D4A0" text="Senior" />
            </div>
        </div>
    </div>
</div>

export default LifeStages;