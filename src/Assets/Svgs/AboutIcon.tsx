import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const AboutIcon: React.FC<IconProps> = (props) => (
  <svg
    id='AboutIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 149.29 152.44'
    {...props}
  >
    <path d='M75.15,133.19c-6.65-.02-13.13.3-19.71-.79C20.12,126.52-4.23,93.14.61,57.58,4.29,30.59,25.12,7.92,51.65,1.92,61.62-.34,77.13-.22,87.5.35c24.41,1.35,47.23,18.21,56.57,40.54,14.14,33.81-1.52,71.66-34.28,86.79l-22.78,23.26c-3.96,2.86-9.47,1.56-11.27-3.12-.14-.35-.6-1.8-.6-2.03v-12.59ZM87.37,132.95l14.51-14.62c9.97-5.36,18.3-10.69,25-20.07,22.74-31.83,5.13-76.87-33-84.64-8.37-1.71-22.85-1.56-31.57-1.03-25.41,1.54-47.1,22.92-49.75,48.07-3.17,30.05,19.24,58.44,49.75,60.3,5.33.32,16.29-1.12,20.53,1.29,1.62.92,4.52,4.12,4.52,6.03v4.68Z' />
    <path d='M82.1,94.83h3.48c.07,0,1.07.59,1.19.73.05.06.85,1.22.86,1.3.3,2.57-.25,5.72-.02,8.36-.81.58-.72,1.42-1.91,1.73l-21.69.1c-1.09-.25-1.88-1.17-2.03-2.29-.22-1.67-.19-5.7-.03-7.42.09-1.01.55-1.89,1.55-2.28,1.63-.64,3.83.53,4.22-2.25l-.02-28.52c-.56-2.74-3.69-.97-4.43-3.72-.29-1.09-.24-6.53.05-7.64.35-1.33,1.07-1.78,2.38-1.94,3.23-.39,10.83-.34,14.13-.04.69.06,1.23.14,1.67.73l.11,41.13.49,2.03Z' />
    <path d='M71.01,27.28c7.85-1.08,13.31,6.95,9.22,13.77-3.2,5.33-10.95,5.58-14.8.8-4.17-5.19-1.13-13.65,5.58-14.57Z' />
  </svg>
);

export default AboutIcon;
