import React from 'react';
import './trainingquizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';
import Link from 'next/link';
import Router from 'next/router';

import { data, ChangeData } from '../../pages/data';

console.log(data);


const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');
const quizAnimation = require('../../animations/happy-dog.gif');
const num = require('../../pages/data');


function clickMaintenance() {
    if (true) {
        Router.push("/maintenance");
    }
}

function clickHealth() {
    if (true) {
        Router.push("/health");
    }
}



const TrainingQuizResults = ({ backgroundColor }) => {
    var text = "";
    if(data.score === 3){
        text="3/3"
    } else if (data.score === 2){
        text="2/3"
    } else if (data.score === "1"){
        text="1/3"
    } else if (data.score === "11"){
        text="2/3"
    } else if (data.score === "111"){
        text="3/3"
    } else {
        text="0/3"
    }


return <div
        style={{ backgroundColor: backgroundColor }}
        className="training_results">
        <div className="defaultscreen">
            <LogoSmall />
            <Menu />
            <div className="trainingresults_pagetitle">
                <PageTitle text="Quiz Results" />
                <PanelTitle marginTop="5px" marginBottom="10px" text={text} />
                <img id="animation" src={quizAnimation}></img>
            </div>
            <div className="training_results_results">
                <PanelTitle fontSize="20px" text="Good job!" />
                <PanelTitle fontSize="20px" marginTop="-5px" marginBottom="-5px" text="Keep up the good work! Check out" />
                <PanelTitle fontSize="20px" marginBottom="0px" text="the other categories to learn more" />
                <PanelTitle fontSize="20px" text="what it takes to look after a dog!" />
            </div>
            <div className="training_results_categories">
                <div onClick={clickMaintenance} className="training-results_maintenance">
                    <CardPanel src={maintenanceImg} />
                    <PanelTitle color="#B7CfD2" text="Maintenance" />
                </div>
                <div onClick={clickHealth} className="training-results_health">
                    <CardPanel color="#B7D4A0" src={healthImg} />
                    <PanelTitle color="#B7D4A0" text="Health" />
                </div>
            </div>
        </div>
    </div >
}

    export default TrainingQuizResults;