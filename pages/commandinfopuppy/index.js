import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './commandinfopuppy.css';

function clickExit() {
    if (true) {
    Router.push("/training");
    }
}

const CommandInfoPuppy = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="commandinfo">
    <div className="defaultscreen">
        {/* <div className="command-info_logo">
            <LogoSmall />
        </div> */}
        <div className="command-info_page">
            <Training />
        </div>
        <div onClick={clickExit} className="commandinfoPanel">
            <Link href="/training"><InfoPanel /></Link>
        </div>
    </div>
</div>

export default CommandInfoPuppy
