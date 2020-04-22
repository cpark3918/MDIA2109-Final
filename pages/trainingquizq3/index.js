import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './trainingquizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';

function clickAnswer() {
    if (true) {
        Router.push("/trainingquizresults");
    }
}

const TrainingQuizQ3 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question3">
            <PanelTitle text="Which is NOT a benefit" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="of crate training" />
            <PanelTitle text="your puppy?" />
        </div>
        <div className="training_answers3">
            <div onClick={clickAnswer} className="training3_answer">
                <Link href="/trainingquizresults"><CustomButton fontSize="30px" color="#B7CfD2" text="Safe Space" /></Link>
            </div>
            <div onClick={clickAnswer} className="training3_answer">
                <Link href="/trainingquizresults"><CustomButton fontSize="30px" color="#Ef9B89" text="Prevents Barking" /></Link>
            </div>
            <div onClick={clickAnswer} className="training3_answer">
                <Link href="/trainingquizresults"><CustomButton fontSize="30px" color="#B7D4A0" text="Stay Out Of Trouble" /></Link>
            </div>
        </div>
    </div>
</div >

export default TrainingQuizQ3;