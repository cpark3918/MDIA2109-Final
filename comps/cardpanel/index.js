import React from 'react';
import './cardpanel.css';

const puppyImg = require('../../cardIcons/puppy .png');

const CardPanel = ({color, text, img, fontSize}) => <div 
style={{backgroundColor:color}}
className="card_panel_box">
    <img className="card_panel_icon" src={img}></img>
</div> 

CardPanel.defaultProps = {
    text:"Card Panel Title",
    color:"#B7CFD2",
    img:puppyImg,
}

export default CardPanel;