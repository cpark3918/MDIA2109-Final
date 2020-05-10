import Router from 'next/router';
import React, { useEffect } from 'react';
import './healthquizadult_q1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/healthquizadult_q2");
    }, 600)
}

function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/healthquizadult_q2");
    }, 600)
}

const HealthQuizQ1 = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="health_quiz">
        <div className="defaultscreen">
            <Menu />
            <LogoSmall />
            <div className="healthquiz_pagetitle">
                <PageTitle text="Health Quiz" />
            </div>
            <div id="page">
                <div className="health_question">
                    <PanelTitle text="When should booster shots for" />
                    <PanelTitle marginTop="-5px" marginBottom="-5px" text="DHLPPC and rabies" />
                    <PanelTitle text="be administered?" />
                </div>
                <div className="health_answers1">
                    <div onClick={clickAnswer} className="health_answer">
                        <CustomButton fontSize="30px" color="#B7CfD2" text="After 10 months" />
                    </div>
                    <div onClick={clickRight}className="health_answer">
                        <CustomButton fontSize="30px" color="#Ef9B89" text="After 12 months" />
                    </div>
                    <div onClick={clickAnswer}  className="health_answer">
                        <CustomButton fontSize="30px" color="#B7D4A0" text="Every 3 years" />
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default HealthQuizQ1;