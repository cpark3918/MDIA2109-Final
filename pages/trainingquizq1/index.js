import React from 'react';
import './trainingquizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';


const TrainingQuizQ1 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <div className="training_logo">
            <LogoSmall />
        </div>
        <div className="trainingquiz_pagetitle">
            <PageTitle color="#B7CfD2" text="Training Quiz" />
        </div>
        <div className="training_question1">
            <PanelTitle text="Approximately how old should" />
            <PanelTitle text="your puppy be before bringing" />
            <PanelTitle text="them to a dog park?" />
        </div>
        <div className="training_answers1">
            <div className="training1_answer1">
                <CustomButton fontSize="30px" color="#B7CfD2" text="7 weeks old" />
            </div>
            <div className="training1_answer2">
                <CustomButton  fontSize="30px" color="#Ef9B89" text="16 weeks old" />
            </div>
            <div className="training1_answer3">
                <CustomButton  fontSize="30px" color="#B7D4A0" text="1 year old" />
            </div>
        </div>
    </div>
</div >

export default TrainingQuizQ1;