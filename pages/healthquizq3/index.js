import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect}  from 'react';
import './healthquizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    if (true) {
        Router.push("/healthquizresults");
    }
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    if (true) {
        Router.push("/healthquizresults");
    }
}

const HealthQuizQ3 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="health_quiz">
    <div className="defaultscreen">
        <Menu />
        <LogoSmall />
        <div className="healthquiz_pagetitle">
            <PageTitle text="Health Quiz" />
        </div>
        <div className="health_question">
            <PanelTitle text="How often should you" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="take your senior dog" />
            <PanelTitle text="to the vet?" />
        </div>
        <div className="health_answers">
            <div onClick={clickAnswer} className="health_answer">
                <Link href="/healthquizresults"><CustomButton fontSize="30px" color="#B7CfD2" text="Every 3 months" /></Link>
            </div>
            <div onClick={clickAnswer} className="health_answer">
                <Link href="/healthquizresults"><CustomButton fontSize="30px" color="#Ef9B89" text="Every 6 months" /></Link>
            </div>
            <div onClick={clickRight} className="health_answer">
                <Link href="/healthquizresults"><CustomButton fontSize="30px" color="#B7D4A0" text="Every year" /></Link>
            </div>
        </div>
    </div>
</div >

export default HealthQuizQ3;