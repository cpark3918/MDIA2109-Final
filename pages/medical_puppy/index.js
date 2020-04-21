import React from 'react';
import './medical_puppy.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

const MedicalPuppy = () => {
    return <div className="defaultscreen">
        <div className="medical_page">
            <Health />
        </div>
        <div className="medical_infopanel">
            <InfoPanel title="Medical Care" color="#EF9B89" info="All puppies should be immunized against parvovirus, distemper, rabies and hepatitis.

DHLPPC (combination of vaccines against distemper, hepatitis, leptospirosis, parainfluenze, parvo and corona virus)
1st shot: 6-8 weeks | 2nd: 9-11 weeks | 3rd: 12-14 weeks | 4th: 16-17 weeks

Rabies 1st shot: 16 weeks

Benefits of neutering (male) / Spaying (female) include being less likely to get certain diseases and becoming calmer
Any time between 8 weeks - 6 months; before the dog is sexually mature (**Ask your vet for their advise)"/>
        </div>
    </div>
};

export default MedicalPuppy;