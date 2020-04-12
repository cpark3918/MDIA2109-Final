import React from 'react';
import './custombutton.css';

const CustomButton = ({text, color, fontSize}) => <div 
style={{backgroundColor:color, fontSize: fontSize}}
className="custom_button_box">
    <div className="button_box_inner">
        {text}
    </div>
</div> 

CustomButton.defaultProps = {
    text:"Default button",
    color:"#B7CFD2",
    fontSize: "40pt"
}

export default CustomButton;