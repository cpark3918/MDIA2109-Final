import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './foodinfopuppy.css';
import Maintenance from '../maintenance';

function clickQuiz() {
    if (true) {
    Router.push("/maintenancequizpopup");
    }
}


const FoodInfoPuppy = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="foodinfo">
    <div className="defaultscreen">
        <div className="food-info_logo">
            <LogoSmall />
        </div>
        <div className="food-info_page">
            <Maintenance />
        </div>
        <div onClick={clickQuiz} className="foodinfoPanel">
        <Link href="/maintenancequizpopup"><InfoPanel title="Food" info="It is important to feed your puppy food that is specially formulated for puppies. Adult dog food lacks the nutrients puppies need to develop.  
When bringing the puppy home (usually at an age of 8 – 10 weeks), the puppy has to be fed 3 – 4 times per day. Moving to a new environment is always a big change and a cause of stress for a dog. If, for any reason, their food is substituted with another food, this transition should take place gradually, over a period of several days, in order to avoid any digestive problems.
To train your pet to meal feed as a puppy, they should be fed at the same times every day. Any other daily activities should also be routine-like, as this creates a sense of security for the puppy. At about six months of age, you can cut feedings back to three times a day, and then cut back to twice or once a day." /></Link>
        </div>
    </div>
</div>

export default FoodInfoPuppy
