import React from 'react';
import './about.css';
import PanelTitle from '../../comps/paneltitle';
import BackToPrev from '../../comps/backtoprev';

const AboutIcon = require('../../cardIcons/about.png');
const DogImg1 = require('../../dogImages/dog1.jpg');

const About = () => {
    return <div className="defaultscreen">
        <div>
            <img className="dog_image" src={DogImg1} />
            <PanelTitle text="Adopt + Dog" color="#EF9B89" />
            <PanelTitle text="= Adogpt" color="#EF9B89" />
        </div>
    </div>
};

export default About;