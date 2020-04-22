import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './lifestage.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import Nav from '../../comps/nav';

function clickPuppy() {
    if (true) {
    Router.push("/topic");
    }
}

function clickAdult() {
    if (true) {
    Router.push("/topicadult");
    }
}

function clickSenior() {
    if (true) {
    Router.push("/topicsenior");
    }
}

const puppyImg = require('../../cardIcons/puppy.png');
const adultImg = require('../../cardIcons/adult.png');
const seniorImg = require('../../cardIcons/adult.png');

const LifeStages = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="Life_Stage">
    <div className="defaultscreen">
        <div className="life-stage_logo">
            <LogoSmall />
        </div>
        <Menu />
        <div className="life-stage_pagetitle">
            <PageTitle text="At which" />
            <PageTitle  marginBottom="15px" marginTop="15px" text="lifestage are" />
            <PageTitle text="they in?" />
        </div>
        <div className="life-stage_panels">
            <div onClick={clickPuppy} className="life-stage_puppy">
                <Link href="/topic"><CardPanel src={puppyImg} /></Link>
                <PanelTitle color="#B7CfD2" text="Puppy" />
            </div>
            <div onClick={clickAdult}  className="life-stage_adult">
            <Link href="/topicadult"><CardPanel color="#Ef9B89" src={adultImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Adult" />
            </div>
            <div onClick={clickSenior}  className="life-stage_senior">
            <Link href="/topicsenior"><CardPanel color="#B7D4A0" src={seniorImg} /></Link>
                <PanelTitle color="#B7D4A0" text="Senior" />
            </div>
        </div>
    </div>
</div>

export default LifeStages;