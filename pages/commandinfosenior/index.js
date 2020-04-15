import React from 'react';
import Training from '../training';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './commandinfosenior.css';

const CommandInfoSenior = ({ backgroundColor}) => <div
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
            <InfoPanel info="Most people associate training with puppies, but the reality is that dogs are able to learn at any age. In fact, it is beneficial to continue training throughout its life to keep their mind active. Senior dogs may be experiencing blindness, deafness, joint pains, or general discomfort; always monitor their situation and adjust to their physical and mental abilities. Here are a few tips for training senior dogs: 1) be patient; when adopting a dog, you never know what their history is like, there might be certain sounds or environments that trigger them. 2) keep it positive: dogs don't understand scolding the way humans do. Always use positive reiforcement when training them. Using treats is a good way to motivate them but make sure you choose treats that are nutritious with age-related benefits. " />
        </div>
    </div>
</div>

export default CommandInfoSenior
