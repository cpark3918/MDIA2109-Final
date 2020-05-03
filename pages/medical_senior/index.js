import React from 'react';
import './medical_senior.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';
import Link from 'next/link';
import Router from 'next/router';

function clickQuiz() {
    if (true) {
    Router.push("/healthquizpopup");
    }
}

const medicalgif = require('../../animations/medical.gif');

const MedicalSenior = ({backgroundColor}) => {
    return <div style={{ backgroundColor: backgroundColor }}>
        <div className="defaultscreen">
            <div className="transparencyScreen">
                <div className="medical_page">
                    <Health />
                </div>
                <div  onClick={clickQuiz} className="medical_infopanel">
                <Link href="/healthquizpopup"><InfoPanel img={medicalgif} title="Medical Care" color="#EF9B89" info="Booster shots for Rabies every 3 years still apply, but talk to your vet for more detailed vaccination program for your dog
Some common warning signs of disease in older pets:
a) Kidney disease: decreased appetite, increased thirst and urination, poor hair coat, vomiting and sore mouth
b) Urinary tract disease: increased urination / spotting or accidents in the house, straining to urinate, blood in urine, and weeakness
c) Heart disease: coughing, difficulty breathing, decreased tolerance of exercise and appetite, and vomiting."/></Link>
                </div>
            </div>
        </div>
    </div>
};

export default MedicalSenior;