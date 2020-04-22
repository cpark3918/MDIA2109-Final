import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Maintenance from '../maintenance';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './exerciseinfopuppy.css';

const bathroomgif = require('../../animations/bathroom.gif');


function clickExit() {
    if (true) {
    Router.push("/maintenance");
    }
}

const ExerciseInfoPuppy = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="exerciseinfo">
    <div className="defaultscreen">
        <div className="exercise-info_logo">
            <LogoSmall />
        </div>
        <div className="exercise-info_page">
            <Maintenance />
        </div>
        <div onClick={clickExit} className="exerciseinfoPanel">
           <Link href="/maintenance"><InfoPanel img={bathroomgif} title="Exercise" info="Puppies tend to have burst of energy throughout the day, also known as the zoomies. Because of that, it is better to give your puppy multiple shorter walks (5-10mins)  instead of one long walk. One long walk instead of multiple shorter ones can be too difficult on their body as it is still developing. It is especially important to remember for smaller breeds that your puppies legs are quite a bit shorter than yours! Stay on your puppies pace and allow them to rest if they start getting tired" /></Link> 
        </div>
    </div>
</div>

export default ExerciseInfoPuppy