import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenancequizq3.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';


function clickResults() {
    if (true) {
    Router.push("/maintenancequizresults");
    }
}



const MaintenanceQuizQ3 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_quiz">
    <div className="defaultscreen">
        <div className="maintenance_logo">
            <LogoSmall />
        </div>
        <div className="maintenancequiz_pagetitle">
            <PageTitle fontSize="40px" text="Maintenance Quiz" />
        </div>
        <div className="maintenance_question3">
            <PanelTitle text="How many times a day" />
            <PanelTitle marginTop="-5px" marginBottom="55px" text=" should you feed your puppy?" />
        </div>
        <div className="maintenance_answers3">
            <div onClick={clickResults} className="maintenance3_answer">
            <Link href="/maintenancequizresults"><CustomButton fontSize="30px" color="#B7CfD2" text="Once an hour" /></Link>
            </div>
            <div onClick={clickResults} className="maintenance3_answer">
            <Link href="/maintenancequizresults"><CustomButton  fontSize="30px" color="#Ef9B89" text="Whenever I eat" /></Link>
            </div>
            <div onClick={clickResults} className="maintenance3_answer">
            <Link href="/maintenancequizresults"><CustomButton  fontSize="30px" color="#B7D4A0" text="3-4 times a day" /></Link>
            </div>
        </div>
    </div>
</div >

export default MaintenanceQuizQ3;