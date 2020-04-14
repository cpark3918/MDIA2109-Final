import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './commandinfo.css';

const CommandInfo = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="commandinfo">
    <div className="defaultscreen">
        <div className="command-info_logo">
            <LogoSmall />
        </div>
        <div className="command-info_page">
            <Training />
        </div>
        <div className="commandinfoPanel">
            <InfoPanel />
        </div>
    </div>
</div>

export default CommandInfo
