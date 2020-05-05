import React from 'react';
import './trainingquizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Link from 'next/link';
import Router from 'next/router';
import Menu from '../../comps/menu';

import {data, ChangeData} from '../data';

console.log(data);

function clickAnswer() {
    if (true) {
        Router.push("/trainingquizadultq2");
    }
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    if (true) {
        Router.push("/trainingquizadultq2");
    }
}


const TrainingQuizAdultQ1 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <Menu />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question1">
            <PanelTitle text="How soon after" />
            <PanelTitle marginTop="-5px" marginBottom="-2px" text="adopting your dog" />
            <PanelTitle marginBottom="-5px" text="should you set" />
            <PanelTitle text="boundaries with them?" />
        </div>
        <div className="training_answers1">
            <div onClick={clickAnswer} className="training1_answer1">
                <CustomButton fontSize="30px" color="#B7CfD2" text="right away" />
            </div>
            <div onClick={clickRight} className="training1_answer2">
                <CustomButton fontSize="30px" color="#Ef9B89" text="after 6 months" />
            </div>
            <div onClick={clickAnswer} className="training1_answer3">
              <CustomButton fontSize="30px" color="#B7D4A0" text="never" />
            </div>
        </div>
    </div>
</div >

export default TrainingQuizAdultQ1;
