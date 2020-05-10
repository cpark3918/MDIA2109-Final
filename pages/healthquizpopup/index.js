import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
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

const HealthQuizPopUp = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".qpopup").style.opacity = "1";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="quizpopup">
        <div className="defaultscreen">
            <BackDrop />
            <div className="healthpage">
                <Health />
            </div>
            <div onClick={clickStartQuiz} className="qpopup">
                <Link href="healthquizq1"><QuizPopUp /></Link>
            </div>
        </div>
        <div onClick={clickExit} id="exit"></div>
    </div>
};

export default HealthQuizPopUp;