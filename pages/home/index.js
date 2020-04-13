import React from 'react';
import './home.css';
import LogoHome from '../../comps/logo_home';
import CustomButton from '../../comps/custombutton';
import BackToPrev from '../../comps/backtoprev'

const AboutIcon = require('../../cardIcons/about.png')

const Home = () => {
    return <div className="defaultscreen">
        <div className="home_contain">
            <LogoHome />
            <CustomButton text="Let's Start!" color="#B7D4A0" fontSize="20pt"/>
            <div className="tut_button">Tutorial</div>
            <div className="home_about">
                <BackToPrev text="About Us" img={AboutIcon}/>
            </div>
        </div>
    </div>
};

export default Home;