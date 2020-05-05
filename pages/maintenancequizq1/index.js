import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenancequizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

import { data, ChangeData } from '../../data';

console.log(data);

function clickAnswer() {
    document.querySelector(".maintenance_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/maintenancequizq2");
    }, 600)
}

function clickRight() {
    ChangeData({
        score: data.score + 1
    })
    document.querySelector(".maintenance_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/maintenancequizq2");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/maintenancequizpopup");
    }
}

const MaintenanceQuizQ1 = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(()=>{
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);


return <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_quiz" id="page">
        <Menu />
    <div className="defaultscreen">
        <LogoSmall />
        <div className="maintenancequiz_pagetitle">
            <PageTitle fontSize="40px" text="Maintenance Quiz" />
        </div>
        <div className="maintenance_question1">
            <PanelTitle text="Is it better to give" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="your puppy multiple" />
            <PanelTitle marginBottom="-0px" text="short walks or" />
            <PanelTitle text="one long one?" />
        </div>
        <div className="maintenance_answers1">
            <div onClick={clickRight} className="maintenance1_answer">
                <CustomButton fontSize="30px" color="#B7CfD2" text="multiple!" />
            </div>
            <div onClick={clickAnswer} className="maintenance1_answer">
                <CustomButton fontSize="30px" color="#Ef9B89" text="only 1!" />
            </div>
            <div onClick={clickAnswer} className="maintenance1_answer">
                <CustomButton fontSize="30px" color="#B7D4A0" text="doesn't matter" />
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >
}

export default MaintenanceQuizQ1;