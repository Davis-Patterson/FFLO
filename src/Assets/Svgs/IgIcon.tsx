import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const IgIcon: React.FC<IconProps> = (props) => (
  <svg
    id='IgIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 102.63 102.61'
    {...props}
  >
    <path d='M32.84.37c11.56-.47,24.79-.5,36.35-.08,21.7.78,31.81,9.63,32.92,31.52.6,11.84.67,25.25.26,37.13-.75,21.81-9.45,32.04-31.52,33.15-11.84.6-25.25.67-37.13.26C11.05,101.57,1.12,91.92.31,69.18-.1,57.83-.1,44.82.31,33.47,1.1,11.28,10.54,1.29,32.84.37ZM36.68,9.48c-16.66.51-25.8,3.01-27.03,21.6-.82,12.34-.82,28.39.01,40.73,1.26,18.69,11.07,20.99,27.65,21.45,10.93.31,23.67.48,34.5-.25,18.84-1.27,21-11.25,21.45-27.89.3-10.87.47-23.5-.25-34.26-1.26-18.69-11.09-20.99-27.65-21.45-9.32-.26-19.36-.21-28.68.08Z' />
    <path d='M51.05,25.03c19.98-.24,32.87,21.35,23.32,38.91-10.27,18.89-38.12,17.82-46.96-1.75-7.78-17.24,4.78-36.93,23.64-37.16ZM49.37,34.39c-21.57,2.22-19.01,35.75,3.52,33.94,22.06-1.77,19.58-36.32-3.52-33.94Z' />
    <path d='M83.11,19.79c5.58,5.87-3.61,14.63-9.14,8.3s3.76-13.96,9.14-8.3Z' />
  </svg>
);

export default IgIcon;
