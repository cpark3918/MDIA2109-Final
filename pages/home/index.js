import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import './home.css';
import LogoHome from '../../comps/logo_home';
import CustomButton from '../../comps/custombutton';
import BackToPrev from '../../comps/backtoprev';

const AboutIcon = require('../../cardIcons/about.png')

function clickStart() {
    if (true) {
        Router.push("/dogsize")
    }
}

function startTutorial(){
    if (true) {
        Router.push("/tutorial1")
    }
}

function aboutUs(){
    if(true){
        Router.push('/about')
    }
}

const Home = () => {
    return <div className="defaultscreen">
        <div className="home_contain">
            <LogoHome />
            <div onClick={clickStart}>
                <CustomButton text="Let's Start!" color="#B7D4A0" fontSize="20pt" />
            </div>
            <div onClick={startTutorial} className="tut_button">Tutorial</div>
            <div onClick={aboutUs} className="home_about">
                <BackToPrev text="About Us" img={AboutIcon} />
            </div>
        </div>
    </div>
};

export default Home;