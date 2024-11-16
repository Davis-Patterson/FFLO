import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const ToggleDot: React.FC<IconProps> = (props) => (
  <svg
    id='ToggleDot'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100.42 100.24'
    {...props}
  >
    <path d='M45.77.14c44.9-3.15,71.54,48.11,42.57,82.57-23.73,28.22-69.68,21.17-84.24-12.54C-9.35,39.05,11.8,2.53,45.77.14Z' />
  </svg>
);

export default ToggleDot;
