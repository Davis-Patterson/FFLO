import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const SidebarOpen: React.FC<IconProps> = (props) => (
  <svg
    id='SidebarOpen'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 110.57 110.79'
    {...props}
  >
    <path d='M36.84.22c13.43-.57,27.11.13,40.51.17,7.17.79,14.57,2.28,20.49,6.63,8.67,6.36,11.49,16.04,12.27,26.37,1.12,14.87-.17,30.88-.03,45.84-2.36,21.92-14.63,30-35.63,31.09-12.27.64-26.12.64-38.39,0-10.63-.55-20.51-2.4-27.85-10.79-5.6-6.4-7.28-15.14-7.81-23.39-.91-14.36.02-29.51.03-43.92.56-4.09,1.18-8.14,2.62-12.02C8.65,5.12,21.94.85,36.84.22ZM43.86,102.64h30.13c9.39-.64,19.27-2.29,24.4-11.12,3.51-6.06,3.76-12.48,4.03-19.25.45-11.18.45-22.65,0-33.83-.24-5.93-.37-11.09-2.75-16.69-4.65-10.92-15.1-13.04-25.91-13.69h-29.89v94.57ZM35.94,8.32c-4.33.02-8.95.71-13.03,2.21-10.9,4.03-13.81,13.05-14.59,23.81.09,13.45-.9,27.35-.24,40.83.32,6.56,2.04,14.67,6.49,19.67s12.62,7.19,18.83,7.57c.84.05,1.69-.05,2.53,0V8.32Z' />
    <path d='M63.48,38.13c1.21-.11,2.54.48,3.42,1.27,3.79,4.46,9.35,8.49,12.95,12.97,1.54,1.92,1.52,4.27-.11,6.13-4.46,3.79-8.49,9.35-12.97,12.95-3.71,2.99-8.46-.31-6.72-4.8l10.91-11.38-10.84-11.01c-1.24-2.8.21-5.84,3.36-6.12Z' />
  </svg>
);

export default SidebarOpen;