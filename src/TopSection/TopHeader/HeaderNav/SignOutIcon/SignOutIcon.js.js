import React from 'react';

function SignOutIcon({className, viewBox, path}) {

  return (
    <svg className={className} viewBox={viewBox}>
      <g>
          <path d={path}/>
      </g>
    </svg>
  );
}

export default SignOutIcon;