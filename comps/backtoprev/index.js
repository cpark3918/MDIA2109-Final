import React from 'react';
import './backtoprev.css';

const backIcon = require('./backicon.png');

const BackToPrev = ({color, text, img}) => <div 
style={{backgroundColor:color}}
className="backtoprev">
    <img className="backicon" src={img}></img>
    <div className="backtoprev_inner">
        {text}
    </div>
</div> 

BackToPrev.defaultProps = {
    text:"Back to previous page",
    color:"#00000",
    img:backIcon,
}

export default BackToPrev;