import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './healthquizseniorpopup.css';
import Health from '../health';
import QuizPopUp from '../../comps/quizpopup';

import BackDrop from '../../comps/backdrop';

import {data, ChangeData} from '../../data';

console.log(data);

function clickStartQuiz() {
    ChangeData({
        score:0
    })
    if (true) {
    Router.push("/healthquizsenior_q1");
    }
}

function clickExit() {
    if (true) {
    Router.push("/healthsenior");
    }
}

const HealthQuizSeniorPopUp = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="quizpopup">
    <div className="defaultscreen">
        <div className="trainingpage">
            <Health />
        </div>
        {/* <BackDrop /> */}
        <div  onClick={clickStartQuiz} className="qpopup">
            <Link href="/healthquizsenior_q1"><QuizPopUp /></Link>
        </div>
    </div>
    <div onClick={clickExit} id="exit"></div>
</div> 

export default HealthQuizSeniorPopUp