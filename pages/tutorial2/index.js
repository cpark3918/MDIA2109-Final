import React from 'react';
import './tutorial2.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import PanelTitle from '../../comps/paneltitle';

const tapIcon = require('../../animations/tap.gif')

const Tutorial02 = () => {
    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PanelTitle text="Tutorial" color="#000" fontSize="35pt"/>
                <Menu />
            </div>
            <div className="tut_box">
                <div className="tut_topics">
                    <h2 id="maint">Maintenance</h2>
                    <h2 id="train">Training</h2>
                    <h2 id="health">Health</h2>
                    <img id="tut2_tap" src={tapIcon} />
                </div>
                <p>Choose between the given categories</p>
            </div>
            <div className="progress_box">
                <div className="progress_inactive"></div>
                <div className="progress_active"></div>
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
            </div>
        </div>
    </div>
};

export default Tutorial02;