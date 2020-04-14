import React from 'react';
import './paneltitle.css';

const PanelTitle = ({text, color, fontSize, marginTop, marginBottom}) => <div 
className="panel_title">
    <h2 style={{color:color, fontSize: fontSize, marginTop: marginTop, marginBottom: marginBottom}}>{text}</h2>
</div> 

PanelTitle.defaultProps = {
    text:"Default Panel Title",
    color: "#707070",
    fontSize: "25pt",
    marginBottom: "45px",
    marginTop: "35px"
}

export default PanelTitle;