import Router from 'next/router';
import React, { useEffect } from 'react';
import './about.css';
import PanelTitle from '../../comps/paneltitle';
import BackToPrev from '../../comps/backtoprev';
import PageTitle from '../../comps/pagetitle';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu';

const DogImg1 = require('../../dogImages/dog1.jpg');

function backToHome() {
    if (true) {
        Router.push('/home')
    }
}

const About = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".aboutpage").style.opacity = "1";
        }, 100);
    }, []);

    return <div className="defaultscreen">
        <div className="aboutpage">
            <LogoSmall />
            <div>
                <PageTitle text="About us" marginTop={0} />
            </div>
            <div id="about_menu">
                <Menu />
            </div>
            <img className="dog_image" src={DogImg1} />
            <PanelTitle fontSize={50} text="Adopt + Dog" marginTop="60px" color="#EF9B89" />
            <PanelTitle fontSize={60} text="= Adogpt" marginTop="20px" color="#B0D0D3" />
            <div className="aboutpage_description">
                <p>Adog’pt was created to bring social awareness on dog adoption. It is important to adopt and NOT "buy" a pet, not only because you will save money, but also because you will be saving a life. Our mission is to educate and inform those who are interested in adopting a dog, providing them with the necessary information they need before adopting. Our goal is to have every dog owner feel at ease with the knowledge they have before adopting a dog.</p>
            </div>
            <div onClick={backToHome} className="aboutpage_backhome">
                <BackToPrev text="Back to Home" />
            </div>
        </div>
    </div>
};

export default About;