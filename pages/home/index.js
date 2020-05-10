import Link from 'next/link';
import Router from 'next/router';
import React, {useEffect} from 'react';
import './home.css';
import LogoHome from '../../comps/logo_home';
import CustomButton from '../../comps/custombutton';
import BackToPrev from '../../comps/backtoprev';

const AboutIcon = require('../../cardIcons/about.png')

function clickStart() {
    if (true) {
        Router.push("/lifestage")
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

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#home_logo").style.opacity = "1";
        }, 120);
        setTimeout(() => {
            document.querySelector("#home_start").style.opacity = "1";
        }, 700);
        setTimeout(() => {
            document.querySelector(".tut_button").style.opacity = "1";
        }, 1200);
        setTimeout(() => {
            document.querySelector(".home_about").style.opacity = "1";
        }, 1500);
    }, []);

    return <div className="defaultscreen">
        <div className="home_contain">
            <div id="home_logo">
                <LogoHome />
            </div>
            <div onClick={clickStart} id="home_start">
                <Link href="/lifestage"><CustomButton text="Let's Start!" color="#B7D4A0" fontSize="20pt" /></Link>
            </div>
            <div onClick={startTutorial} className="tut_button">Tutorial</div>
            <div onClick={aboutUs} className="home_about">
                {/* <BackToPrev text="About Us" img={AboutIcon} /> */}
                <img src={AboutIcon} />
                <p id="home_about_text">About Us</p>
            </div>
        </div>
    </div>
};

export default Home;