import React from 'react';
import './paneltitle.css';

const PanelTitle = ({text, color}) => <div 
className="panel_title">
    <h2 style={{color:color}}>{text}</h2>
</div> 

PanelTitle.defaultProps = {
    text:"Default Panel Title",
    color: "#B7D4A0",
}

export default PanelTitle;