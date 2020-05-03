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
    className="socializinginfo" id="mainappinfoscreen">
    <div className="defaultscreen">
    <div className="transparencyScreen">
        {/* <div className="socializing-info_logo">
            <LogoSmall />
        </div> */}
        <div className="socializing-info_page">
            <Training />
        </div>
        <div onClick={clickQuiz} className="socializinginfoPanel">
        <Link href="/trainingquizpopup"><InfoPanel img={socializinggif} title="Socializing" info="Socializing your dog plays a crucial role in how your dog will react in social settings. First and foremost, daily walks are the best way to socialize your dog. Just taking your dog out of the house and exposing them to a variety of surroundings will help them grow more comfortable with the world and people around them. Remember to stay calm and confident if your dog acts scared and use positive reinforcement to give your dog a positive association with new people and experiences. It is important to be able to read your dogs body language. Especially if you have just recently adopted your dog, there may be many sights, sounds, and experiences that are unfamiliar and foreign to them. Dog classes are a great place to meet other dogs and people in a safe and controlled environment. Keep in mind that your dog is much smaller than most objects, people, and creatures it will encounter. " /></Link>
        </div>
        </div>
    </div>
</div>

export default SocializingInfoAdult;