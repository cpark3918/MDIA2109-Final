import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './socializinginfosenior.css';

const SocializingInfoSenior = ({ backgroundColor}) => <div
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
            <InfoPanel title="Socializing" info="Socializing a senior dog can be a bit challenging because they can be set in their ways. However, this should not be a reason to not socialize them, in fact, this should be an incentive to want to socialize them. Ensure to take it one step at a time; don't rush things. Dogs are never too old to enlist in dog classes, a great way to be in a monitored environment while exposing your dog to other dogs and people. You can also ask your vet for recommendations of trainers for your dog. Keep in mind that your dog is much smaller than most objects, people, and creatures that they will encounter and may be easily scared. " />
        </div>
    </div>
</div>

export default SocializingInfoSenior