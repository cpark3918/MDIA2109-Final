import React from 'react';
import './tutorial4.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import PanelTitle from '../../comps/paneltitle';

const tapIcon = require('../../animations/tap.gif')

const Tutorial04 = () => {
    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PanelTitle text="Tutorial" color="#000" fontSize="35pt"/>
                <Menu />
            </div>
            <div className="tut_box" id="tut4_box">
                <PanelTitle text="(Question)" color="#000" />
                <div className="tut_topics">
                    <h2 id="maint">7 weeks old</h2>
                    <h2 id="train">16 weeks old</h2>
                    <h2 id="health">1 year old</h2>
                    <img id="tut4_tap" src={tapIcon} />
                </div>
                <p>Take the quiz (per category).<br></br>Each quiz consists of 3 questions!</p>
            </div>
            <div className="progress_box">
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_active"></div>
                <div className="progress_inactive"></div>
            </div>
        </div>
    </div>
};

export default Tutorial04;