import React from 'react';
import './quizpopup.css';
import Training from '../training';
import QuizPopUp from '../../comps/quizpopup';

const TrainingQuizPopUp = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="quizpopup">
    <div className="defaultscreen">
        <div className="trainingpage">
            <Training />
        </div>
        <div className="qpopup">
            <QuizPopUp />
        </div>
    </div>
</div> 

export default TrainingQuizPopUp