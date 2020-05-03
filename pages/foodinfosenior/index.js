import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './foodinfosenior.css';
import Maintenance from '../maintenance';


const foodgif = require('../../animations/food.gif');

function clickQuiz() {
    if (true) {
    Router.push("/maintenancequizpopup");
    }
}


const FoodInfoSenior = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="foodinfo">
    <div className="defaultscreen">
    <div className="transparencyScreen">
        {/* <div className="food-info_logo">
            <LogoSmall />
        </div> */}
        <div className="food-info_page">
            <Maintenance />
        </div>
        <div onClick={clickQuiz} className="foodinfoPanel">
        <Link href="/maintenancequizpopup"><InfoPanel img={foodgif} title="Food" info="Older dogs may require more protein in their diet: How much protein does a senior dog need? is a question vets get often and for good reason. The protein stores of a senior dog turn over more rapidly than in younger dogs, and like humans, dogs can start to lose muscle mass as they age. Extra protein supplies amino acids that help make up for that loss, and these keep aging pups stronger and more mobile. It is important to consult your veterinairan for a specific diet for your dog, keeping their diet up to date with any medical issues they may be experiencing it the best way to help them lead a long, healthy life" /></Link>
        </div>
        </div>
    </div>
</div>

export default FoodInfoSenior;