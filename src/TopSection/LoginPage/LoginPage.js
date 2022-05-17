import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTION_USER_AUTH } from '../../ducks/actions.js';
import userAuthSelector from '../../ducks/selectors.js';
import TopHeader from '../TopHeader/TopHeader';
import Button from '../../Components/Button/Button';
import './LoginPage.css';

function LoginPage() {

  const userData = useSelector(userAuthSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [loginValues, setLoginValues] = useState({
    email: 'user@mail.ru',
    password: 'password',
  });

  const handleChange = (e) => {
    setLoginValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const userAuth = (e) => {
    e.preventDefault();
    dispatch(ACTION_USER_AUTH(loginValues));
    navigate('/');
  };

  return (
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
                    <input className="sign-in_input" value={loginValues.email} onChange={handleChange} type="text" name="email" required />
                  </div>
                  <div className="sign-in_inputs">
                    <label className="sign-in_label" htmlFor="sign-in-input">Password </label>
                    <input className="sign-in_input" value={loginValues.password} onChange={handleChange} type="password" name="password" required />
                  </div>
                  <Button className="sign-in_button" text="Sign in" type="submit"/>
                </form>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
};

export default LoginPage;