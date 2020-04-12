import React from 'react';
import './cardpanel.css';

const puppyImg = require('../../cardIcons/puppy.png');

const CardPanel = ({color, img}) => <div 
style={{backgroundColor:color}}
className="card_panel_box">
    <img className="card_panel_icon" src={img}></img>
</div> 

CardPanel.defaultProps = {
    color:"#B7CFD2",
    img:puppyImg,
}

export default CardPanel;