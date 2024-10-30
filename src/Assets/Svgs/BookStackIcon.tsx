import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BookStackIcon: React.FC<IconProps> = (props) => (
  <svg
    id='BookStackIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 122.96 95.95'
    {...props}
  >
    <path d='M113.98,57.73c.88.46,1.8.56,2.65.91.88.98.8,1.79-.23,2.57-.51.39-1.07.72-1.67.9-2.41.7-3.43,2.57-4.01,4.75-.48,1.81-.61,3.68-.49,5.56.06.86.17,1.73.26,2.58,2.92,1.11,6.08,1.61,8.59,3.62.02.24.03.44.04.59-.23.44-.65.56-1.01.64-3.76.91-7.53,1.79-11.3,2.69-4.07.98-8.14,1.97-12.2,2.96-5.06,1.24-10.12,2.49-15.18,3.72-2.5.61-5,1.16-7.5,1.77-4.22,1.02-8.44,2.05-12.66,3.08-2.57.63-5.14,1.25-7.74,1.89-5.19-1.68-10.41-3.38-15.63-5.08-6.38-2.07-12.76-4.15-19.15-6.22-3.45-1.12-6.92-2.19-10.36-3.36-1.26-.43-2.22-1.36-3.07-2.39-1.29-1.57-2.03-3.41-2.49-5.34-.65-2.68-.94-5.42-.7-8.17.26-2.98,1.12-5.75,3.33-7.94-1.08-.67-2.56-.28-3.45-1.4.29-.56.65-.88,1.12-1.15,1.41-.83,2.94-1.37,4.48-1.88,1.08-.36,2.19-.62,3.31-1.14.05-3.03.44-6.05-.66-8.99-.67-1.81-1.72-3.2-3.64-3.8-1.05-.33-1.97-.85-2.55-1.81-.25-.68.1-1.17.5-1.65,1.78-.54,3.58-1.09,5.44-1.66-2.45-2.47-3.41-5.52-3.9-8.81-.32-2.15-.35-4.31-.16-6.45.24-2.69,1.11-5.2,3.12-7.15,1.32-1.28,2.87-2.04,4.74-2.27,2.59-.31,5.17-.76,7.75-1.12,2.04-.28,4.09-.51,6.13-.79,1.96-.27,3.9-.67,5.87-.87,2.06-.2,4.08-.58,6.13-.82,2.04-.23,4.07-.6,6.11-.89,1.96-.27,3.93-.5,5.89-.77,2.04-.28,4.07-.62,6.1-.9,2.04-.28,4.09-.51,6.13-.79,1.96-.27,3.9-.67,5.86-.87,2.06-.2,4.08-.59,6.13-.81,1.57-.17,3.13-.44,4.72-.67,13.89,4.19,27.8,8.38,41.67,12.55.55.43.85.91.67,1.67-.49.89-1.35,1.49-2.35,1.78-2.38.7-3.47,2.44-4.11,4.66-.51,1.75-.5,3.53-.49,5.32,0,.95.07,1.91.11,2.86,1.02.54,2.07.76,3.08,1.08,1.59.51,3.13,1.1,4.6,1.89.5.27.92.6,1.16,1.14-.2.61-.7.73-1.21.85-1.73.41-3.45.83-5.21,1.25.02.35.23.57.41.81,1.04,1.31,1.62,2.82,1.88,4.43.66,4.1.43,8.17-.96,12.1-.75,2.12-1.9,4.01-3.9,5.33ZM112.86,17.74c-.36-.07-.72-.01-1.07.06-2.9.61-5.79,1.24-8.69,1.83-3.72.76-7.45,1.46-11.16,2.23-4.41.91-8.8,1.88-13.21,2.79-5.19,1.07-10.38,2.11-15.57,3.16-1.66.34-3.31.69-4.97,1.04-.11,4.06-.21,8.04-.33,12.02-.01.39,0,.78-.09,1.18-.09.41-.02.85-.02,1.43,6.08-1.48,12.08-3.01,18.08-4.49,6.02-1.47,12.02-2.99,18.03-4.49,6-1.5,12.01-2.99,18.04-4.5-.05-1.18-.26-2.23-.28-3.3-.06-2.95-.04-5.89,1.25-8.64.04-.09,0-.23,0-.35.11,0,.19,0,.15-.15-.14-.05-.15.05-.16.15ZM52.1,74.89c-.18-.13-.24-.2-.31-.22-3.38-1.1-6.76-2.18-10.14-3.28-7.65-2.5-15.3-5.01-22.95-7.51-3.38-1.1-6.76-2.17-10.14-3.28-.52-.17-1.01-.15-1.52-.03-1.26.29-1.92,1.22-2.39,2.3-.51,1.17-.61,2.45-.73,3.71-.14,1.48.08,2.95.24,4.4.16,1.41.52,2.8,1.23,4.06.69,1.22,1.64,2.09,3.06,2.46,3.7.98,7.38,2.02,11.07,3.05,3.46.97,6.91,1.96,10.37,2.93,5.13,1.44,10.26,2.87,15.39,4.3,2.08.58,4.16,1.15,6.27,1.73.04-.18.07-.3.08-.41.1-3.51.19-7.01.29-10.52.02-.56-.05-1.13.06-1.67.14-.68.07-1.34.11-2.02ZM55.71,28.67c-.37-.12-.67-.21-.97-.31-3.45-1.13-6.9-2.25-10.36-3.38-7.35-2.4-14.71-4.79-22.06-7.19-3.27-1.06-6.53-2.13-9.8-3.19-1.5-.48-2.7-.04-3.6,1.26-.83,1.18-1.08,2.55-1.17,3.93-.12,1.83-.11,3.66.21,5.48.2,1.17.48,2.33,1.02,3.39.73,1.43,1.7,2.6,3.45,2.78.11.01.22.08.33.11,4.49,1.25,8.98,2.48,13.46,3.74,7.18,2.01,14.36,4.04,21.54,6.07,2.46.69,4.92,1.38,7.39,2.08.26-1.41.68-12.78.54-14.77ZM67.76,66.48c1.94-.54,3.83-1.06,5.72-1.59,3.46-.98,6.9-1.98,10.36-2.95,5.63-1.57,11.26-3.1,16.89-4.68,3.42-.96,6.82-2,10.27-2.84.92-.22,1.68-.73,2.24-1.48.43-.57.79-1.19,1.05-1.86.8-2.03,1.02-4.15,1.01-6.3,0-1.67-.1-3.31-.71-4.91-.68-1.78-2.24-2.9-4.45-2.17-6.22,2.06-12.44,4.09-18.67,6.13-5.03,1.64-10.06,3.26-15.09,4.9-3.03.99-6.06,2-9.16,3.03.06,2.42.06,4.85.22,7.27.16,2.45-.05,4.92.32,7.46ZM11.15,53.06c18.05,4.49,36.04,8.97,54.02,13.45.31-.84,0-1.53-.03-2.23-.09-3.91-.19-7.82-.3-11.72,0-.23.08-.48-.16-.72-18.21-3.74-36.45-7.49-54.82-11.26,2.02,4.04,1.58,8.21,1.28,12.49ZM54,89.45c.49.08.73-.09,1-.16,6.09-1.52,12.19-3.05,18.29-4.56,7.63-1.88,15.26-3.75,22.88-5.63,3.79-.94,7.58-1.89,11.38-2.83.24-.06.45-.16.59-.45-.48-4.02-.65-8.08,1.13-11.93-.39-.21-.72-.11-1.01-.05-1.75.34-3.48.71-5.23,1.07-2.52.52-5.03,1.03-7.55,1.55-2.94.61-5.88,1.22-8.82,1.82-2.9.6-5.81,1.18-8.71,1.78-1.47.31-2.96.51-4.4.97-1.95.62-3.9,1.27-5.82,1.9-.61-.16-1.18-.3-1.67-.43-3.9.81-7.72,1.6-11.59,2.4-.16,4.89-.31,9.7-.46,14.54Z' />
  </svg>
);

export default BookStackIcon;
