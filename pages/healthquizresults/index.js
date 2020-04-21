import React from 'react';
import './healthquizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';


const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');


const HealthQuizResults = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="health_results">
    <div className="defaultscreen">
        <LogoSmall />
        <div className="healthresults_pagetitle">
            <PageTitle text="Quiz Results" />
            <PageTitle marginTop="50px"text="2/3" />
        </div>
        <div className="health_results_results">
            <PanelTitle fontSize="20px" text="Good job!" />
            <PanelTitle fontSize="20px" marginTop="-5px" marginBottom="-5px" text="Keep up the good work! Check out" />
            <PanelTitle fontSize="20px" marginBottom="0px" text="the other categories to learn more" />
            <PanelTitle fontSize="20px" text="what it takes to look after a dog!" />
        </div>
        <div className="health_results_categories">
            <div className="health-results_maintenance">
                <CardPanel src={maintenanceImg} />
                <PanelTitle color="#B7CfD2" text="Maintenance" />
            </div>
            <div className="health-results_training">
                <CardPanel color="#EF9B89" src={trainingImg} />
                <PanelTitle color="#EF9B89" text="Training" />
            </div>
        </div>
    </div>
</div >

export default HealthQuizResults;