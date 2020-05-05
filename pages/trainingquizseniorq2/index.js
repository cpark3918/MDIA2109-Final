import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect}  from 'react';
import './trainingquizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';


import {data, ChangeData} from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector(".training_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/trainingquizseniorq3");
    }, 600)
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    document.querySelector(".training_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/trainingquizseniorq3");
    }, 600)
}


function clickBack() {
    if (true) {
        Router.push("/trainingquizseniorq1");
    }
}

const TrainingQuizSeniorQ2 = ({ backgroundColor }) =>{
    
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
        <div className="training_question1">
            <PanelTitle text="Are senior dogs" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="too old to be" />
            <PanelTitle  marginTop="-5px" text="socialized?" />
        </div>
        <div className="training_answers1">
            <div onClick={clickAnswer} className="training2_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="Yes" />
            </div>
            <div onClick={clickRight} className="training2_answer">
                <CustomButton fontSize="30px" color="#Ef9B89" text="No" />
            </div>
            <div onClick={clickAnswer} className="training2_answer">
              <CustomButton fontSize="30px" color="#B7D4A0" text="depends on the dog" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >
}

export default TrainingQuizSeniorQ2;