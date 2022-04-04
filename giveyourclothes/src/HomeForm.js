import React, {useState} from 'react';
import facebook from "./assets/Facebook.png"
import istagram from "./assets/Instagram.png";
import ornament from "./assets/Decoration.svg";

function HomeForm() {
        const [info, setInfo] = useState(null);
        const [error, setError] = useState(null);
        const sendForm = (e) => {
            e.preventDefault();
            console.log(e.target.elements);

            const name = e.target.elements[0].value;
            const email = e.target.elements[1].value;
            const message = e.target.elements[2].value;

            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "error") {
                        setError(data);
                    } else {
                        setInfo(data.status);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        return (
        <>
        <div name="Kontakt"  className="home_form">
            <div className="home_form-leftSide"></div>
            <div className="home_form-rightSide">
                <form onSubmit={(e) => sendForm(e)} className="home_form_contact"  method="post">
                    <h2 className="home_titles">Skontaktuj się z nami</h2>
                    <img className="home_treecolumns--img" src={ornament} width="253" height="33" ></img>
                    <div className="home_form_simple">
                        <div className="home_form-name">
                            <label for="name">Wpisz swoje imię</label>
                            <input type="text" id="name" placeholder="Krzysztof"/>
                            <small className="error"></small>
                        </div>
                        <div className="home_form-email">
                            <label for="email">Wpisz swój email</label>
                            <input type="text" id="email" placeholder="abc@xyz.pl"/>
                            <small className="error"></small>
                        </div>
                    </div>
                    <div className="home_form-message">
                        <label for="message">Wpisz swoją wiadomość</label>
                        <textarea id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat." />
                        <small className="error"></small>
                    </div>
                    <div className="home_form-send">
                        <input type="submit" value="Wyślij"/>
                        <p id="success"></p>
                    </div>
                </form>
                {info && <div>{info}</div>}

                {error && (
                    <div>
                        {error.errors.map((element) => {
                            return <li>{element.msg}</li>;
                        })}
                    </div>
                )}
            </div>
        </div>
            <footer>
                <div/>
                <span  className="home_footer-text">Copyright by Coders Lab</span>
                <div className="home_footer-icon">
                    <img className="home_footer-img" src={facebook} width="30" height="30" ></img>
                    <img className="home_footer-img" src={istagram} width="30" height="30" ></img>
                </div>
            </footer>
        </>
    );
}

export default HomeForm;