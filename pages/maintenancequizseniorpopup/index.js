import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './quizpopup.css';
import Maintenance from '../maintenance';
import QuizPopUp from '../../comps/quizpopup';

import {data, ChangeData} from '../data';

console.log(data);

function clickStartQuiz() {
    ChangeData({
        score:0
    })
    if (true) {
    Router.push("/maintenancequizseniorq1");
    }
}

function clickExit() {
    if (true) {
    Router.push("/maintenancesenior");
    }
}

const TrainingQuizSeniorPopUp = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="quizpopup">
    <div className="defaultscreen">
        <div className="trainingpage">
            <Maintenance />
        </div>
        <div  onClick={clickStartQuiz} className="qpopup">
            <Link href="maintenancequizseniorq1"><QuizPopUp /></Link>
        </div>
    </div>
    <div onClick={clickExit} id="exit"></div>
</div> 

export default TrainingQuizSeniorPopUp