import React from 'react';

interface FlowerDotsProps extends React.SVGProps<SVGSVGElement> {}

const FlowerDots: React.FC<FlowerDotsProps> = (props) => (
  <svg
    id='FlowerDots'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18.57 17.15'
    {...props}
  >
    <path d='M0,11.58c0-3.23,2.39-5.63,5.61-5.63,3.08,0,5.58,2.52,5.58,5.6,0,3.02-2.66,5.6-5.76,5.59C2.39,17.14,0,14.69,0,11.58Z' />
    <path d='M14.68,0c2.15,0,3.85,1.61,3.89,3.66.03,1.98-1.8,3.75-3.85,3.72-1.99-.02-3.75-1.75-3.75-3.68C10.97,1.71,12.69,0,14.68,0Z' />
  </svg>
);

export default FlowerDots;
