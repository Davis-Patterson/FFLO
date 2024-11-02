import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronRight: React.FC<IconProps> = (props) => (
  <svg
    id='ChevronRight'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 103.17 177.75'
    {...props}
  >
    <path d='M43.33,154.26c-7.09,5.95-13.29,14.27-20.31,20.13-12.65,10.55-30.35-5.94-19.81-18.85,18.44-18.58,37.2-37.09,55.69-55.43,3.69-3.66,7.47-7.33,10.92-11.17,0-.67-1.81-1.78-2.29-2.27C45.92,64.96,23.99,43.32,2.46,21.41-6.51,8.25,11.42-7.26,23.26,3.74l77.16,76.92c3.77,4.94,3.63,11.99-.24,16.81l-56.85,56.79Z' />
  </svg>
);

export default ChevronRight;
