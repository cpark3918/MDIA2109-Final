import React from 'react';
import './cardpanel.css';

const puppyImg = require('../../cardIcons/adult.png');

const CardPanel = ({color, src}) => <div 
style={{backgroundColor:color}}
className="card_panel_box">
    <img className="card_panel_icon" src={src}></img>
</div> 

CardPanel.defaultProps = {
    color:"#B7CFD2",
    src:puppyImg,
}

export default CardPanel;