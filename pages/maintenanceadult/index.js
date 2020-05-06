import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './maintenanceadult.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

function clickExercise() {
    if (true) {
        Router.push("/exerciseinfoadult");
    }
}

function clickFood() {
    if (true) {
        Router.push("/foodinfoadult");
    }
}

function clickBack() {
    if (true) {
        Router.push("/topicadult");
    }
}

const exerciseImg = require('../../cardIcons/exercise.png');
const foodImg = require('../../cardIcons/food.png');

const MaintenanceAdult = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="maintenance">
        <div className="defaultscreen">
            <div className="maintenance_logo">
                <LogoSmall />
            </div>

            <Menu />
            <div id="page">
                <div className="mainscreenmainteance">
                    <div className="maintenance_pagetitle">
                        <PageTitle marginTop="120px" marginBottom="55px" text="Maintenance" />
                    </div>
                    <div className="maintenance_panels">
                        <div onClick={clickExercise} className="maintenance_exercise">
                            <Link href="/exerciseinfoadult"><CardPanel src={exerciseImg} /></Link>
                            <PanelTitle color="#B7CfD2" text="Exercise" />
                        </div>
                        <div onClick={clickFood} className="maintenance_food">
                            <Link href="/foodinfoadult"><CardPanel color="#Ef9B89" src={foodImg} /></Link>
                            <PanelTitle color="#Ef9B89" text="Food" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={clickBack} id="backtoprev">
                <BackToPrev />
            </div>
        </div>
    </div>
}

export default MaintenanceAdult;