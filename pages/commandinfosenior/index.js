import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './commandinfosenior.css';


function clickExit() {
    if (true) {
    Router.push("/trainingsenior");
    }
}

const commandsgif = require('../../animations/commands.gif');

const CommandInfoSenior = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="commandinfo">
    <div className="defaultscreen">
    <div className="transparencyScreen">
        {/* <div className="command-info_logo">
            <LogoSmall />
        </div> */}
        <div className="command-info_page">
            <Training />
        </div>
        <div onClick={clickExit} className="commandinfoPanel">
        <Link href="/trainingsenior"><InfoPanel img={commandsgif} info="Most people
         associate training with puppies, but the reality is that dogs 
         are able to learn at any age.
         Senior dogs may be experiencing blindness, deafness, joint pains,
          or general discomfort; always monitor their situation and adjust
           to their physical and mental abilities.  Always use positive 
            reiforcement when training them. Using treats is a good way to
             motivate them but make sure you choose treats that are nutritious
              with age-related benefits. " /></Link>
        </div>
        </div>
    </div>
</div>

export default CommandInfoSenior
