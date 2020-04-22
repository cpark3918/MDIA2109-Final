import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './dogsize.css';
import LogoSmall from '../../comps/logo_small';
import PanelTitle from '../../comps/paneltitle';
import PageTitle from '../../comps/pagetitle';
import CardPanel from '../../comps/cardpanel';

const smalldogImg = require('../../cardIcons/small dog.png');

function clickSmall() {
    if (true) {
    Router.push("/lifestage");
    }
}


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
            <div onClick={clickSmall} className="dog-size_small">
                <Link href="/lifestage"><CardPanel src={smalldogImg}/></Link>
                <PanelTitle color="#B7CfD2" text="Small" />
            </div>
        </div>
    </div>
</div>

export default DogSize;