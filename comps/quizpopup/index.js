import React from 'react';
import './quizpopup.css';
import CustomButton from '../custombutton';

import BackDrop from '../backdrop';

const closeWindowGray = require('../../cardIcons/close_gray.png')

const QuizPopup = () => <div className="quizpopup_contain">
    <img className="xButton" src={closeWindowGray} />
     <div className="quizpopup_box">
         <h1 id="title">Quiz Time!</h1>
         <p id="quizpopupp">Time to put your <br></br>knowledge to the test!</p>
         <CustomButton text="Start Quiz" fontSize="30pt"/>
     </div>
</div>

export default QuizPopup;