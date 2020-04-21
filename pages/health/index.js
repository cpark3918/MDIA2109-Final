import React from 'react';
import './health.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';
import Menu from '../../comps/menu';

const checkupsImg = require('../../cardIcons/checkups.png');
const vaccinesImg = require('../../cardIcons/vaccines.png');

const Health = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="health">
    <div className="defaultscreen">
            <LogoSmall />
        <Menu />
        <div className="health_pagetitle">
            <PageTitle marginBottom="55px" text="Health" />
        </div>
        <div className="health_panels">
            <div className="health_checkups">
                <CardPanel src={checkupsImg} />
                <PanelTitle color="#B7CfD2" text="Check-Ups" />
            </div>
            <div className="health_vaccines">
                <CardPanel color="#Ef9B89" src={vaccinesImg} />
                <PanelTitle color="#Ef9B89" text="Medical Care" />
            </div>
        </div>
    </div>
</div>

export default Health;