import React from 'react';
import './checkups_puppy.css';
import InfoPanel from '../../comps/infopanel';
import Health from '../health';

const CheckupsPuppy = () => {
    return <div id="mainappinfoscreen">
        <div className="defaultscreen">
            <div className="transparencyScreen">
                <div className="checkups_page">
                    <Health />
                </div>
                <div className="checkups_infopanel">
                    <InfoPanel title="Check-Ups" color="#B0D0D3" info="Puppies need an exam from the vet when you first get them, even if you've adopted them from a shelter that says they are up-to-date with their vet visits and vaccinations. During this exam, vets will check your puppy's health and perform a fecal exam to test for parasites. They'll also make sure your puppy is at a healthy weight and that they're developing properly.
Annual vet bills cost $100-$300, not including preventative medication (i.e. flea, tick and heartworm preventatives. these range from $100-200 per year)."/>
                </div>
            </div>
        </div>
    </div>
};

export default CheckupsPuppy;