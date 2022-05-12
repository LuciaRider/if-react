import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTION_USER_AUTH } from '../../ducks/actions.js';
import TopHeader from '../TopHeader/TopHeader';
import Button from '../../Components/Button/Button';
import TopSection from '../../TopSection/TopSection';
import './LoginPage.css';

function LoginPage({ setSearchValue }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const database = [
  //   {
  //     email: "user@mail.ru",
  //     password: "password",
  //   },
  // ];

  const [loginValues, setLoginValues] = useState({
    email: "user@mail.ru",
    password: "password",
  });

  const errors = {
    mail: "invalid email",
    pass: "invalid password"
  };

  const handleChange = (e) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let { mail, pass } = document.forms[0];

  // const userData = database.find((user) => user.email === mail.value);

  const userData = loginValues.find((user) => user.email === mail.value)

  const userAuth = (e) => {
    e.preventDefault();
    dispatch(ACTION_USER_AUTH(loginValues));
    navigate('/');
  };

  if (userData) {
    if (userData.password !== pass.value) {
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    setErrorMessages({ name: "mail", message: errors.mail });
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <header>
      <div className="top-section_container">
        <TopHeader/>
          <div className="sign-in">
            <div className="login-form">
              <div className="form">
                <form onSubmit={userAuth}>
                  <p className="sign-in_title">Sign in</p>
                  <div className="sign-in_inputs">
                    <label className="sign-in_label" htmlFor="sign-in-input">Email address </label>
                    <input className="sign-in_input" value={loginValues.email} onChange={handleChange} type="text" name="mail" required />
                    {renderErrorMessage("mail")}
                  </div>
                  <div className="sign-in_inputs">
                    <label className="sign-in_label" htmlFor="sign-in-input">Password </label>
                    <input className="sign-in_input" value={loginValues.password} onChange={handleChange} type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                  </div>
                  <Button className="sign-in_button" text="Sign in" type="submit"/>
                </form>
              </div>
            </div>
          </div>
      </div>
    </header>
  );

  return (
    <> 
      {isSubmitted ? <TopSection setSearchValue={setSearchValue}/> : renderForm}
    </> 
  );
}

export default LoginPage;