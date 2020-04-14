import React from 'react';
import './trainingquizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';


const TrainingQuizQ2 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <div className="training_logo">
            <LogoSmall />
        </div>
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question1">
            <PanelTitle text="Which of theese commands" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="are useful for all puppies" />
            <PanelTitle text="to know?" />
        </div>
        <div className="training_answers1">
            <div className="training2_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Sit" />
            </div>
            <div className="training2_answer">
                <CustomButton  fontSize="30px" color="#Ef9B89" text="Hand Stand" />
            </div>
            <div className="training2_answer">
                <CustomButton  fontSize="30px" color="#B7D4A0" text="Play Dead" />
            </div>
        </div>
    </div>
</div >

export default TrainingQuizQ2;