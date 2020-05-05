import React from 'react';
import './checkups_senior.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';
import Link from 'next/link';
import Router from 'next/router';

import BackDrop from '../../comps/backdrop';

function clickExit() {
    if (true) {
    Router.push("/health");
    }
}

const checkupsgif = require('../../animations/vet.gif');

const CheckupsSenior = ({backgroundColor}) => {
    return <div style={{ backgroundColor: backgroundColor }} >
        <div className="defaultscreen">
            <BackDrop />
            {/* <div className="transparencyScreen"> */}
                <div className="checkups_page">
                    <Health />
                </div>
                <div onClick={clickExit} className="checkups_infopanel">
                <Link href="/health"><InfoPanel img={checkupsgif} title="Check-Ups" color="#B0D0D3" info="Schedule regular visits with your veterinarian every 6 months.
Age-related diseases can be subtle, and symptoms may be easy to miss. Through regular exams and blood tests, your veterinarian can establish a baseline of what is normal for your pet. If you notice any changes in your pet’s behavior, appetite, or energy level, be sure to check with your veterinarian."/></Link>
                </div>
            </div>
        {/* </div> */}
    </div>
};

export default CheckupsSenior;