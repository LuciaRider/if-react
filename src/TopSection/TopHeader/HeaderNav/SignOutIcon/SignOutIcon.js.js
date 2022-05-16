import React from 'react';

function SignOutIcon(props) {

  return (
    <svg className={props.className} viewBox={props.viewBox}>
      <g>
          <path d={props.path}/>
      </g>
    </svg>
  );
}

export default SignOutIcon;