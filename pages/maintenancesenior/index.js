import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenance.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

function clickExercise() {
    if (true) {
        Router.push("/exerciseinfosenior");
    }
}

function clickFood() {
    if (true) {
        Router.push("/foodinfosenior");
    }
}

function clickBack() {
    if (true) {
        Router.push("/topicsenior");
    }
}

const exerciseImg = require('../../cardIcons/exercise.png');
const foodImg = require('../../cardIcons/food.png');

const MaintenanceSenior = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance">
    <div className="defaultscreen">
        <div className="maintenance_logo">
            <LogoSmall />
        </div>
        <Menu />
        <div className="maintenance_pagetitle">
            <PageTitle marginBottom="55px" text="Maintenance" />
        </div>
        <div className="maintenance_panels">
            <div onClick={clickExercise} className="maintenance_exercise">
                <Link href="/exerciseinfosenior"><CardPanel src={exerciseImg} /></Link>
                <PanelTitle color="#B7CfD2" text="Exercise" />
            </div>
            <div onClick={clickFood} className="maintenance_food">
                <Link href="/foodinfosenior"><CardPanel color="#Ef9B89" src={foodImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Food" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div>

export default MaintenanceSenior;