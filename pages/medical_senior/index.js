import React from 'react';
import './medical_senior.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

const MedicalSenior = () => {
    return <div className="defaultscreen">
        <div className="medical_page">
            <Health />
        </div>
        <div className="medical_infopanel">
            <InfoPanel title="Medical Care" color="#EF9B89" info="Booster shots for Rabies every 3 years still apply, but talk to your vet for more detailed vaccination program for your dog
Some common warning signs of disease in older pets:
a) Kidney disease: decreased appetite, increased thirst and urination, poor hair coat, vomiting and sore mouth
b) Urinary tract disease: increased urination / spotting or accidents in the house, straining to urinate, blood in urine, and weeakness
c) Heart disease: coughing, difficulty breathing, decreased tolerance of exercise and appetite, and vomiting."/>
        </div>
    </div>
};

export default MedicalSenior;