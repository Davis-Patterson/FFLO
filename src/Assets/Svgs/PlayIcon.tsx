import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const PlayIcon: React.FC<IconProps> = (props) => (
  <svg
    id='PlayIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 51.8 61.22'
    {...props}
  >
    <path d='M0,0c17.29,10.28,34.42,20.46,51.8,30.79C34.46,40.98,17.3,51.06,0,61.22V0Z' />
  </svg>
);

export default PlayIcon;
