import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './exerciseinfosenior.css';
import Maintenance from '../maintenance';

import BackDrop from '../../comps/backdrop';

function clickExit() {
    if (true) {
        Router.push("/maintenancesenior");
    }
}

const bathroomgif = require('../../animations/bathroom.gif');

const ExerciseInfoSenior = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".exerciseinfoPanel").style.opacity = "1";
        }, 100);
    }, []);
    
    return <div
        style={{ backgroundColor: backgroundColor }}
        className="exerciseinfo">
        <div className="defaultscreen">
            <BackDrop />
            {/* <div className="transparencyScreen"> */}
            {/* <div className="exercise-info_logo">
            <LogoSmall />
        </div> */}
            <div className="exercise-info_page">
                <Maintenance />
            </div>
            <div onClick={clickExit} className="exerciseinfoPanel">
                <Link href="/maintenancesenior"><InfoPanel img={bathroomgif} title="Exercise" info="As dogs  
        enter their senior years, their energy levels begin to regress. 
        However it remains equally important to properly exercise them 
        every day. It is recommended to have frequent but short exercise 
        periods. Owners should take into consideration that the speed and 
        mobility of their dog has declined. At this age, 
        your dogs hearing and sight may start to deteriorate. For this 
        reason it is best to stay on familiar routes, as it will prevent 
        them from becoming anxious, stressed, or confused. " /></Link>
            </div>
        </div>
        {/* </div> */}
    </div>
};

export default ExerciseInfoSenior;