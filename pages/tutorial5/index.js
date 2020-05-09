import Router from 'next/router';
import React, { useEffect } from 'react';
import './tutorial5.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import PageTitle from '../../comps/pagetitle';
import CustomButton from '../../comps/custombutton';

const happyIcon = require('../../animations/happy-dog.gif');
const poopIcon = require('../../animations/poop.gif');

function clickStart() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/lifestage");
    }, 600)
}

const Tutorial05 = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PageTitle text="Tutorial" color="#000" fontSize="35pt" marginTop={80} />
            </div>
            <Menu />
            <div id="page">
                <div className="tut_box">
                    <div className="tut_animations">
                        <img src={happyIcon} />
                        <img src={poopIcon} />
                    </div>
                    <p id="tut5_p">Different animations will appear on your screen depending on your score. You may have to retake the quiz(zes) to be fully prepared to adopt!</p>
                </div>
                <div className="progress_box">
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_active"></div>
                </div>
                <div onClick={clickStart} className="tut_start">
                    <CustomButton text="Let's start!" color="#B7D4A0" fontSize="20pt" />
                </div>
            </div>
        </div>
    </div>
};

export default Tutorial05;