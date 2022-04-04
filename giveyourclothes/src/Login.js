import React, {useState} from 'react';
import {Link} from "react-scroll";
import ornament from "./assets/Decoration.svg";

function Login() {
    const [email, setEmail]=useState("");
    const [emailError, setEmailError]=useState("");
    const [password, setPassword]=useState("");
    const [passwordError, setPasswordError]=useState("");

    const [successMsg, setSuccessMsg]=useState('');

    const handleEmailChange = (e) => {
        setSuccessMsg('');
        setEmailError('');
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setSuccessMsg('');
        setPasswordError("");
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(email!==''){
            const emailRegex= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(emailRegex.test(email)){

            }
            else {
                setEmailError('Niepoprawny Email')
            }
        }
        else{
            setEmailError('Niepoprawny Email');
        }

        if(password!==''){

        }

        else {
            setPasswordError('Password Required');
        }
    }

    return (
        <div name="Login" className="home_login">
            <div className="home_login_nav">
                <div className="home__right">
                    <nav>
                        <ul className="nav__logins">
                            <Link activeClass="active"
                                  to="Login"
                                  spy={true}
                                  smooth={true}
                                  offset={-100}
                                  duration={500}
                                  className="nav__logins__fonts">Zaloguj</Link>
                            <Link activeClass="active"
                                  to="rejestracja"
                                  spy={true}
                                  smooth={true}
                                  offset={-100}
                                  duration={500}
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
                </div>
            </div>
            {successMsg&&<div className="success-msg">Brawo Poprawny</div>}
            <div className="home_account" onSubmit={handleFormSubmit}>
                <h2 className="home_titles">Zaloguj się</h2>
                <img className="home_treecolumns--img"
                     src={ornament}
                     width="253"
                     height="33"
                ></img>
                <div className="home_form_account_log">
                    <div className="home_form-login">
                        <label className="name_log" for="name">Email</label>
                        <input className="input_log"
                               type="text"
                               id="name"
                               onChange={handleEmailChange}
                               value={email}
                        />
                        {emailError&&<div className="error-msg">{emailError}</div>}
                    </div>
                    <div className="home_form-hasło">
                        <label className="name_log"
                               for="name">Hasło</label>
                        <input className="input_log"
                               type="text"
                               id="name"
                               onChange={handlePasswordChange}
                               value={password}
                        />
                        {passwordError&&<div className="error-msg">{passwordError}</div>}
                    </div>
                </div>
                <div className="home_log_buttons">
                    <div className="home_log-send">
                        <input type="submit"
                               value="Załóż konto"
                        />
                    </div>
                    <div className="home_create-send">
                        <input type="submit"
                               value="Zaloguj się"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;