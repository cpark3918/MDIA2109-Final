import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './commandinfoadult.css';

function clickExit() {
    if (true) {
        Router.push("/trainingadult");
    }
}


const commandsgif = require('../../animations/commands.gif');

const CommandInfoAdult = ({ backgroundColor }) => <div
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
                <Link href="/trainingadult"><InfoPanel img={commandsgif} info="Training
                 adult dogs is often easier than training puppies as adult dogs 
                 have more self control. If you've just recently adopted 
                 your dog, expect a period of adjustment. 
                 Each dog comes with a history, a new environment may be very 
                 stressful for them. Set boundaries early on with your dog; 
                allowing your dog to engage in certain behaviours when 
                 you first bring it home makes it
                 harder to later train them to stop those behaviours. 
                 Assume your dog has no training; if they do, it'll be a nice surprise" /></Link>
            </div>
        </div>
    </div>
</div>

export default CommandInfoAdult