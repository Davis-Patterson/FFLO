import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const HistoryIcon: React.FC<IconProps> = (props) => (
  <svg
    id='HistoryIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 491.18 446.57'
    {...props}
  >
    <path d='M89.77,213.35c2.78-2.23,4.95-5.21,7.8-7.43,21.59-16.84,48.88,11.59,30.46,32.62l-46.29,46.3c-8.64,7.43-21.22,7.29-29.75-.25-14.28-15.57-31.5-29.73-45.47-45.44-19.24-21.64,8.15-49.79,29.63-33.46,2.93,2.23,5.29,5.68,8.04,7.79.24.18.3.47.72.36,1.85-49.69,21.15-98.23,53.37-135.77C178.73-15.67,320.42-26.77,414.1,54.43c93.79,81.3,103.44,223.85,20.99,317-81.81,92.42-224.33,100.9-316.29,18.11-4.54-4.09-11.24-9.85-13.55-15.48-5.03-12.28,1.61-26.59,14.46-30.15,15.91-4.41,23.49,7.92,34,16.72,66.1,55.34,163.55,54.92,229.32-.72,84.1-71.15,84.65-199.69,1.57-271.89-54.33-47.22-132.59-56.54-197.03-24.31-56.19,28.1-95.07,86.49-97.78,149.65Z' />
    <path d='M268,223.18h88.65c28.69,1.39,30.95,39.22,3.8,44.59-38.42.63-76.92.08-115.37.28-11.42-.66-20.29-8.64-21.7-20.04v-116.33c3.58-27.36,43.04-26.36,44.62,1.91v89.6Z' />
  </svg>
);

export default HistoryIcon;