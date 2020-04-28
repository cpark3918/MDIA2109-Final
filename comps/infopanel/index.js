import React from 'react';
import './infopanel.css';

const close = require('../infopanel/x.png');
const gif = require('../../animations/commands.gif');





const InfoPanel = ({ title, info, img, color }) => {
    return  <div style={{borderColor: color}}className="infopanel_contain">
        <img className="info_close" src={close} />
        <div className="infopanel_box">
        <img id="gif" src={img} />
             <h1 id="infopanelh1" style={{color: color}}>{title}</h1>
            <p id="infopanelp">{info}</p>
        </div>
    </div>
}

InfoPanel.defaultProps = {
    title: "Commands",
    info: "The earlier you start training your puppy, the easier it will be to learn tricks. Although there are many tricks that you can teach them, here are a few that all puppies should know: 1. Sit 2. Come 3. Stay 4. Off. It is also helpful to crate train your puppy. Their crate should be just large enough for them to stand up,make a complete turn, and lay back down comfortably. A properly sized crate encourages your dog to not mess up their sleeping area. With the use of positive reinforcement, it can become a safe haven for your dog when theyare nervous or tired. It is also a great way to keep your puppy out of any mischief.",
    img: {gif},
    color: "#B0D0D3"
}

export default InfoPanel;