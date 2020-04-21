import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './quizpopup.css';
import Health from '../health';
import QuizPopUp from '../../comps/quizpopup';

function clickStartQuiz() {
    if (true) {
    Router.push("/healthquizq1");
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
</div> 

export default HealthQuizPopUp;