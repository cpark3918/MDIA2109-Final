import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './quizpopup.css';
import Training from '../training';
import QuizPopUp from '../../comps/quizpopup';

function clickStartQuiz() {
    if (true) {
    Router.push("/trainingquizseniorq1");
    }
}

function clickExit() {
    if (true) {
    Router.push("/trainingsenior");
    }
}

const TrainingQuizPopUpSenior = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="quizpopup">
    <div className="defaultscreen">
        <div className="trainingpage">
            <Training />
        </div>
        <div  onClick={clickStartQuiz} className="qpopup">
            <Link href="trainingquizseniorq1"><QuizPopUp /></Link>
        </div>
    </div>
    <div onClick={clickExit} id="exit"></div>
</div> 

export default TrainingQuizPopUpSenior