import React from 'react';
import './checkups_senior.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

const CheckupsSenior = () => {
    return <div id="mainappinfoscreen">
        <div className="defaultscreen">
            <div className="transparencyScreen">
                <div className="checkups_page">
                    <Health />
                </div>
                <div className="checkups_infopanel">
                    <InfoPanel title="Check-Ups" color="#B0D0D3" info="Schedule regular visits with your veterinarian every 6 months.
Age-related diseases can be subtle, and symptoms may be easy to miss. Through regular exams and blood tests, your veterinarian can establish a baseline of what is normal for your pet. If you notice any changes in your pet’s behavior, appetite, or energy level, be sure to check with your veterinarian."/>
                </div>
            </div>
        </div>
    </div>
};

export default CheckupsSenior;