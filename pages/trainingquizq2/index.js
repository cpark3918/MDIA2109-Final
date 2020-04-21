import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './trainingquizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';

function clickAnswer() {
    if (true) {
        Router.push("/trainingquizq3");
    }
}

const TrainingQuizQ2 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question1">
            <PanelTitle text="Which of theese commands" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="are useful for all puppies" />
            <PanelTitle text="to know?" />
        </div>
        <div className="training_answers1">
            <div onClick={clickAnswer} className="training2_answer">
                <Link href="/trainingquizq3"><CustomButton fontSize="30px" color="#B7CfD2" text="Sit" /></Link>
            </div>
            <div onClick={clickAnswer} className="training2_answer">
                <Link href="/trainingquizq3"><CustomButton fontSize="30px" color="#Ef9B89" text="Hand Stand" /></Link>
            </div>
            <div onClick={clickAnswer} className="training2_answer">
                <Link href="/trainingquizq3"><CustomButton fontSize="30px" color="#B7D4A0" text="Play Dead" /></Link>
            </div>
        </div>
    </div>
</div >

export default TrainingQuizQ2;