import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './maintenancequizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/maintenancequizseniorq2");
    }, 600)
}

function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/maintenancequizseniorq2");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/maintenancequizseniorpopup");
    }
}

const MaintenanceQuizSeniorQ1 = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);


    return <div
        style={{ backgroundColor: backgroundColor }}
        className="maintenance_quiz">
        <Menu />
        <div className="defaultscreen">
            <LogoSmall />
                <div className="maintenancequiz_pagetitle">
                    <PageTitle fontSize="40px" text="Maintenance Quiz" />
                </div>
                <div id="page">
                <div className="maintenance_question1">
                    <PanelTitle text="Do I still need" />
                    <PanelTitle marginTop="-5px" marginBottom="-5px" text="to exercise my" />
                    <PanelTitle text="senior dog?" />
                </div>
                <div className="maintenance_answers1">
                    <div onClick={clickRight} className="maintenance1_answer">
                        <CustomButton fontSize="30px" color="#B7CfD2" text="yes" />
                    </div>
                    <div onClick={clickAnswer} className="maintenance1_answer">
                        <CustomButton fontSize="30px" color="#Ef9B89" text="no" />
                    </div>
                    <div onClick={clickAnswer} className="maintenance1_answer">
                        <CustomButton fontSize="30px" color="#B7D4A0" text="only once a week" />
                    </div>
                </div>
            </div>
            <div onClick={clickBack} id="backtoprev">
                <BackToPrev />
            </div>
        </div>
    </div >
}

export default MaintenanceQuizSeniorQ1;