import React from 'react';
import './backtoprev.css';

const BackToPrev = ({color, text}) => <div 
style={{backgroundColor:color}}
className="backtoprev">
    <div className="backtoprev_inner">
        {text}
    </div>
</div> 

BackToPrev.defaultProps = {
    text:"Back to previous page",
    color:"#00000",
}

export default BackToPrev;