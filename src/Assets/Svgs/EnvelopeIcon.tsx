import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const EnvelopeIcon: React.FC<IconProps> = (props) => (
  <svg
    id='EnvelopeIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 126.63 79.98'
    {...props}
  >
    <path d='M8.62.07l108.72-.07c4.53.47,7.97,3.69,8.92,8.08.49,21.22.49,42.59,0,63.81-.95,4.4-4.4,7.61-8.92,8.08H9.27c-4.4-.45-7.93-3.6-8.87-7.9C-.4,51.59.28,30.96.05,10.42.41,5.09,3.22,1.12,8.62.07ZM112.18,7.43H14.43l46.12,38.54c2.47,1.87,3.03,1.87,5.5,0L112.18,7.43ZM7.72,69.19l38.33-25.48L7.72,11.74v57.45ZM118.89,69.19V11.74l-38.33,31.98,38.33,25.48ZM16.59,72.54h93.44l-35.81-23.47c-2.42,1.69-4.47,4.11-7.37,5.11-5.89,2.02-10.03-1.14-14.08-4.98l-.79-.08-35.39,23.42Z' />
  </svg>
);

export default EnvelopeIcon;
