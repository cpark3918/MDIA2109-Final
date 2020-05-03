import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfoadult.css';

const socializinggif = require('../../animations/socializing.gif');

function clickQuiz() {
    if (true) {
    Router.push("/trainingquizpopup");
    }
}

const SocializingInfoAdult = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="socializinginfo">
    <div className="defaultscreen">
    <div className="transparencyScreen">
        {/* <div className="socializing-info_logo">
            <LogoSmall />
        </div> */}
        <div className="socializing-info_page">
            <Training />
        </div>
        <div onClick={clickQuiz} className="socializinginfoPanel">
        <Link href="/trainingquizpopup"><InfoPanel color="#EF9B89" img={socializinggif} title="Socializing" info="Socializing your dog plays a crucial role in  
        your dogs behaviour. Daily walks are the best way to socialize your dog. Use positive 
         reinforcement to give your dog a positive association 
         with new people and experiences. If you
          have recently adopted your dog, there may be many 
          sights, sounds, and experiences that are unfamiliar and
           foreign to them. Dog classes are a great place to meet 
           other dogs and people in a safe and controlled environment." /></Link>
        </div>
        </div>
    </div>
</div>

export default SocializingInfoAdult;