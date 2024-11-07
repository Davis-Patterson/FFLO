import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const GrassesIcon: React.FC<IconProps> = (props) => (
  <svg
    id='GrassesIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 184.94 401.28'
    {...props}
  >
    <path
      d='M107.6,298.55l3.11-18.71c2.06-8.95,6.46-20.21,12.95-26.87,5.67-5.81,8.49-1.41,11.67,3.7,25.82,41.48,14.01,110.54-20.75,144.1-.42.39-.92.43-1.45.49-2.73.29-13.44-3.81-16.56-5.08-31.79-12.97-64.13-40.8-75.07-74.14-2.53-7.7-5.32-21.06-4.07-28.98.9-5.67,11.42-4.13,15.35-3.41,15.54,2.82,26.1,15.45,36.91,25.69-1.77-9.85-4.42-19.62-5.68-29.57-1.31-10.33-3.59-31.61,9.42-35.54,11.49-3.47,18.23,7.2,22.59,16.01,5.07,10.24,8.3,21.4,11.59,32.31ZM56.53,358.27c15,14.77,33.57,26.05,53.73,32.38.41.04.66-.19.96-.42.68-.52,4.41-5.26,5.21-6.32,24.09-31.77,31.24-84.46,11.55-119.89-6.66,9.08-9.04,21.34-10.31,32.38-.91,7.93-.51,17.72-2.03,25.31-.66,3.26-3.83,4.55-6.74,3.12s-4.94-7.61-6.11-10.67c-6.21-16.29-9.29-33.98-19.36-48.77-2.79-4.09-6.88-10.02-9.65-2.32-5.55,15.46,5.53,42.34,7.42,58.76.48,4.2,1.83,12.23-4.55,12.23-2.71,0-6.95-4.54-8.89-6.47-11.67-11.6-22.58-27.58-40.77-28.56,1.62,23.11,13.38,43.32,29.53,59.23Z'
      fill='#119a95'
    />
    <path
      d='M83.93,126.17c-1.47,1.61-7.86,1.28-10.15,1.1C36.5,124.39-2.32,83.48.11,45.46c.67-10.52,3.74-12.1,12.82-7.02,14.5,8.12,23.66,22.35,34.7,34.15-.81-12.47-5.45-24.32-6.71-36.71-.43-4.27-.63-8.64.05-12.89,1.66-10.41,7.76-7.2,13.6-2.2,11.5,9.83,13.34,23.07,17.67,36.55.16.5.12,1.45.81,1.34-.11-13.82.07-28.02,3.98-41.36.99-3.38,5.61-15.58,8.62-16.8,6.54-2.65,8.44,5.78,10.08,10.3,11.95,32.86,13.12,75.39-7.61,104.92-.69.98-3.01,3.17-3.34,3.9-.59,1.3,1.31,4.17-.85,6.55ZM87.92,17.89c-.73-.77-.82.17-1,.67-7.34,20.17-2.62,42.97-5.29,63.8-.48,3.73-2.18,6.24-6.39,5.55-2.28-.38-3.64-3.64-4.52-5.56-7.59-16.58-7.29-37.64-19.98-51.98-1.04-.2-.73.48-.73,1.21.08,16.88,8.64,33.31,7.23,50.86-.43,5.34-2.98,9.69-8.66,6.23-11.69-11.67-20.72-27.58-34.1-37.38-.64-.47-4.24-3.25-4.74-2.69.55,29.05,24.65,56.79,51.44,65.86,2.75.93,10.84,3.6,13.11,2.29.75-.43,3.96-4.38,4.72-5.35,17.58-22.44,18.02-56.84,11.66-83.53-.31-1.29-2.39-9.6-2.74-9.98Z'
      fill='#119a95'
    />
    <path
      d='M173.19,227.89c-.79.62-1.93.38-2.72.88-2.08,1.32-.7,3.54-5.42,2.97-5.11-.62-13.77-3.82-18.84-5.62-24.41-8.69-48.76-23.35-56.12-49.91-1-3.61-3-11.99-1.95-15.38,2.11-6.78,15.22,1.28,18.75,3.37l17.02,11.52c-2.95-13.12-10.22-25.38-11.05-39.08-.65-10.71.89-16.77,12.17-9.77,10.9,6.76,18.91,18.7,24.87,29.82.56,1.04,1.67,4.46,1.84,4.64,1.34,1.45.9-3.57.96-4.07.97-8.89,2.58-18.26,6.15-26.48,5.81-13.4,10.07-10.45,16,.48,12.91,23.82,12.05,52.2,5.16,77.77-.78,2.88-5.25,17.63-6.81,18.85ZM127.58,141.36c-1.06-1.05-3.8-3.84-5.12-3.28,1.67,14.71,9.61,27.66,12.82,41.88.36,1.61,1.19,5.11,1.13,6.57-.15,3.67-4.36,6.2-7.55,4.17l-29.19-19.27c-.7-.11-.86-.05-.68.68,7.2,29.46,40.15,43.01,66.66,49.69,7.99-22.04,12.84-45.53,7.17-68.81-1.22-5.02-3.05-11.03-6.2-15.15-2.12,6.59-3.55,13.49-4.32,20.39-.62,5.55-.49,11.23-.97,16.78-.23,2.66-.49,10.93-2.69,12.19-2.33,1.34-5.9.67-7.31-1.7-2.38-3.98-4.53-12.43-6.7-17.28-4-8.92-10.07-19.98-17.04-26.86Z'
      fill='#119a95'
    />
  </svg>
);

export default GrassesIcon;