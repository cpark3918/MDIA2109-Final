import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfopuppy.css';

const socializinggif = require('../../animations/socializing.gif');

function clickQuiz() {
    if (true) {
    Router.push("/trainingquizpopup");
    }
}

const SocializingInfoPuppy = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="socializinginfo" id="mainappinfoscreen" >
    <div className="defaultscreen">
        {/* <div className="socializing-info_logo">
            <LogoSmall />
        </div> */}
        <div className="transparencyScreen">
        <div className="socializing-info_page">
            <Training />
        </div>
        <div onClick={clickQuiz} className="socializinginfoPanel">
            <Link href="/trainingquizpopup"><InfoPanel img={socializinggif} title="Socializing" info="there is a 7-10 day window after your puppy has had his first vaccination before 
            they are safe to be exposed to other dogs. You shouldn't bring your puppy to areas 
             where groups of dogs frequently gather until your pup has received all of their initial puppy vaccines.
             There are various ways to socialize your puppy; keep in mind that the 
             more you expose them to, the more calm they will be. During 
             your puppy's first three months of life, they wil experience a 
             socialization period that will permanently shape their future personality, 
             and play a big role in how they will react to their environemement as they grow older.
              Puppy classes are a great way to get your puppy to understand basic commands, 
              while introducing them to other puppies and people.  
              Remember that smaller dogs are easily frightened and 
              intimidated by other dogs and people; they are miniscule in comparison to you!" /></Link>
        </div>
    </div>
</div>
</div>

export default SocializingInfoPuppy