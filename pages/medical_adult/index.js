import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import './medical_adult.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

import BackDrop from '../../comps/backdrop';

function clickQuiz() {
    if (true) {
    Router.push("/healthquizadultpopup");
    }
}

const medicalgif = require('../../animations/medical.gif');

const MedicalAdult = ({backgroundColor}) => {
    return <div style={{ backgroundColor: backgroundColor }}>
        <div className="defaultscreen">
            <BackDrop />
            {/* <div className="transparencyScreen"> */}
                <div className="medical_page">
                    <Health />
                </div>
                <div onClick={clickQuiz} className="medical_infopanel_adult">
                <Link href="/healthquizpopup"><InfoPanel img={medicalgif} title="Medical Care" color="#EF9B89" info="Booster shots for DHLPPC and rabies have to be administered after 12 months because the substances of the vaccination do not stay in your dog's body for a lifetime. This is to increase immunity against the antigen of rabies / other diseases.

After the first booster shot, the dog needs to be vaccinated for Rabies every 3 years."/></Link>
                </div>
            </div>
        {/* </div> */}
    </div>
};

export default MedicalAdult;