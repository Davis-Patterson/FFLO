import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const PauseIcon: React.FC<IconProps> = (props) => (
  <svg
    id='PauseIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 39.59 59.88'
    {...props}
  >
    <path d='M15.19,59.88H0V0h15.19v59.87Z' />
    <path d='M24.43,59.86V0h15.16v59.86h-15.16Z' />
  </svg>
);

export default PauseIcon;
