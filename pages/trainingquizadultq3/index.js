import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './trainingquizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import BackToPrev from '../../comps/backtoprev';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/trainingquizadultresults");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/trainingquizadultq2");
    }
}


function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/trainingquizadultresults");
    }, 600)
}


const TrainingQuizAdultQ3 = ({ backgroundColor }) => {

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
                <div className="training_question3">
                    <PanelTitle text="Which is a good place" />
                    <PanelTitle marginTop="-5px" marginBottom="-5px" text="to socialize your" />
                    <PanelTitle text="adult dog?" />
                </div>
                <div className="training_answers3">
                    <div onClick={clickRight} className="training3_answer">
                        <CustomButton fontSize="30px" color="#B7CfD2" text="Dog classes" />
                    </div>
                    <div onClick={clickAnswer} className="training3_answer">
                        <CustomButton fontSize="30px" color="#Ef9B89" text="Hair Salon" />
                    </div>
                    <div onClick={clickAnswer} className="training3_answer">
                        <CustomButton fontSize="30px" color="#B7D4A0" text="The mall" />
                    </div>
                </div>
            </div>
            <div onClick={clickBack} id="backtoprev">
                <BackToPrev />
            </div>
        </div >
    </div>
}

export default TrainingQuizAdultQ3;
