import React from 'react';
import './tutorial5.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import PanelTitle from '../../comps/paneltitle';
import CustomButton from '../../comps/custombutton';

const happyIcon = require('../../animations/happy-dog.gif');
const poopIcon = require('../../animations/poop.gif');

const Tutorial05 = () => {
    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PanelTitle text="Tutorial" color="#000" fontSize="35pt" />
                <Menu />
            </div>
            <div className="tut_box">
                <div className="tut_animations">
                    <img src={happyIcon} />
                    <img src={poopIcon} />
                </div>
                <p>Different animations will appear on<br></br>your screen depending on your score.<br></br>You may have to retake the quiz(zes) to<br></br>be fully prepared to adopt!</p>
            </div>
            <div className="progress_box">
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_inactive"></div>
                <div className="progress_active"></div>
            </div>
            <CustomButton text="Let's start!" color="#B7D4A0" fontSize="20pt" />
        </div>
    </div>
};

export default Tutorial05;