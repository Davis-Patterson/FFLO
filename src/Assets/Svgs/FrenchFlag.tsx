import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const FrenchFlag: React.FC<IconProps> = (props) => (
  <svg
    id='FrenchFlag'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 237.6 119.05'
    {...props}
  >
    <path
      d='M79.2,0v119.04c-26.4,0-52.8,0-79.2,0V0C26.4,0,52.8.01,79.2,0Z'
      fill='#002394'
    />
    <path
      d='M158.4,0v119.04c-26.4,0-52.8,0-79.2,0V0C105.6,0,132,0,158.4,0Z'
      fill='#fefefe'
    />
    <path
      d='M158.4,0C184.8.01,211.2,0,237.6,0v119.04c-26.4,0-52.8,0-79.2,0V0Z'
      fill='#ec2939'
    />
  </svg>
);

export default FrenchFlag;
