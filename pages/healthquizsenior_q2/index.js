import Router from 'next/router';
import React, { useEffect } from 'react';
import './healthquizsenior_q2.css';
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
        Router.push("/healthquizsenior_q3");
    }, 600)
}

function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/healthquizsenior_q3");
    }, 600)
}

const HealthQuizQ2 = ({ backgroundColor }) => {

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
                    <PanelTitle text="What is an example of" />
                    <PanelTitle marginTop="-5px" marginBottom="-5px" text="a common sign of a" />
                    <PanelTitle text="kidney disease?" />
                </div>
                <div className="health_answers1">
                    <div onClick={clickAnswer} className="health_answer">
                        <CustomButton fontSize="30px" color="#B7CfD2" text="Blood in urine" />
                    </div>
                    <div onClick={clickAnswer}className="health_answer">
                        <CustomButton fontSize="30px" color="#Ef9B89" text="Coughing" />
                    </div>
                    <div onClick={clickRight}  className="health_answer">
                        <CustomButton fontSize="30px" color="#B7D4A0" text="Poor hair coat" />
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default HealthQuizQ2;