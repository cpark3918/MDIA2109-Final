import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './maintenance.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

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

function clickBack() {
    if (true) {
        Router.push("/topic");
    }
}

const exerciseImg = require('../../cardIcons/exercise.png');
const foodImg = require('../../cardIcons/food.png');

const Maintenance = ({ backgroundColor }) => {

useEffect(() => {
    setTimeout(()=>{
        document.querySelector("#page").style.left = "0%";
    }, 50);
}, []);

return <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance" id="page">
    <div className="defaultscreen">
        <div>
            <LogoSmall />
        </div>
        <Menu />
        <div className="mainapp">
            <div className="maintenance_pagetitle">
                <PageTitle marginTop="120px" marginBottom="55px" text="Maintenance" />
            </div>
            <div onClick={clickBack} id="backtoprev">
                <BackToPrev />
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
</div>
}

export default Maintenance;
