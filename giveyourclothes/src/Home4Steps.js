import React from 'react';
import ornament from "./assets/Decoration.svg";
import IconTshirt from "./assets/Icon-tshirt.png";
import IconBag from "./assets/Icon-bag.png";
import IconSearch from "./assets/Icon-search.png";
import IconArrows from "./assets/Icon-arrows.png";


function Home4Steps() {
    return (
        <div name="O_co_chodzi" className="home_4steps">
            <div className="home_4steps_box">
                <h2 className="home_titles">Wystarczą 4 proste kroki</h2>
                <img className="home_4steps--img" src={ornament} width="253" height="33" />
                <div className="home_4steps_steps">
                    <section className="home_4steps_steps-smallBox">
                        <img className="home_4steps--icon1" src={IconTshirt} width="83" height="83"/>
                        <p className="home_4steps_pr">Wybierz rzeczy</p>
                        <p className="home_4steps_pr2">ubrania,zabawki<br />sprzęt i inne</p>
                    </section>
                    <section className="home_4steps_steps-smallBox">
                        <img className="home_4steps--icon1" src={IconBag} width="83" height="83"/>
                        <p className="home_4steps_pr">Spakuj je</p>
                        <p className="home_4steps_pr2">skorzystaj z<br />worków na śmieci</p>
                    </section>
                    <section className="home_4steps_steps-smallBox">
                        <img className="home_4steps--icon1" src={IconSearch} width="83" height="83"/>
                        <p className="home_4steps_pr">Zdecyduj komu <br /> chcesz pomoc</p>
                        <p className="home_4steps_pr2">wybierz zaufane<br />miejsce</p>
                    </section>
                    <section className="home_4steps_steps-smallBox">
                        <img className="home_4steps--icon1" src={IconArrows} width="83" height="83"/>
                        <p className="home_4steps_pr">Zamów kuriera</p>
                        <p className="home_4steps_pr2">kurier przyjedzie<br />w dogodnym terminie</p>
                    </section>
                </div>
                <div className="home_treecolumns--button">
                    <button>ODDAJ RZECZY</button>
                </div>
            </div>

        </div>

    );
}

export default Home4Steps;