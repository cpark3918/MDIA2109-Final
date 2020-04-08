import React from 'react';
import './custombutton.css';

const CustomButton = ({text, color}) => <div 
style={{backgroundColor:color}}
className="custom_button_box">
    <div className="button_box_inner">
        {text}
    </div>
</div> 

CustomButton.defaultProps = {
    text:"Default button",
    color:"#B7CFD2",
}

export default CustomButton;