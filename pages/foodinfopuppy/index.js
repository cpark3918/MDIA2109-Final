import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './foodinfopuppy.css';
import Maintenance from '../maintenance';

import BackDrop from '../../comps/backdrop';

const foodgif = require('../../animations/food.gif');

function clickQuiz() {
    if (true) {
        Router.push("/maintenancequizpopup");
    }
}


const FoodInfoPuppy = ({ backgroundColor }) => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".foodinfoPanel").style.opacity = "1";
        }, 100);
    }, []);

    return <div
        style={{ backgroundColor: backgroundColor }}
        className="foodinfo">
        <div className="defaultscreen">
            <BackDrop />
            {/* <div className="transparencyScreen"> */}
            {/* <div className="food-info_logo">
            <LogoSmall />
        </div> */}
            <div className="food-info_page">
                <Maintenance />
            </div>
            <div onClick={clickQuiz} className="foodinfoPanel">
                <Link href="/maintenancequizpopup"><InfoPanel color="#ef9b89" img={foodgif} title="Food" info="It is important 
        to feed them food that is formulated for puppies, 
        it contains nutrients needed for them to develop.  
When bringing a puppy home, they should be fed 3 – 4 times per day. 
If their food is substituted with another food, this transition 
should take place gradually, over a period of several days, 
in order to avoid any digestive problems.
To train your pet to meal feed as a puppy, they should be 
fed at the same times every day as this creates a sense of security for the puppy. At about six months of age, you can cut feedings back to three times a day, and then cut back to twice or once a day." /></Link>
            </div>
        </div>
        {/* </div> */}
    </div>
};

export default FoodInfoPuppy;
