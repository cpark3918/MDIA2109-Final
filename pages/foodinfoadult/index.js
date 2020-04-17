import React from 'react';
import InfoPanel from '../../comps/infopanel';
import LogoSmall from '../../comps/logo_small';
import './foodinfoadult.css';
import Maintenance from '../maintenance';

const FoodInfoAdult = ({ backgroundColor}) => <div
    style={{ backgroundColor: backgroundColor }}
    className="foodinfo">
    <div className="defaultscreen">
        {/* <div className="food-info_logo">
            <LogoSmall />
        </div> */}
        <div className="food-info_page">
            <Maintenance />
        </div>
        <div className="foodinfoPanel">
            <InfoPanel title="Food" info="To determine how much food to feed your dog, you should start by knowing your dog’s estimated adult weight. Most large breed dogs will weigh between 50 to 150 pounds, while small breeds weigh under 20 pounds. Small dogs have higher energy requirements than large dogs and need a dense, nutrient-rich food. Adult dogs mostly only require two meals a day. Sticking to a schedule can help your canine companion avoid grazing, feel like part of the family, and can encourage good mealtime behavior." />
        </div>
    </div>
</div>

export default FoodInfoAdult
