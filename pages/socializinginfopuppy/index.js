import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfopuppy.css';

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
            <Link href="/trainingquizpopup"><InfoPanel title="Socializing" info="there is a 7-10 day window after your puppy has had his first vaccination before he is able to be safely exposed to other dogs. You should never bring your puppy to a dog park or other area where groups of dogs gather or many individual dogs frequent until your pup has received all of their vaccinations in their initial puppy series (around 16 weeks old). In these settings, the risk of disease transmission is just too high. There are various ways to socialize your puppy; keep in mind that the more you are able to expose them, the better off they will be. During your puppy's first three months of life, they wil experiecne a socialization period that will permanently shape their future personality, and play a big role in how they will react to their environemement as they grow older. Puppy classes are a great way to help your puppy begin to understand basic commands, but also introduce them to other puppies and people.  Remember that smaller dogs are easily frightened and intimidated by other dogs and people; they are miniscule in comparison to you!" /></Link>
        </div>
        </div>
    </div>
</div>

export default SocializingInfoPuppy