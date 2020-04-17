import React from 'react';
import './dogsize.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';

const smalldogImg = require('../../cardIcons/small dog.png');


const DogSize = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="dog_size">
    <div className="defaultscreen">
        <div className="dog-size_logo">
            <LogoSmall />
        </div>
        <div className="dog-size_pagetitle">
            <PageTitle text="Pick the size" />
            <PageTitle marginTop="15px" text="of the dog" />
        </div>
        <div className="dog-size_panels">
            <div className="dog-size_small">
                <CardPanel src={smalldogImg}/>
                <PanelTitle color="#B7CfD2" text="Small" />
            </div>
        </div>
    </div>
</div>

export default DogSize;