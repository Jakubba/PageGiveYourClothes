import React from 'react';
import ornament from "./assets/Decoration.svg";
import signature from "./assets/Signature.svg"

function HomeAboutUs() {
    return (
        <div name="O_nas" className="home_aboutUs">
            <div className="home_aboutUs_leftSide">
                <h2 className="home_aboutUs_titles">O nas</h2>
                <img className="home_aboutUs--img" src={ornament} width="253" height="33" />
                <p className="home_aboutUs_pr">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="home_aboutUs_signature" src={signature} width="209" height="149"/>
            </div>
            <div className="home_aboutUs_rightSide"></div>
        </div>
    );
}

export default HomeAboutUs;