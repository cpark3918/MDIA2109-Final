import React from 'react';
import './topic.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';

const maintenanceImg = require('../../cardIcons/maintenance.png');
const trainingImg = require('../../cardIcons/training.png');
const healthImg = require('../../cardIcons/health.png');

const Topic = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="Topic">
    <div className="defaultscreen">
        <div className="topic_logo">
            <LogoSmall />
        </div>
        <div className="topic_pagetitle">
            <PageTitle text="Choose a" />
            <PageTitle text="topic" />
        </div>
        <div className="topic_panels">
            <div className="topic_maintenance">
                <CardPanel src={maintenanceImg} />
                <PanelTitle color="#B7CfD2" text="Maintenance" />
            </div>
            <div className="topic_training">
                <CardPanel color="#Ef9B89" src={trainingImg} />
                <PanelTitle color="#Ef9B89" text="Training" />
            </div>
            <div className="topic_health">
                <CardPanel color="#B7D4A0" src={healthImg} />
                <PanelTitle color="#B7D4A0" text="Health" />
            </div>
        </div>
    </div>
</div>

export default Topic;