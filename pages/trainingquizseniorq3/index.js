import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './trainingquizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import BackToPrev from '../../comps/backtoprev';
import Menu from '../../comps/menu';

import {data, ChangeData} from '../../data';

console.log(data);

function clickAnswer() {
    if (true) {
        Router.push("/trainingquizseniorresults");
    }
}

function clickBack() {
    if (true) {
        Router.push("/trainingquizseniorq2");
    }
}


function clickRight(){
    ChangeData({
        score:data.score+1
    })
    if (true) {
        Router.push("/trainingquizseniorresults");
    }
}


const TrainingQuizSeniorQ3 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <Menu />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question3">
            <PanelTitle text="Who should you ask" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="for recommendations for" />
            <PanelTitle text="dog trainers" />
        </div>
        <div className="training_answers3">
            <div onClick={clickAnswer} className="training3_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Your doctor" />
            </div>
            <div onClick={clickAnswer} className="training3_answer">
                <CustomButton fontSize="30px" color="#Ef9B89" text="Your dentist" />
            </div>
            <div onClick={clickRight} className="training3_answer">
                <CustomButton fontSize="30px" color="#B7D4A0" text="Your vet" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >

export default TrainingQuizSeniorQ3;
