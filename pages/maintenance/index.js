import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenance.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';

function clickExercise() {
    if (true) {
        Router.push("/exerciseinfopuppy");
    }
}

function clickFood() {
    if (true) {
        Router.push("/foodinfopuppy");
    }
}

const exerciseImg = require('../../cardIcons/exercise.png');
const foodImg = require('../../cardIcons/food.png');

const Maintenance = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance">
    <div className="defaultscreen">
        <div className="maintenance_logo">
            <LogoSmall />
        </div>
        <div className="menu_main">
            <Menu />
        </div>

        <div className="maintenance_pagetitle">
            <PageTitle marginBottom="55px" text="Maintenance" />
        </div>
        <div className="maintenance_panels">
            <div onClick={clickExercise} className="maintenance_exercise">
                <Link href="/exerciseinfopuppy"><CardPanel src={exerciseImg} /></Link>
                <PanelTitle color="#B7CfD2" text="Exercise" />
            </div>
            <div onClick={clickFood} className="maintenance_food">
                <Link href="/foodinfopuppy"><CardPanel color="#Ef9B89" src={foodImg} /></Link>
                <PanelTitle color="#Ef9B89" text="Food" />
            </div>
        </div>
    </div>
</div>

export default Maintenance;