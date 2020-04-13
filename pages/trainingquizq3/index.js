import React from 'react';
import './trainingquizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';


const TrainingQuizQ3 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <div className="training_logo">
            <LogoSmall />
        </div>
        <div className="trainingquiz_pagetitle">
            <PageTitle color="#B7CfD2" text="Training Quiz" />
        </div>
        <div className="training_question3">
            <PanelTitle text="Which is NOT a benefit" />
            <PanelTitle text="of crate training" />
            <PanelTitle text="your puppy?" />
        </div>
        <div className="training_answers3">
            <div className="training3_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Safe Space" />
            </div>
            <div className="training3_answer">
                <CustomButton  fontSize="30px" color="#Ef9B89" text="Prevents Barking" />
            </div>
            <div className="training3_answer">
                <CustomButton  fontSize="30px" color="#B7D4A0" text="Stay Out Of Trouble" />
            </div>
        </div>
    </div>
</div >

export default TrainingQuizQ3;