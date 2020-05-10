import Router from 'next/router';
import React, { useEffect } from 'react';
import './healthquizadult_q2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/healthquizadult_q3");
    }, 600)
}

function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/healthquizadult_q2");
    }, 600)
}

const HealthQuizQ3 = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="health_quiz">
        <div className="defaultscreen">
            <Menu />
            <LogoSmall />
            <div className="healthquiz_pagetitle">
                <PageTitle text="Health Quiz" />
            </div>
            <div id="page">
                <div className="health_question">
                    <PanelTitle text="Approximately how much do" />
                    <PanelTitle marginTop="-5px" marginBottom="-5px" text="routine vet visits cost" />
                    <PanelTitle text="at this life stage? (per year)" />
                </div>
                <div className="health_answers1">
                    <div onClick={clickRight} className="health_answer">
                        <CustomButton fontSize="30px" color="#B7CfD2" text="$700-1,500" />
                    </div>
                    <div onClick={clickAnswer}className="health_answer">
                        <CustomButton fontSize="30px" color="#Ef9B89" text="$1,500-2,500" />
                    </div>
                    <div onClick={clickAnswer}  className="health_answer">
                        <CustomButton fontSize="30px" color="#B7D4A0" text="$2500+" />
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default HealthQuizQ3;