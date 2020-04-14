import React from 'react';
import './pagetitle.css';

const PageTitle = ({text, fontSize, color}) => <div 
className="page_title">
    <h1 style={{fontSize:fontSize, color:color}}>{text}</h1>
</div> 

PageTitle.defaultProps = {
    text:"Default Title",
    fontSize: "35pt",
    color: "#EF9B89",
}

export default PageTitle;