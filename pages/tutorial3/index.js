import Router from 'next/router';
import React, { useEffect } from 'react';
import './tutorial3.css';
import LogoSmall from '../../comps/logo_small';
import Menu from '../../comps/menu'
import InfoPanel from '../../comps/infopanel';
import PageTitle from '../../comps/pagetitle';

function nextTutorial() {
    document.querySelector("#page").style.left = "-100%";
    setTimeout(function () {
        Router.push("/tutorial4");
    }, 600)
}

const Tutorial03 = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector("#page").style.left = "0%";
        }, 50);
    }, []);

    return <div className="defaultscreen">
        <div className="tut">
            <div className="tut_icons">
                <LogoSmall />
                <PageTitle text="Tutorial" color="#000" fontSize="35pt" />
            </div>
            <Menu />
            <div id="page">
                <div className="tut_box" id="tut3_box" onClick={nextTutorial}>
                    <div id="tut_infopanel">
                        <PageTitle text="Information" color="#B0D0D3" fontSize="30pt" marginTop={30} marginBottom={0} />
                        <p>"You will be quizzed after you have opened all panels (i.e. Commands). So make sure to read the content carefully! </p>
                    </div>
                    <p>If you read the above, you should<br></br>know what to expect next...</p>
                </div>
                <div className="progress_box">
                    <div className="progress_inactive"></div>
                    <div className="progress_inactive"></div>
                    <div className="progress_active"></div>
                    <div className="progress_inactive" onClick={nextTutorial}></div>
                    <div className="progress_inactive"></div>
                </div>
            </div>
        </div>
    </div>
};

export default Tutorial03;