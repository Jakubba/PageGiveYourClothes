import React from 'react';
import ornament from "./assets/Decoration.svg";
import { useState } from "react";

function HomeWhoHelp() {
    const dataFund = [
        {
            name: "Fundacja “Dbam o Zdrowie”",
            desc: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
        },
        {
            name:"Fundacja “Dla dzieci”",
            desc: "Cel i misja: Pomoc dzieciom z ubogich rodzin."
        },
        {
            name:"Fundacja “Bez domu”",
            desc: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
        },
        {
            name:"Fundacja “Lorem Ipsum 1”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Fundacja “Lorem Ipsum 2”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Fundacja “Lorem Ipsum 3”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Fundacja “Lorem Ipsum 4”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Fundacja “Lorem Ipsum 5”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Fundacja “Lorem Ipsum 6”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
    ]
    const dataOrgan = [
        {
            name:"Organizacja ”Lorem Ipsum 1”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Organizacja ”Lorem Ipsum 2”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Organizacja ”Lorem Ipsum 3”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        }, {
            name:"Organizacja ”Lorem Ipsum 4”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Organizacja ”Lorem Ipsum 5”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Organizacja ”Lorem Ipsum 6”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
    ]
    const dataZbior = [
        {
            name:"Zbiórka ”Lorem Ipsum 1”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Zbiórka ”Lorem Ipsum 2”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
        {
            name:"Zbiórka ”Lorem Ipsum 3”",
            desc:"Quis vgarius quam quisque id diam vel quam elementum pulvinar."
        },
    ]

    const [page, setPage] = useState(1);
    const [bookmark, setBookmark] = useState(1);

    return (
        <div name="Fundacja_i_organizacja" className="home_whoHelp">
            <h2 className="home_titles">Komu pomagamy?</h2>
            <img className="home_treecolumns--img" src={ornament} width="253" height="33" ></img>
            <div className="home_whoHelp-btn">
                <button  onClick={() => setBookmark(1)} className="home_whoHelp-btn-button">Fundacjom</button>
                <button  onClick={() => setBookmark(2)} className="home_whoHelp-btn-button">Organizacjom <br />pozarządowym</button>
                <button  onClick={() => setBookmark(3)} className="home_whoHelp-btn-button">Lokalnym <br />zbiórkom</button>
            </div>
            {bookmark === 1 &&
                dataFund.slice(page * 3 - 3, page * 3 ).map((element) => {
                    return (
                        <div className="home_whoHelp-list">
                            <div className="home_whoHelp-list-organ" key={element.name}>
                                <p className="home_whoHelp-list-organ-name">{element.name}</p>
                                <span className="home_whoHelp-list-organ-aim">{element.desc}</span>
                            </div>
                        </div>

                    );
                })}
            {bookmark === 2 &&
                dataOrgan.slice(page * 3 - 3, page * 3 ).map((element) => {
                    return (
                        <div className="home_whoHelp-list">
                            <div className="home_whoHelp-list-organ" key={element.name}>
                                <p className="home_whoHelp-list-organ-name">{element.name}</p>
                                <span className="home_whoHelp-list-organ-aim">{element.desc}</span>
                            </div>
                        </div>
                    );
                })}
            {bookmark === 3 &&
                dataZbior.map((element) => {
                    return (
                        <div className="home_whoHelp-list">
                            <div className="home_whoHelp-list-organ" key={element.name}>
                                <p className="home_whoHelp-list-organ-name">{element.name}</p>
                                <span className="home_whoHelp-list-organ-aim">{element.desc}</span>
                            </div>
                        </div>
                    );
                })}
            {bookmark === 1 && (
            <div className="home_whoHelp-btn-sm">
                <button onClick={() => setPage(1)} className="home_whoHelp-btn-button-sm">1</button>
                <button onClick={() => setPage(2)} className="home_whoHelp-btn-button-sm">2</button>
                <button onClick={() => setPage(3)} className="home_whoHelp-btn-button-sm">3</button>
            </div>
            )}
            {bookmark === 2 && (
                <div className="home_whoHelp-btn-sm">
                    <button onClick={() => setPage(1)} className="home_whoHelp-btn-button-sm">1</button>
                    <button onClick={() => setPage(2)} className="home_whoHelp-btn-button-sm">2</button>
                </div>
            )}
            <p className="home_whoHelp-desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br />
                którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br />
                komu pomagają i czego potrzebują.</p>
        </div>
    );
}

export default HomeWhoHelp;