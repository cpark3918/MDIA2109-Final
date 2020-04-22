import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenancequizq2.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';

function clickAnswer() {
    if (true) {
        Router.push("/maintenancequizq3");
    }
}


const MaintenanceQuizQ2 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_quiz">
    <div className="defaultscreen">
        <LogoSmall />
        <div className="maintenancequiz_pagetitle">
            <PageTitle fontSize="40px" text="Maintenance Quiz" />
        </div>
        <div className="maintenance_question2">
            <PanelTitle text="Will your dog" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="eat the same kind of food" />
            <PanelTitle text="throughout their life?" />
        </div>
        <div className="maintenance_answers2">
            <div onClick={clickAnswer} className="maintenance2_answer">
                <Link href="/maintenancequizq3"><CustomButton fontSize="30px" color="#B7CfD2" text="Yes!" /></Link>
            </div>
            <div onClick={clickAnswer} className="maintenance2_answer">
                <Link href="/maintenancequizq3"><CustomButton fontSize="30px" color="#Ef9B89" text="No." /></Link>
            </div>
            <div onClick={clickAnswer} className="maintenance2_answer">
                <Link href="/maintenancequizq3"><CustomButton fontSize="30px" color="#B7D4A0" text="That's a thing?" /></Link>
            </div>
        </div>
    </div>
</div >

export default MaintenanceQuizQ2;