import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect}  from 'react';
import './maintenancequizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';
import Menu from '../../comps/menu';
import BackToPrev from '../../comps/backtoprev';

import { data, ChangeData } from '../../data';

console.log(data);


function clickResults() {
    document.querySelector(".maintenance_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/maintenancequizseniorresults");
    }, 600)
}

function clickBack() {
    if (true) {
        Router.push("/maintenancequizseniorq2");
    }
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    document.querySelector(".maintenance_quiz").style.left = "-100%";
    setTimeout(function(){
        Router.push("/maintenancequizseniorresults");
    }, 600)
}



const MaintenanceQuizSeniorQ3 = ({ backgroundColor }) => {

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
        <div className="maintenance_question3">
            <PanelTitle text="What do senior" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="dogs generally need" />
            <PanelTitle marginBottom="55px" text="to eat more of?" />
        </div>
        <div className="maintenance_answers3">
            <div onClick={clickRight} className="maintenance3_answer">
                <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#B7CfD2" text="Protein" /></Link>
            </div>
            <div onClick={clickResults} className="maintenance3_answer">
                <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#Ef9B89" text="Grass" /></Link>
            </div>
            <div onClick={clickResults} className="maintenance3_answer">
                <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#B7D4A0" text="Milk" /></Link>
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >
}

export default MaintenanceQuizSeniorQ3;