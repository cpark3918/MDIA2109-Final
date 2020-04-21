import React from 'react';
import './pagetitle.css';

const PageTitle = ({text, fontSize, color, marginTop, marginBottom}) => <div 
className="page_title">
    <h1 style={{fontSize:fontSize, color:color, marginTop: marginTop, marginBottom: marginBottom}}>{text}</h1>
</div> 

PageTitle.defaultProps = {
    text:"Default Title",
    fontSize: 55,
    color: "#707070",
    marginBottom: "50px",
    marginTop: "80px"
}

export default PageTitle;