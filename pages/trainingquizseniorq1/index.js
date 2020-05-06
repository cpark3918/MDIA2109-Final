import React, { useEffect } from 'react';
import './trainingquizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Link from 'next/link';
import Router from 'next/router';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/trainingquizseniorq2");
    }, 600)
}

function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/trainingquizseniorq2");
    }, 600)
}


const TrainingQuizSeniorQ1 = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="training_quiz">
        <div className="defaultscreen">
            <LogoSmall />
            <Menu />
            <div className="trainingquiz_pagetitle">
                <PageTitle text="Training Quiz" />
            </div>
            <div id="page">
                <div className="training_question1">
                    <PanelTitle text="What impacts your" />
                    <PanelTitle marginTop="-5px" marginBottom="-2px" text="senior dog from being" />
                    <PanelTitle marginBottom="-5px" text="able to exercise" />
                    <PanelTitle text="like before?" />
                </div>
                <div className="training_answers1">
                    <div onClick={clickRight} className="training1_answer1">
                        <CustomButton fontSize="30px" color="#B7CfD2" text="blindness" />
                    </div>
                    <div onClick={clickAnswer} className="training1_answer2">
                        <CustomButton fontSize="30px" color="#Ef9B89" text="laziness" />
                    </div>
                    <div onClick={clickAnswer} className="training1_answer3">
                        <CustomButton fontSize="30px" color="#B7D4A0" text="bad weather" />
                    </div>
                </div>
            </div>
        </div >
    </div>
}

export default TrainingQuizSeniorQ1;
