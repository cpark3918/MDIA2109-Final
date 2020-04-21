import React from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './exerciseinfosenior.css';
import Maintenance from '../maintenance';

const ExerciseInfoSenior = ({ backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="exerciseinfo" id="mainappinfoscreen">
    <div className="defaultscreen">
    <div className="transparencyScreen">
        <div className="exercise-info_logo">
            <LogoSmall />
        </div>
        <div className="exercise-info_page">
            <Maintenance />
        </div>
        <div className="exerciseinfoPanel">
            <InfoPanel title="Exercise" info="As dogs age and enter their senior years, their energy levels begin to regress. However it remains equally important to properly exercise them every day. It is recommended to have frequent but short exercise periods. Owners should take into consideration that the speed and mobility of their dog has declined; they won't be able to handle the rigorous exercises that they once did before. At this age, your dogs hearing and sight may start to deteriorate. For this reason it is best to stay on familiar routes, as it will prevent them from becoming anxious, stressed, or confused. " />
        </div>
        </div>
    </div>
</div>

export default ExerciseInfoSenior