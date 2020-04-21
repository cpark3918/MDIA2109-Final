import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './maintenancequizq1.css';
import LogoSmall from '../../comps/logo_small';
import CustomButton from '../../comps/custombutton';
import PageTitle from '../../comps/pagetitle';
import PanelTitle from '../../comps/paneltitle';

function clickAnswer() {
    if (true) {
    Router.push("/maintenancequizq2");
    }
}

const MaintenanceQuizQ1 = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="maintenance_quiz">
    <div className="defaultscreen">
            <LogoSmall />
        <div className="maintenancequiz_pagetitle">
            <PageTitle fontSize="40px" text="Maintenance Quiz" />
        </div>
        <div className="maintenance_question1">
            <PanelTitle text="Is it better to give" />
            <PanelTitle marginTop="-5px" marginBottom="-5px" text="your puppy multiple short" />
            <PanelTitle text="walks or one long one?" />
        </div>
        <div className="maintenance_answers1">
            <div onClick={clickAnswer}  className="maintenance1_answer">
            <Link href="/maintenancequizq2"><CustomButton fontSize="30px" color="#B7CfD2" text="multiple!" /></Link>
            </div>
            <div onClick={clickAnswer}  className="maintenance1_answer">
            <Link href="/maintenancequizq2"><CustomButton  fontSize="30px" color="#Ef9B89" text="only 1!" /></Link>
            </div>
            <div onClick={clickAnswer}  className="maintenance1_answer">
            <Link href="/maintenancequizq2"><CustomButton  fontSize="30px" color="#B7D4A0" text="doesn't matter" /></Link>
            </div>
        </div>
    </div>
</div >

export default MaintenanceQuizQ1;