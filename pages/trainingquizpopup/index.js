import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './quizpopup.css';
import Training from '../training';
import QuizPopUp from '../../comps/quizpopup';

import BackDrop from '../../comps/backdrop';

function clickStartQuiz() {
    if (true) {
        Router.push("/trainingquizq1");
    }
}

function clickExit() {
    if (true) {
        Router.push("/training");
    }
}

const TrainingQuizPopUp = ({ backgroundColor }) => {

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
            {/* <div className="backdrop"> */}
            <div className="trainingpage">
                <Training onClick={clickExit} />
            </div>
            <div onClick={clickStartQuiz} className="qpopup">
                <Link href="trainingquizq1"><QuizPopUp /></Link>
            </div>
        </div>
        {/* </div> */}
        <div onClick={clickExit} id="exit">
        </div>
    </div>
};

export default TrainingQuizPopUp