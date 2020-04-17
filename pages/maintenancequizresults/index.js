import React from 'react';
import './maintenancequizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';


const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');


const MaintenanceQuizResults = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_results">
    <div className="defaultscreen">
        <div className="maintenanceresults_logo">
            <LogoSmall />
        </div>
        <div className="maintenanceresults_pagetitle">
            <PageTitle text="Quiz Results" />
            <PageTitle text="2/3" />
        </div>
        <div className="maintenance_results_results">
            <PanelTitle fontSize="20px" text="Good job!" />
            <PanelTitle fontSize="20px"  marginTop="-5px" marginBottom="-5px"  text="Keep up the good work! Check out" />
            <PanelTitle fontSize="20px"  marginBottom="0px"  text="the other categories to learn more" />
            <PanelTitle fontSize="20px"  text="what it takes to look after a dog!" />
        </div>
        <div className="maintenance_results_categories">
            <div className="maintenance-results_training">
                <CardPanel src={trainingImg} />
                <PanelTitle color="#B7CfD2" text="Training" />
            </div>
            <div className="maintenance-results_health">
                <CardPanel color="#B7D4A0" src={healthImg} />
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
</div >

export default MaintenanceQuizResults;