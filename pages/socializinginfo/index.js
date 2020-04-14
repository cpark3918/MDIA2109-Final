import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfo.css';

const SocializingInfo = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="commandinfo">
    <div className="defaultscreen">
        <div className="socializing-info_logo">
            <LogoSmall />
        </div>
        <div className="socializing-info_page">
            <Training />
        </div>
        <div className="socializinginfoPanel">
            <InfoPanel info="" />
        </div>
    </div>
</div>

export default SocializingInfo