import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './quizpopup.css';
import Health from '../health';
import QuizPopUp from '../../comps/quizpopup';

import BackDrop from '../../comps/backdrop';

function clickStartQuiz() {
    if (true) {
    Router.push("/healthquizq1");
    }
}

function clickExit() {
    if (true) {
    Router.push("/health");
    }
}

const HealthQuizPopUp = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="quizpopup">
    <div className="defaultscreen">
        <div className="healthpage">
            <Health />
        </div>
        <div  onClick={clickStartQuiz} className="qpopup">
            <Link href="healthquizq1"><QuizPopUp /></Link>
        </div>
    </div>
    <div onClick={clickExit} id="exit"></div>
</div> 

export default HealthQuizPopUp;