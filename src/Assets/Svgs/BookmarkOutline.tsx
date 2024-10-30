import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BookmarkOutline: React.FC<IconProps> = (props) => (
  <svg
    id='BookmarkOutline'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 92.18 112.74'
    {...props}
  >
    <path d='M14.11.07l63.55-.07c7.69.62,13.87,6.55,14.52,14.28v93.86c-.67,3.75-4.1,5.67-7.62,4l-38.39-24.02L7.62,112.14c-3.57,1.7-7.2-.34-7.62-4.24L.03,13.82C.9,6.48,6.75.76,14.11.07ZM81.85,98.17V14.29c0-.13-.69-1.56-.85-1.79-.93-1.32-2.44-2.1-4.06-2.18H15c-1.53.17-2.93.91-3.82,2.18-.16.23-.85,1.66-.85,1.79v83.88l34.08-21c1.26-.44,2.1-.44,3.37,0l34.08,21Z' />
  </svg>
);

export default BookmarkOutline;
