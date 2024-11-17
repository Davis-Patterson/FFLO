import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BookmarkedIcon: React.FC<IconProps> = (props) => (
  <svg
    id='BookmarkedIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 92.18 112.73'
    {...props}
  >
    <path d='M14.6.07l62.57-.07c7.92.36,14.29,6.37,15.01,14.27v93.62c-.33,3.66-3.91,5.83-7.27,4.37l-38.74-24.13L7.27,112.25c-3.37,1.49-6.94-.72-7.27-4.37L.04,13.83C.92,6.32,7.04.5,14.6.07Z' />
  </svg>
);

export default BookmarkedIcon;
