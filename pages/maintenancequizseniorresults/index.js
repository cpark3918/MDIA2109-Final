import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect}  from 'react';
import './maintenancequizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');
const animation = require('../../animations/happy-dog.gif');


function clickTraining() {
    ChangeData({
        score:0
    })
    if (true) {
    Router.push("/trainingsenior");
    }
}


function clickHealth() {
    ChangeData({
        score:0
    })
    if (true) {
    Router.push("/healthsenior");
    }
}



const MaintenanceQuizSeniorResults = ({ backgroundColor }) => {

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
    className="maintenance_results">
         <div className="menu_main">
            <Menu />
        </div>
    <div className="defaultscreen">
        <LogoSmall />
        <div className="maintenanceresults_pagetitle">
            <PageTitle text="Quiz Results" />
            <PanelTitle marginTop="5px" marginBottom="10px;" text={text} />
            <img id="animation" src={animation}></img>
        </div>
        <div className="maintenance_results_results">
            <PanelTitle fontSize="20px" text="Good job!" />
            <PanelTitle fontSize="20px" marginTop="-5px" marginBottom="-5px" text="Keep up the good work! Check out" />
            <PanelTitle fontSize="20px" marginBottom="0px" text="the other categories to learn more" />
            <PanelTitle fontSize="20px" text="what it takes to look after a dog!" />
        </div>
        <div className="maintenance_results_categories">
            <div onClick={clickTraining} className="maintenance-results_training">
                <Link href="/trainingsenior"><CardPanel src={trainingImg} /></Link>
                <PanelTitle color="#B7CfD2" text="Training" />
            </div>
            <div onClick={clickHealth} className="maintenance-results_health">
            <Link href="/healthsenior"><CardPanel color="#B7D4A0" src={healthImg} /></Link>
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
</div >
}

export default MaintenanceQuizSeniorResults;