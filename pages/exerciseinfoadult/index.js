import React from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './exerciseinfoadult.css';
import Maintenance from '../maintenance';

const ExerciseInfoAdult = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="exerciseinfo">
    <div className="defaultscreen">
        <div className="exercise-info_logo">
            <LogoSmall />
        </div>
        <div className="exercise-info_page">
            <Maintenance />
        </div>
        <div className="exerciseinfoPanel">
            <InfoPanel title="Exercise" info="Once the dog reaches around 2-3 years old, owners can begin increasing the duration of their outdoor activities. At this point, the dogs body is well developped. Smaller dogs generally have less energy to exert and have a lower stamina. It is recommended that smaller breeds get an average of 45 minutes of exercise a day. They do not get all their exercise from roaming around indoor; therefore it is optimal for owners to find exercises that both them and their dog can enjoy together. Some exercises your dog might love include walking, training, playtime, and puzzles." />
        </div>
    </div>
</div>

export default ExerciseInfoAdult