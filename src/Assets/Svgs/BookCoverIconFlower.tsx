import React from 'react';

interface BookCoverIconFlowerProps extends React.SVGProps<SVGSVGElement> {}

const BookCoverIconFlower: React.FC<BookCoverIconFlowerProps> = (props) => (
  <svg
    id='BookCoverIconFlower'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 108.25 148.9'
    {...props}
  >
    <path d='M107.42.02c.74.5.79,1.14.82,1.78.02.52,0,1.04,0,1.56,0,43.56,0,87.11,0,130.67,0,.75-.09,1.5-.11,2.25-.01.45-.22.75-.65,1.04h-2.15c-1,2.27-2,4.54-3.02,6.85.41.93.96,1.87.5,3-.33.82-.86,1.41-1.76,1.71-9.94,0-19.94,0-29.94,0-20.8,0-41.6-.01-62.39.02-1.44,0-2.74-.33-3.98-.96-1.3-.67-2.52-1.46-3.3-2.79-.89-1.54-1.42-3.14-1.42-4.95.02-11.64,0-23.28,0-34.92C.03,75.76.05,46.24,0,16.72c0-3.23.83-6.17,2.28-8.97.52-1.01,1.27-1.94,2.13-2.69.95-.83,1.79-1.76,2.9-2.45,1.25-.78,2.56-1.37,3.92-1.85C12.93.16,14.69,0,16.5,0c30,.03,59.99.02,89.99.02.32,0,.64,0,.93,0ZM105.62,134.87V2.51c-2.97-.2-88.92-.11-89.92.09.03,1.5.08,3,.11,4.51.12,7.91.07,15.82.24,23.73.17,8.07.06,16.14.24,24.21.17,7.71.08,15.42.24,23.13.18,8.51.05,17.02.24,25.53.18,8.15.01,16.3.25,24.45.06,1.96.03,3.92.05,5.88,0,.26-.11.56.17.81h88.37ZM14.67,134.87c-.06-.64-.14-1.15-.14-1.66-.08-7.87-.06-15.74-.23-23.61-.17-7.79-.07-15.58-.23-23.37-.17-8.19-.07-16.38-.25-24.57-.17-8.15-.06-16.3-.24-24.45-.17-7.75-.03-15.5-.24-23.25-.09-3.36-.04-6.72-.07-10.08,0-.31.09-.64-.12-.99-.28.03-.63-.02-.89.1-1.06.52-2.2.84-3.18,1.56-1.05.77-2.22,1.41-3.03,2.44-1.13,1.41-2.15,2.9-2.75,4.65-.46,1.35-.82,2.72-.81,4.16.01,4.92,0,9.83,0,14.75,0,6.44-.03,12.87-.03,19.31,0,5.56.02,11.11.03,16.67,0,5.4,0,10.79,0,16.19,0,19.23,0,38.47,0,57.7,0,2.42,1.36,4.07,3.33,5.22.52.3,1.11.58,1.62.72h92.78c.18-.23.17-.4-.02-.58-.41-.15-.85-.07-1.28-.07-29.59,0-59.19,0-88.78,0-.63,0-1.25-.02-1.87-.25-1.23-.45-2.22-1.18-3.11-2.11-.73-.76-1.04-1.65-1.09-2.67-.1-2.09,1.46-3.8,3.28-4.52,1.46-.58,3.01-.88,4.59-1.07.86-.1,1.74-.1,2.7-.23ZM102.53,137.37h-.59c-28.91,0-57.83,0-86.74,0-1.64,0-3.26.15-4.85.5-1.5.33-3,.76-3.76,2.39-.08.82.28,1.42,1.04,1.9.67.43,1.37.77,2.01,1.1h90.27c.85-1.91,1.72-3.84,2.63-5.89Z' />
    <path d='M59.85,104.17v-9.9c-5.88-1.04-10.47-5.3-11.22-11.79-2.3.9-4.66,1.36-7.11,1.04-1.17-.15-2.32-.47-3.42-.94-.95-.41-1.84-.92-2.68-1.53-.94-.68-1.76-1.5-2.47-2.41-.64-.81-1.19-1.69-1.61-2.63-2.09-4.69-1.64-11.43,4.37-16.15-3-2.24-4.88-5.17-5.38-8.88-.4-2.99.14-5.83,1.7-8.43,1.7-2.85,4.17-4.78,7.34-5.74,3.14-.95,6.26-.71,9.3.59.93-7.56,7.02-11.36,11.47-11.67,3.59-.25,6.88.45,9.7,2.79,2.75,2.28,4.27,5.25,4.74,8.89,3.79-1.56,7.54-1.6,11.21.15,2.63,1.26,4.61,3.25,5.9,5.86,2.49,5.01,1.79,12.05-4.19,16.54,6.13,4.41,6.82,12.03,3.83,17.16-3.39,5.82-10.55,8.12-16.71,5.28-.99,6.55-4.73,10.5-11.2,11.88-.24.85-.33,12.35-.13,16.59.23-.01.31-.18.41-.35,2.68-4.75,6.49-8.31,11.36-10.74,1.92-.96,3.94-1.64,6.01-2.19.19-.05.39-.08.59-.1,1.34-.13,2.08.41,2.15,1.76.1,1.83.14,3.65-.14,5.49-.43,2.75-1.42,5.25-2.97,7.55-1.75,2.6-4.1,4.55-6.82,6.04-2.86,1.58-5.93,2.58-9.14,3.19-.46.09-.91.22-1.31.32-.3.32-.12.67-.26,1.03-.95.18-1.94.05-2.98.07-.2-.51-.28-1.04-.28-1.59.01-1.75,0-3.5,0-5.24-.5-.19-.95-.12-1.37-.07-2.63.31-5.23.01-7.84-.25-2.61-.27-5.15-.83-7.63-1.7-3.12-1.1-5.93-2.71-8.25-5.07-2.69-2.73-4.29-6.03-5.01-9.8-.46-2.41-.55-4.83-.4-7.26.06-1.02.11-2.06.38-3.06.3-1.12.8-1.57,1.93-1.46.94.1,1.88.27,2.81.49,4.26.98,8.34,2.42,12.21,4.48,3.72,1.99,7.06,4.47,9.91,7.58,1.13,1.23,2.14,2.56,3.2,4.19ZM51.01,42.23c-.86.24-1.42-.24-1.99-.67-2.51-1.91-5.33-2.43-8.34-1.65-5.31,1.38-8.25,6.84-6.74,11.97.88,2.99,2.82,5.11,5.74,6.27.56.22,1.09.5,1.41,1.08.12.44.11.92,0,1.4-.31.48-.74.76-1.29.97-1.32.48-2.53,1.22-3.47,2.25-2.44,2.67-3.36,5.76-2.41,9.33,1.52,5.75,7.92,8.65,13.26,6.21,1.03-.47,1.87-1.2,2.77-1.78,1.09-.2,1.84.15,2.23,1.26-.01.29.03.67-.06,1-.41,1.53-.17,3.02.31,4.45,1.26,3.71,3.9,6,7.72,6.61,3.77.59,6.89-.89,9.21-3.89,1.43-1.86,1.98-4.03,1.81-6.38-.05-.75-.22-1.51-.01-2.23.24-.36.52-.64.89-.84.43-.06.87-.09,1.35.04.21.17.45.39.71.58,1.39,1.03,2.93,1.78,4.65,1.98,2.8.31,5.36-.34,7.54-2.23,2.9-2.5,3.91-5.72,3.18-9.34-.67-3.3-2.69-5.69-5.92-6.92-.83-.31-1.45-.8-1.59-1.74.38-1.22.4-1.25,1.43-1.71.22-.1.43-.2.65-.3,4.05-1.82,6.35-5.96,5.46-10.71-.46-2.5-1.85-4.56-4.01-5.99-2.33-1.55-4.87-2.01-7.62-1.4-1.47.32-2.74,1.01-3.91,1.92-.57.44-1.13.7-1.86.41-.54-.21-.8-.62-1.02-1.18.02-.42-.05-.93.09-1.37.33-1.09.09-2.17-.15-3.18-1.29-5.27-6.29-8.44-11.5-7.29-4.66,1.03-8.21,5.66-7.41,10.67.06.39.05.8.06,1.1-.19.74-.66,1.08-1.16,1.31ZM59.86,112.58c.05-.52-.04-.88-.18-1.27-2-5.51-5.49-9.89-10.19-13.33-4.64-3.38-9.83-5.54-15.42-6.74-.37-.08-.73-.39-1.14-.15-.15.15-.18.35-.18.55-.09,2.55-.14,5.1.47,7.6.67,2.74,1.86,5.21,3.85,7.26,3.21,3.3,7.3,4.77,11.69,5.62,1.76.34,3.55.41,5.33.58,1.92.18,3.8,0,5.78-.12ZM80.48,101.23c-4.83,1.43-8.69,4.04-11.8,7.76-2.27,2.73-4.54,7.49-4.47,9.1.09.13.22.06.33.05.16,0,.32,0,.48-.04,2.61-.67,5.16-1.49,7.5-2.85,3.3-1.92,5.79-4.55,7.11-8.19.66-1.83,1.02-3.72.86-5.83Z' />
    <path d='M61.47,73.51c-7.21.04-13.51-6.03-13.41-13.67.1-7.52,6.1-13.45,13.58-13.41,7.63.03,13.58,6.08,13.53,13.7-.05,7.46-6.23,13.54-13.7,13.38ZM61.57,70.16c5.5.12,10.18-4.46,10.26-10.04.08-5.42-4.3-10.3-10.11-10.36-5.99-.06-10.3,4.96-10.33,10.15-.03,5.61,4.66,10.36,10.17,10.25Z' />
  </svg>
);

export default BookCoverIconFlower;