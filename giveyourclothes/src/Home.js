import React from 'react';
import "./scss/settings/_home.scss"
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";
import HomeYellowColumn from "./HomeYellowColumn";
import Home4Steps from "./Home4Steps";
import HomeAboutUs from "./HomeAboutUs";
import HomeWhoHelp from "./HomeWhoHelp";
import HomeForm from "./HomeForm";

function Home() {
    return (<div>
        <div className="home_head">
            <HomeLeftSide/>
            <HomeRightSide/>
        </div>
            <HomeYellowColumn/>
            <Home4Steps/>
            <HomeAboutUs/>
            <HomeWhoHelp/>
            <HomeForm/>
    </div>

    );
}

export default Home;