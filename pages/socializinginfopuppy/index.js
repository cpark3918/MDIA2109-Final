import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfopuppy.css';

import BackDrop from '../../comps/backdrop';

const socializinggif = require('../../animations/socializing.gif');

function clickQuiz() {
    if (true) {
        Router.push("/trainingquizpopup");
    }
}

const SocializingInfoPuppy = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".socializinginfoPanel").style.opacity = "1";
        }, 100);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="socializinginfo" >
        <div className="defaultscreen">
            <BackDrop />
            {/* <div className="socializing-info_logo">
            <LogoSmall />
        </div> */}
            {/* <div className="transparencyScreen"> */}
            <div className="socializing-info_page">
                <Training />
            </div>
            <div onClick={clickQuiz} className="socializinginfoPanel">
                <Link href="/trainingquizpopup"><InfoPanel color="#EF9B89" img={socializinggif} title="Socializing" info="there is a 7-10 day window after your puppy has had his first vaccination before 
            they are safe to be exposed to other dogs. You shouldn't bring your puppy to areas 
             where groups of dogs frequently gather until your pup has received all of their initial puppy vaccines.  
             Your puppy's interactions in their first three months of life will permanently shape their future personality.
              Puppy classes are a great way to train your dog 
              while introducing them to other puppies and people." /></Link>
            </div>
        </div>
        {/* </div> */}
    </div>
};

export default SocializingInfoPuppy;