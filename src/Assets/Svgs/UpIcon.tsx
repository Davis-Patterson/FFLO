import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const UpIcon: React.FC<IconProps> = (props) => (
  <svg
    id='UpIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 91.83 57.18'
    {...props}
  >
    <path d='M43.99.13c2.85-.39,5.8.03,8.08,1.86l37.83,37.86c2.45,3.23,2.66,7.63.13,10.87-3.78,4.85-9.38,9.03-15.3,4.54l-28.68-28.59-.45.21-28.01,28.05c-3.11,2.77-7.88,2.97-11.15.36-4.99-3.99-9.11-9.53-4.3-15.57L39.73,2.1c1.13-.91,2.81-1.78,4.26-1.97Z' />
  </svg>
);

export default UpIcon;
