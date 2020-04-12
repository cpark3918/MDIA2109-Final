import React from 'react';
import './trainingquizresults.css';
import LogoSmall from '../../comps/logo_small';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import CardPanel from '../../comps/cardpanel';


const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');


const TrainingQuizResults = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_results">
    <div className="defaultscreen">
        <div className="trainingresults_logo">
            <LogoSmall />
        </div>
        <div className="trainingresults_pagetitle">
            <PageTitle color="#B7CfD2" text="Quiz Results" />
            <PageTitle color="#B7CfD2" text="2/3" />
        </div>
        <div className="training_results">
            <PanelTitle text="Good job!" />
            <PanelTitle text="Keep up the good work! Check out" />
            <PanelTitle text="the other categories to learn more" />
            <PanelTitle text="what it takes to look after a dog!" />
        </div>
        <div className="training_results_categories">
            <div className="training-results_maintenance">
                <CardPanel src={maintenanceImg} />
                <PanelTitle color="#B7CfD2" text="Maintenance" />
            </div>
            <div className="training-results_health">
                <CardPanel color="#B7D4A0" src={healthImg} />
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
</div >

export default TrainingQuizResults;