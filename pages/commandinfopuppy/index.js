import Link from 'next/link';
import Router from 'next/router';
import React, {useEffect} from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './commandinfopuppy.css';

import BackDrop from '../../comps/backdrop';

function clickExit() {
    if (true) {
        Router.push("/training");
    }
}


const commandsgif = require('../../animations/commands.gif');

const CommandInfoPuppy = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".commandinfoPanel").style.opacity = "1";
        }, 100);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="commandinfo">
        <div className="defaultscreen">
            <BackDrop />
            {/* <div className="transparencyScreen"> */}
            {/* <div className="command-info_logo">
            <LogoSmall />
        </div> */}
            <div className="command-info_page">
                <Training />
            </div>
            <div onClick={clickExit} className="commandinfoPanel">
                <Link href="/training"><InfoPanel img={commandsgif} /></Link>
            </div>
        </div>
        {/* </div> */}
    </div>
};

export default CommandInfoPuppy
