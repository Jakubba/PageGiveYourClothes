import React from 'react';
import "./scss/settings/_home.scss"
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

function Home() {
    return (
        <div className="home_head">
            <HomeLeftSide/>
            <HomeRightSide/>
        </div>
    );
}

export default Home;