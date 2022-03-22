import React from 'react';
import HomeImage from "./assets/Hero_image.png";
import "./scss/settings/_home.scss"

function HomeLeftSide() {
    return (
        <img className="home__img--left" src={HomeImage} width="100" height="100"/>
    );
}

export default HomeLeftSide;