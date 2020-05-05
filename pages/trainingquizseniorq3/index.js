import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect}  from 'react';
import './trainingquizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import BackToPrev from '../../comps/backtoprev';
import Menu from '../../comps/menu';

import {data, ChangeData} from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector(".training_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/trainingquizseniorresults");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/trainingquizseniorq2");
    }
}


function clickRight(){
    ChangeData({
        score:data.score+1
    })
    document.querySelector(".training_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/trainingquizseniorresults");
    }, 600)
}


const TrainingQuizSeniorQ3 = ({ backgroundColor }) =>{

useEffect(() => {
    setTimeout(()=>{
        document.querySelector("#page").style.left = "0%";
    }, 50);
}, []);


return <div
    style={{ backgroundColor: backgroundColor }}
    className="training_quiz" id="page">
    <div className="defaultscreen">
        <LogoSmall />
        <Menu />
        <div className="trainingquiz_pagetitle">
            <PageTitle text="Training Quiz" />
        </div>
        <div className="training_question3">
            <PanelTitle text="Who should you ask" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="for recommendations for" />
            <PanelTitle text="dog trainers" />
        </div>
        <div className="training_answers3">
            <div onClick={clickAnswer} className="training3_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Your doctor" />
            </div>
            <div onClick={clickAnswer} className="training3_answer">
                <CustomButton fontSize="30px" color="#Ef9B89" text="Your dentist" />
            </div>
            <div onClick={clickRight} className="training3_answer">
                <CustomButton fontSize="30px" color="#B7D4A0" text="Your vet" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >
}

export default TrainingQuizSeniorQ3;
