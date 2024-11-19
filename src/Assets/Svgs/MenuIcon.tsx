import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const MenuIcon: React.FC<IconProps> = (props) => (
  <svg
    id='MenuIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 42.51 30.33'
    {...props}
  >
    <rect width='42.51' height='5.97' />
    <rect y='8.12' width='42.51' height='5.97' />
    <rect y='16.24' width='42.51' height='5.97' />
    <rect y='24.36' width='42.51' height='5.97' />
  </svg>
);

export default MenuIcon;
