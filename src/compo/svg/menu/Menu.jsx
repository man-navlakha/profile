import React from 'react';

const Menu = (props) => {
  return (
    <svg
      width="25"
      height="33"
      viewBox="0 0 25 33"
      fill="none"
      className="_wauiIcon__hamburgerMenuRebrand" // Changed 'class' to 'className'
      {...props}
    >
      <line
        x1="1.04297"
        y1="12.75"
        x2="23.543"
        y2="12.75"
        stroke="currentColor"
        strokeWidth="1.5" // Changed 'stroke-width' to 'strokeWidth'
        strokeLinecap="round" // Changed 'stroke-linecap' to 'strokeLinecap'
      />
      <line
        x1="1.04297"
        y1="16.75"
        x2="23.543"
        y2="16.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="1.04297"
        y1="20.75"
        x2="23.543"
        y2="20.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Menu;