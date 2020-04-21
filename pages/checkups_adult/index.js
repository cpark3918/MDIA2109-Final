import React from 'react';
import './checkups_adult.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

const CheckupsAdult = () => {
    return <div id="mainappinfoscreen">
        <div className="defaultscreen">
            <div className="transparencyScreen">
                <div className="checkups_page">
                    <Health />
                </div>
                <div className="checkups_infopanel">
                    <InfoPanel title="Check-Ups" color="#B0D0D3" info="Annual physical exams through vet checkups is necessary to make sure that your dog is healthy. Depending on the conditions of your dog, these visits may occur more often. These routine visits cost between $700 and $1,500 per year. That includes the exam, any necessary lab tests and vaccines, and dental care." />
                </div>
            </div>
        </div>
    </div>
};

export default CheckupsAdult;