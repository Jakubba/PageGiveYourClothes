import React, {useState} from 'react';
import ornament from "../src/assets/Decoration.svg"
import "./scss/settings/_home.scss"
import { Link } from 'react-scroll';

const HomeRightSide = () => {

    return (
        <div className="home__right">
            <nav>
                <ul className="nav__logins">
                    <Link
                        to="/"
                        className="nav__logins__fonts">Zaloguj</Link>
                    <Link
                          className="nav__logins__fonts">Załóż konto</Link>
                </ul>
                <ul className="nav__links">
                    <Link activeClass="active"
                          to="Start"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}className="nav__links__fonts">Start</Link>
                    <Link activeClass="active"
                          to="O_co_chodzi"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className="nav__links__fonts">O co chodzi?</Link>
                    <Link activeClass="active"
                          to="O_nas"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className="nav__links__fonts">O nas</Link>
                    <Link activeClass="active"
                          to="Fundacja_i_organizacja"
                          spy={true}
                          smooth={true}
                          offset={-30}
                          duration={500}
                          className="nav__links__fonts">Fundacja i organizajca</Link>
                    <Link activeClass="active"
                          to="Kontakt"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="nav__links__fonts">Kontakt</Link>
                </ul>
            </nav>
            <div className="home_treecolumns">
                <h1 className="home_treecolumns--titlle">Zacznij pomagać!<br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img className="home_treecolumns--img" src={ornament} width="100" height="50" />
                <div className="home_treecolumns--button">
                    <button>ODDAJ RZECZY</button>
                    <button>ZORGANIZUJ ZBIÓRKĘ</button>
                </div>

            </div>
        </div>

    );
}

export default HomeRightSide;