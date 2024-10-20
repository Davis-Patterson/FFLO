import React from 'react';

interface ListIconProps extends React.SVGProps<SVGSVGElement> {}

const ListIcon: React.FC<ListIconProps> = (props) => (
  <svg
    id='ListIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 42.44 35.41'
    {...props}
  >
    <path d='M21.26,28.3c5.8,0,11.59-.01,17.39,0,2.85,0,4.62,2.68,3.4,5.12-.7,1.39-1.92,1.98-3.43,1.98-3.2,0-6.4,0-9.59,0-6.91,0-13.83,0-20.74,0-1.56,0-3.12.03-4.68,0-1.68-.03-3.06-1.1-3.48-2.61-.41-1.48.24-3.14,1.57-3.95.66-.4,1.4-.54,2.18-.54,5.36,0,10.72,0,16.07,0,.44,0,.88,0,1.32,0Z' />
    <path d='M21.15,7.11c-5.8,0-11.59.01-17.39,0-2.46,0-4.13-1.95-3.69-4.22C.4,1.19,1.85.02,3.7,0c3.08-.02,6.15,0,9.23,0,8.39,0,16.79,0,25.18,0,.56,0,1.11,0,1.66.15,1.54.41,2.6,1.74,2.61,3.31.02,1.69-.97,3.03-2.55,3.49-.59.17-1.18.16-1.78.16-5.64,0-11.27,0-16.91,0h0Z' />
    <path d='M21.21,21.26c-5.52,0-11.03,0-16.55,0-.56,0-1.13.02-1.67-.08-1.89-.33-3.03-1.82-2.94-3.76.08-1.75,1.51-3.19,3.37-3.25,2.04-.07,4.08-.03,6.12-.03,9.31,0,18.63,0,27.94,0,.44,0,.88,0,1.32.01,2.17.08,3.64,1.56,3.61,3.64-.02,1.95-1.59,3.44-3.69,3.45-3.64.02-7.27,0-10.91,0-2.2,0-4.4,0-6.59,0Z' />
  </svg>
);

export default ListIcon;