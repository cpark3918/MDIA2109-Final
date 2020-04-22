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

const CommandInfoAdult = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="commandinfo">
    <div className="defaultscreen">
        <div className="command-info_logo">
            <LogoSmall />
        </div>
        <div className="command-info_page">
            <Training />
        </div>
        <div onClick={clickExit} className="commandinfoPanel">
        <Link href="/trainingadult"><InfoPanel img={commandsgif} info="Training adult dogs is often easier than training puppies as adult dogs often have more self control. If you've just recently adopted your dog, it is important to expect a period of adjustment. Each dog comes with a history, a new environment may be very stressful for them. Set boundaries early on with your dog; if you allow your dog to engage in certain behaviours when you first bring it home,  you will find that it is much harder to train them to stop doing those things later. Assume your dog has no training; if it does happen to know some tricks, this will be a nice surprise. The following are essential and useful commands for your dog to know: sit, respond to their name, off, and stay. It is also a good idea to crate train your dog. A crate is helpful becuase it gives your dog a place of its own. Between living in a shelter and now coming to a new home, your dog may feel extremley stressed. A crate is their own place to retreat to when they feel overwhelmed. " /></Link>
        </div>
    </div>
</div>

export default CommandInfoAdult