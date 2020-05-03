import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfosenior.css';


const socializinggif = require('../../animations/socializing.gif');

function clickQuiz() {
    if (true) {
    Router.push("/trainingquizpopup");
    }
}

const SocializingInfoSenior = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="commandinfo" >
    <div className="defaultscreen">
    <div className="transparencyScreen">
        {/* <div className="socializing-info_logo">
            <LogoSmall />
        </div> */}
        <div className="socializing-info_page">
            <Training />
        </div>
        <div onClick={clickQuiz} className="socializinginfoPanel">
        <Link href="/trainingquizpopup"><InfoPanel color="#ef9b89" title="Socializing" img={socializinggif} info="Socializing a 
        senior dog can be a bit challenging because they can be set in
         their ways. However, this should not be a reason to not 
         socialize them. Ensure to take it one step at a 
         time; don't rush things. Dogs are never too old to enlist 
         in dog classes, a great way to be in a monitored environment
          while exposing your dog to other dogs and people. You can 
          also ask your vet for recommendations of trainers for your 
          dog." /></Link>
        </div>
        </div>
    </div>
</div>

export default SocializingInfoSenior;