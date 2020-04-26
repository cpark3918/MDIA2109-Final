import React from 'react';
import './trainingquizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Link from 'next/link';
import Router from 'next/router';
import Menu from '../../comps/menu';

function clickAnswer() {
    if (true) {
        Router.push("/trainingquizq2");
    }
}


const TrainingQuizQ1 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <Menu />
        <div className="training_question1">
            <PanelTitle text="Approximately how old" />
            <PanelTitle marginTop="-5px" marginBottom="-2px" text="should your puppy be" />
            <PanelTitle marginBottom="-5px" text="before bringing them" />
            <PanelTitle text="them to a dog park?" />
        </div>
        <div className="training_answers1">
            <div onClick={clickAnswer} className="training1_answer1">
                <Link href="/trainingquizq2"><CustomButton fontSize="30px" color="#B7CfD2" text="7 weeks old" /></Link>
            </div>
            <div onClick={clickAnswer} className="training1_answer2">
                <Link href="/trainingquizq2"><CustomButton fontSize="30px" color="#Ef9B89" text="16 weeks old" /></Link>
            </div>
            <div onClick={clickAnswer} className="training1_answer3">
                <Link href="/trainingquizq2"><CustomButton fontSize="30px" color="#B7D4A0" text="1 year old" /></Link>
            </div>
        </div>
    </div>
</div >

export default TrainingQuizQ1;