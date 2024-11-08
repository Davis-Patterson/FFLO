import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BulletPoint: React.FC<IconProps> = (props) => (
  <svg
    id='BulletPoint'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 445.68 445.11'
    {...props}
  >
    <path d='M213.52.22c171.52-7.48,286.88,175.91,205.52,327.86-77.59,144.92-282.24,157.99-377.57,23.82C-61.01,207.66,37.81,7.88,213.52.22Z' />
  </svg>
);

export default BulletPoint;
