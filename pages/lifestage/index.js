import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './lifestage.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import Nav from '../../comps/nav';
import BackToPrev from '../../comps/backtoprev';

function clickPuppy() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/topic");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/");
    }
}

function clickAdult() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/topicadult");
    }, 600)
}

function clickSenior() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/topicsenior");
    }, 600)
}

const puppyImg = require('../../cardIcons/puppy.png');
const adultImg = require('../../cardIcons/adult.png');
const seniorImg = require('../../cardIcons/senior.png');

const LifeStages = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="Life_Stage">
        <div className="defaultscreen">
            <div className="life-stage_logo">
                <LogoSmall />
            </div>
            <Menu />
            <div id="page">
                <div className="life-stage_pagetitle">
                    <PageTitle text="At which" />
                    <PageTitle marginBottom="20px" marginTop="5px" text="lifestage are" />
                    <PageTitle marginTop="15px;" text="they in?" />
                </div>
                <div className="life-stage_panels">
                    <div onClick={clickPuppy} className="life-stage_puppy">
                        <Link href="/topic"><CardPanel src={puppyImg} /></Link>
                        <PanelTitle color="#B7CfD2" text="Puppy" />
                    </div>
                    <div onClick={clickAdult} className="life-stage_adult">
                        <Link href="/topicadult"><CardPanel color="#Ef9B89" src={adultImg} /></Link>
                        <PanelTitle color="#Ef9B89" text="Adult" />
                    </div>
                    <div onClick={clickSenior} className="life-stage_senior">
                        <Link href="/topicsenior"><CardPanel color="#B7D4A0" src={seniorImg} /></Link>
                        <PanelTitle color="#B7D4A0" text="Senior" />
                    </div>
                </div>
            </div>
            <div onClick={clickBack} id="backtoprev">
                <BackToPrev />
            </div>
        </div>
    </div>
}

export default LifeStages;