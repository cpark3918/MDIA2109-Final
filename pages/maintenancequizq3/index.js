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
    if (true) {
        Router.push("/maintenancequizresults");
    }
}

function clickBack() {
    if (true) {
        Router.push("/maintenancequizq2");
    }
}

function clickRight(){
    ChangeData({
        score:data.score+1
    })
    if (true) {
        Router.push("/maintenancequizresults");
    }
}



const MaintenanceQuizQ3 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_quiz">

            <Menu />

    <div className="defaultscreen">
        <LogoSmall />
        <div className="maintenancequiz_pagetitle">
            <PageTitle fontSize="40px" text="Maintenance Quiz" />
        </div>
        <div className="maintenance_question3">
            <PanelTitle text="How many times a day" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="should you feed" />
            <PanelTitle marginBottom="55px" text="your puppy?" />
        </div>
        <div className="maintenance_answers3">
            <div onClick={clickResults} className="maintenance3_answer">
                <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#B7CfD2" text="Once an hour" /></Link>
            </div>
            <div onClick={clickResults} className="maintenance3_answer">
                <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#Ef9B89" text="Whenever I eat" /></Link>
            </div>
            <div onClick={clickRight} className="maintenance3_answer">
                <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#B7D4A0" text="3-4 times a day" /></Link>
            </div>
        </div>
    </div>
    <div onClick={clickBack} id="backtoprev">
        <BackToPrev />
    </div>
</div >

export default MaintenanceQuizQ3;