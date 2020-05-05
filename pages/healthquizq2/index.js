import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect}  from 'react';
import './healthquizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector(".health_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/healthquizq3");
    }, 600)
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    document.querySelector(".health_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/healthquizq3");
    }, 600)
}

const HealthQuizQ2 = ({ backgroundColor }) => {

useEffect(() => {
    setTimeout(()=>{
        document.querySelector("#page").style.left = "0%";
    }, 50);
}, []);


return <div
    style={{ backgroundColor: backgroundColor }}
    className="health_quiz" id="page">
    <div className="defaultscreen">
            <Menu />
            <LogoSmall />
        <div className="healthquiz_pagetitle">
            <PageTitle text="Health Quiz" />
        </div>
        <div className="health_question">
            <PanelTitle text="How much do" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="vet visits cost annually" />
            <PanelTitle text="for an adult dog?" />
        </div>
        <div className="health_answers">
            <div onClick={clickAnswer}  className="health_answer">
            <Link href="/healthquizq3"><CustomButton fontSize="30px" color="#B7CfD2" text="$100-$200" /></Link>
            </div>
            <div onClick={clickRight}  className="health_answer">
            <Link href="/healthquizq3"><CustomButton  fontSize="30px" color="#Ef9B89" text="$700-$1,500" /></Link>
            </div>
            <div onClick={clickAnswer}  className="health_answer">
            <Link href="/healthquizq3"><CustomButton  fontSize="30px" color="#B7D4A0" text="$10,000+" /></Link>
            </div>
        </div>
    </div>
</div >
}

export default HealthQuizQ2;