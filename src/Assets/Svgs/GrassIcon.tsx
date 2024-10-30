import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const GrassIcon: React.FC<IconProps> = (props) => (
  <svg
    id='GrassIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 334.12 409.58'
    {...props}
  >
    <path d='M152.94,235.85c-.15-2.17-.27-4.31-.46-6.44-.29-3.19-.55-6.39-.98-9.57-.93-6.93-2.03-13.85-3.4-20.71-.63-3.19-1.22-6.39-1.9-9.57-.83-3.88-1.85-7.72-2.74-11.6-.95-4.15-1.76-8.33-2.75-12.46-1.49-6.22-2.91-12.46-4.13-18.74-1.28-6.63-2.78-13.22-3.62-19.94-.44-3.55-.97-7.09-1.47-10.63-.29-2.09-.44-4.2-.58-6.3-.25-3.82-.58-7.64-.6-11.46-.02-4.43-.02-8.87.27-13.31.28-4.26.66-8.5,1.3-12.71.59-3.88.8-7.89,2.66-11.45,2.77-5.28,7.19-8.38,13.13-8.97,2.99-.3,5.79.65,8.42,2.21,5.4,3.19,10.63,6.6,15.5,10.55,4.65,3.78,8.97,7.91,13,12.35,2.68,2.95,5.2,6.03,7.6,9.21,2.42,3.2,4.65,6.54,6.73,9.98,1.87,3.1,3.68,6.22,5.36,9.44,2.22,4.27,4.27,8.61,6.19,13.02,2.45,5.62,4.59,11.36,6.63,17.14,1.46,4.12,2.68,8.33,4.03,12.5,1.69,5.21,3.14,10.5,4.62,15.77,1.24,4.4,2.46,8.8,3.6,13.23,1.26,4.93,2.69,9.82,4.06,14.72.11.41.33.79.69,1.15,0-1.97-.02-3.94,0-5.91.08-6.13.06-12.26.29-18.39.15-4.01.17-8.02.31-12.03.14-3.93.22-7.87.37-11.8.24-6.37.54-12.74,1.05-19.1.31-3.88.49-7.78.87-11.66.44-4.55,1.08-9.09,1.56-13.63.54-5.11,1.43-10.17,2.25-15.24.68-4.2,1.57-8.37,2.45-12.53,1.28-6.04,2.8-12.03,4.6-17.93,2.49-8.16,5.36-16.18,8.83-23.99,2.28-5.13,4.7-10.2,7.45-15.09,2.02-3.6,3.81-7.38,6.65-10.46,4.13-4.47,9.24-6.35,15.21-5.09,4.57.97,7.95,3.8,10.13,7.92,1.83,3.47,3.23,7.14,4.67,10.79.92,2.32,1.88,4.63,2.77,6.97,1.18,3.11,2.3,6.26,3.47,9.37,2.26,6.02,4.2,12.15,6.12,18.29,1.62,5.19,3.12,10.41,4.49,15.68,1.51,5.85,3.01,11.69,4.36,17.58,1.96,8.53,3.64,17.11,5.19,25.73.98,5.44,1.85,10.9,2.54,16.38.77,6.07,1.54,12.15,2.09,18.26.53,5.91,1.05,11.81,1.4,17.73.37,6.19.68,12.38.71,18.59.01,3.06.22,6.12.17,9.18-.1,6.26-.23,12.53-.49,18.79-.2,4.7-.52,9.39-.95,14.07-.57,6.06-1.16,12.12-1.99,18.15-.52,3.74-1.11,7.48-1.63,11.22-.51,3.66-1.36,7.27-2.04,10.91-.91,4.94-1.99,9.84-3.21,14.7-2.52,10-5.43,19.88-8.98,29.57-2.47,6.74-5.16,13.38-8.13,19.91-2.61,5.74-5.41,11.38-8.47,16.88-2.93,5.25-6.08,10.37-9.42,15.38-2.93,4.38-5.98,8.66-9.19,12.82-2.5,3.25-5.08,6.44-7.87,9.46-.14.15-.27.29-.42.43-.96.85-.93,1.73-.45,2.92,2.2,5.46,2.26,10.84-1.13,15.93-2.05,3.07-5.04,4.65-8.6,5.25-3.17.53-6.38.26-9.57.21-5.41-.09-10.79-.58-16.18-1.1-6.22-.6-12.38-1.58-18.49-2.79-4.17-.83-8.32-1.77-12.43-2.88-4.35-1.17-8.69-2.36-12.97-3.74-3.75-1.21-7.46-2.52-11.15-3.89-4.52-1.68-8.98-3.5-13.4-5.43-5.29-2.31-10.48-4.83-15.6-7.5-4.09-2.14-8.16-4.32-12.14-6.65-6.64-3.88-13.12-8.02-19.44-12.41-4.39-3.05-8.69-6.21-12.92-9.46-4.44-3.42-8.7-7.07-12.97-10.71-5.43-4.63-10.62-9.53-15.68-14.55-5.66-5.62-11.03-11.5-16.2-17.58-4.97-5.86-9.76-11.85-14.28-18.06-4.03-5.54-7.82-11.23-11.49-17.02-3.13-4.95-6.03-10.04-8.81-15.19-2.49-4.61-4.77-9.34-6.97-14.1-2.37-5.13-4.55-10.33-6.56-15.59-2.51-6.61-4.68-13.35-6.54-20.18-2.09-7.65-3.8-15.38-5.02-23.21-.67-4.28-1.08-8.61-1.54-12.92C.19,169.08,0,163.66,0,158.26c0-6.32.25-12.65.95-18.96.49-4.39,1.03-8.77,1.8-13.12.41-2.31,1.47-4.36,2.99-6.16,2.81-3.34,6.46-5.15,10.72-5.6,3-.32,5.94.3,8.68,1.66,4.75,2.34,9.49,4.73,14.09,7.37,3.63,2.08,7.2,4.27,10.68,6.59,3.37,2.25,6.75,4.52,10,6.95,3.41,2.55,6.73,5.23,9.99,7.97,3.72,3.13,7.43,6.28,10.97,9.61,2.84,2.67,5.74,5.3,8.39,8.17,2.08,2.25,4.32,4.34,6.42,6.56,2.73,2.89,5.44,5.82,8.09,8.78,3.58,4.01,7.14,8.04,10.64,12.13,2.9,3.38,5.71,6.85,8.55,10.28,2.98,3.58,5.96,7.16,8.94,10.74,3.97,4.78,7.94,9.56,11.91,14.33,2.78,3.34,5.57,6.67,8.36,10,.15.17.28.4.75.31ZM160.89,96.32c-.1.18-.2.28-.2.37,0,2.54-.06,5.08.05,7.61.19,4.46.45,8.91.81,13.36.3,3.81.8,7.6,1.39,11.37.69,4.44,1.23,8.9,2.22,13.3.98,4.34,1.73,8.73,2.62,13.1.94,4.6,2.02,9.16,3.12,13.72,1.3,5.41,2.45,10.85,3.65,16.28.97,4.35,1.99,8.69,2.86,13.05,1.04,5.22,1.92,10.47,2.9,15.71.88,4.69,1.58,9.42,2.09,14.16.42,3.87.76,7.75.94,11.64.28,5.77.49,11.53.19,17.3-.24,4.6-.58,9.21-1.28,13.77-.39,2.52-.53,5.09-1.4,7.5-1.62,4.5-4.78,7.58-9.16,9.37-4.74,1.93-9.4,1.93-13.77-1.09-2.25-1.56-3.93-3.72-5.83-5.64-2.35-2.38-4.56-4.9-6.81-7.38-2.44-2.68-4.9-5.35-7.27-8.09-2.81-3.25-5.47-6.64-8.32-9.86-2.38-2.69-4.6-5.51-6.9-8.26-3.42-4.09-6.72-8.28-10.1-12.42-3.38-4.13-6.84-8.2-10.16-12.38-3.29-4.16-6.75-8.17-10.19-12.2-3.55-4.17-7.21-8.26-10.92-12.3-2.91-3.17-5.86-6.31-8.85-9.4-4.98-5.15-10.22-10.04-15.63-14.75-3.76-3.27-7.56-6.49-11.52-9.5-4.47-3.4-9.05-6.65-13.82-9.63-.67-.42-.81-.3-.81.4.02,2.91-.09,5.82.07,8.73.23,4.4.57,8.79,1.13,13.17.75,5.84,1.69,11.64,3.02,17.38,1.4,6.05,3.08,12.01,5.04,17.9,2.42,7.27,5.23,14.36,8.44,21.31,2.76,6,5.79,11.85,9.06,17.59,2.93,5.16,6.06,10.19,9.33,15.13,2.81,4.25,5.83,8.36,8.92,12.41,4.39,5.77,8.99,11.35,13.84,16.74,3.65,4.06,7.42,8,11.25,11.88,3.59,3.63,7.37,7.05,11.13,10.51,2.23,2.04,4.64,3.88,6.93,5.86,2.9,2.5,5.92,4.84,8.96,7.16,2.41,1.83,4.91,3.53,7.34,5.34,3.26,2.43,6.64,4.67,10.06,6.86,3.59,2.3,7.23,4.52,10.93,6.66,5.41,3.13,10.93,6.07,16.59,8.73,5.8,2.73,11.68,5.28,17.7,7.52,4.97,1.85,9.99,3.56,15.07,5.05,4.55,1.33,9.13,2.52,13.78,3.48,5.3,1.1,10.63,2.02,16,2.72.44.06.78-.02,1.15-.42,2.48-2.65,5.02-5.24,7.53-7.86,2.82-2.94,5.46-6.03,8-9.21,2.81-3.51,5.54-7.09,8.11-10.8,2.81-4.07,5.5-8.21,8.01-12.47,2.29-3.88,4.46-7.83,6.5-11.85,1.89-3.73,3.71-7.49,5.39-11.32,1.93-4.42,3.71-8.9,5.38-13.43,2.04-5.49,3.87-11.05,5.49-16.67,1.38-4.81,2.64-9.65,3.78-14.53,1.27-5.43,2.42-10.88,3.39-16.36,1.2-6.81,2.13-13.66,2.89-20.53.49-4.47.87-8.95,1.23-13.43.31-3.88.54-7.78.59-11.68.05-3.62.3-7.24.36-10.86.09-4.98.02-9.97-.17-14.95-.08-2.14-.13-4.29-.22-6.43-.25-6.52-.73-13.01-1.22-19.51-.32-4.25-.83-8.48-1.31-12.7-.65-5.77-1.46-11.52-2.36-17.25-.9-5.77-1.91-11.53-3.03-17.26-.93-4.76-2.05-9.49-3.1-14.23-1.41-6.33-2.98-12.61-4.71-18.85-1.59-5.75-3.36-11.45-5.09-17.17-.31-1.03-.52-2.12-1.17-3.13-1.34,3.55-2.46,7.03-3.51,10.53-1.29,4.31-2.45,8.65-3.5,13.03-.9,3.75-1.71,7.53-2.46,11.31-.85,4.29-1.62,8.6-2.15,12.95-.46,3.71-1.05,7.41-1.47,11.12-.41,3.64-.75,7.29-1.06,10.94-.41,4.75-.78,9.51-1.08,14.27-.34,5.39-.55,10.78-.73,16.18-.21,6.52-.37,13.03-.48,19.55-.12,7-.04,14.01-.22,21.01-.17,6.53-.02,13.07-.25,19.6-.13,3.81-.05,7.64-.16,11.45-.15,5.06-.32,10.11-.61,15.16-.34,5.93-.55,11.86-1.16,17.77-.38,3.68-.64,7.36-1.03,11.04-.15,1.42-.6,2.79-1.24,4.09-2.97,6.05-10.54,9.1-17.01,8.11-3.86-.59-7.14-2.33-9.21-5.78-3.26-5.43-5.88-11.18-8.28-17.03-2.13-5.18-4.05-10.43-5.82-15.75-1.82-5.47-3.56-10.97-5.12-16.51-1.51-5.35-2.99-10.71-4.45-16.08-1.01-3.72-1.98-7.44-2.95-11.17-.82-3.12-1.53-6.26-2.44-9.35-1.5-5.15-2.81-10.36-4.31-15.51-1.41-4.84-2.83-9.68-4.34-14.48-1.33-4.24-2.82-8.42-4.33-12.6-1.6-4.41-3.35-8.75-5.22-13.05-1.65-3.78-3.42-7.51-5.35-11.16-2.6-4.93-5.42-9.72-8.59-14.3-2.02-2.91-4.18-5.72-6.46-8.42-1.52-1.8-3.1-3.58-4.89-5.23Z' />
  </svg>
);

export default GrassIcon;
