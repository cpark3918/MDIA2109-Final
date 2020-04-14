import React from 'react';
import './maintenance.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';

const exerciseImg = require('../../cardIcons/exercise.png');
const foodImg = require('../../cardIcons/food.png');

const Maintenance = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance">
    <div className="defaultscreen">
        <div className="maintenance_logo">
            <LogoSmall />
        </div>
        <div className="maintenance_pagetitle">
            <PageTitle marginBottom="55px" text="Maintenance" />
        </div>
        <div className="maintenance_panels">
            <div className="maintenance_exercise">
                <CardPanel src={exerciseImg} />
                <PanelTitle color="#B7CfD2" text="Exercise" />
            </div>
            <div className="maintenance_food">
                <CardPanel color="#Ef9B89" src={foodImg} />
                <PanelTitle color="#Ef9B89" text="Food" />
            </div>
        </div>
    </div>
</div>

export default Maintenance;