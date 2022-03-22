import React from 'react';
import ornament from "../src/assets/Decoration.svg"
import "./scss/settings/_home.scss"

function HomeRightSide() {
    return (
        <div className="home__right">
            <nav>
                <ul className="nav__logins">
                    <li className="nav__logins__fonts">Zaloguj</li>
                    <li className="nav__logins__fonts">Załóż konto</li>
                </ul>
                <ul className="nav__links">
                    <li className="nav__links__fonts">Start</li>
                    <li className="nav__links__fonts">O co chodzi?</li>
                    <li className="nav__links__fonts">O nas</li>
                    <li className="nav__links__fonts">Fundacja i organizajca</li>
                    <li className="nav__links__fonts">Kontakt</li>
                </ul>
            </nav>
            <div className="home_treecolumns">
                <h1 className="home_treecolumns--titlle">Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="home_treecolumns--img" src={ornament} width="100" height="50" />
                <div className="home_treecolumns--button">
                    <button>ODDAJ <br /> RZECZY</button>
                    <button>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>

            </div>
        </div>

    );
}

export default HomeRightSide;