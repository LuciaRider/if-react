import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_USER_AUTH } from '../../../../ducks/actions.js';
import './SignOut.css';
import SignOutIcon from '../SignOutIcon/SignOutIcon.js';

function SignOut() {

  const dispatch = useDispatch();
  const userSignOut = () => {
    dispatch(ACTION_USER_AUTH(null));
  };

  return (
    <div className="sign_out" onClick={userSignOut}>
      <SignOutIcon className={"sign_out_icon"} viewBox={"0 0 20 18"} path={"M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"} />
      <p>Sign out</p>
    </div>
  );
  
}

export default SignOut;