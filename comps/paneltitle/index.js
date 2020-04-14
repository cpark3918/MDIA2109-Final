import React from 'react';
import './paneltitle.css';

const PanelTitle = ({text, color, fontSize}) => <div 
className="panel_title">
    <h2 style={{color:color, fontSize: fontSize}}>{text}</h2>
</div> 

PanelTitle.defaultProps = {
    text:"Default Panel Title",
    color: "#B7D4A0",
    fontSize: "25pt"
}

export default PanelTitle;