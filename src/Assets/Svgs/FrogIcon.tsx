import React from 'react';

interface FrogIconProps extends React.SVGProps<SVGSVGElement> {}

const FrogIcon: React.FC<FrogIconProps> = (props) => (
  <svg
    id='FrogIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 98.41 77.79'
    {...props}
  >
    <path
      d='M23.4,67.63c-5.41,2.11-11,2.91-16.78,2.23-1.73-.21-3.26-1.16-5.02-1.42-1.14-.17-1.75-1.28-1.57-2.49.18-1.17.92-1.94,2.15-2.09,1.35-.16,2.47.21,3.01,1.59.14.37.18.78.35,1.56,6.7.35,13.44.92,19.2-3.89.03-.04.06-.07.12-.13-.07.03-.11.05-.15.07-3.78,1.51-7.67,2.09-11.73,1.55-2.09-.28-3.76-1.6-5.79-2.08-1.13-.27-1.4-1.55-1.06-2.72.35-1.22,1.26-1.74,2.46-1.67,1.19.07,2.04.66,2.21,1.95.03.24.06.47.11.88,3.66,1.88,7.4.99,11.41.24-1.15-.86-2.15-1.55-3.07-2.32-5.53-4.63-10.68-9.65-15.3-15.19-1.7-2.04-2.94-4.38-3.07-7.14-.18-3.93,2.59-6.93,6.54-7.26,2.93-.24,5.51.66,7.99,2.05,1.25.7,2.5,1.41,3.92,2.21,1.84-6.59,5.81-11.58,10.99-15.67,5.12-4.04,10.93-6.71,17.14-8.35,1.41-2.04,2.71-4.05,4.16-5.96,1.65-2.18,3.66-3.81,6.67-3.53,2.86.27,5.16,2.44,5.74,5.46.09.47.18.93.3,1.52,5-.55,9.96-.82,14.94.03.1-.78.15-1.41.27-2.03.43-2.2,1.73-3.81,3.89-4.23,2.24-.44,4.05.7,5.29,2.58,1.74,2.64,2.01,5.69,2.15,8.73.05,1.11.29,2.04.89,3,3.01,4.8,3.03,10.15,2.64,15.54-.07.91-.24,1.82-.34,2.61,4.73,7.1,5.63,14.63,2.59,22.42-1.64,4.2-4.7,7.63-7.57,11.1-.25.3-.61.56-.74.91-.41,1.07-1.17,1.39-2.19,1.12-.82-.22-1.32-.84-1.17-1.71.2-1.13,1.06-1.4,2.09-1.29.16.02.31,0,.49,0,.94-.84,1.87-1.66,1.68-3.17-.31-.21-.64-.42-1.03-.68-1.03,1.15-2.45,1.87-3.04,3.44-.25.68-.98,1.08-1.8.83-.71-.22-1.13-.71-1.12-1.51,0-.82.35-1.44,1.16-1.6,1.8-.35,2.43-1.75,3.11-3.22-.22-.31-.43-.59-.57-.78-.94-.44-2.84.96-2.97,2.18-.11,1.06-.37,1.93-1.55,2.07-.7.08-1.29-.32-1.49-.98-.32-1.05.24-1.62,1.06-2.35,1.5-1.34,2.6-3.14,4.59-3.77,1.73-2.54,3.42-5.01,3.61-8.15,2.21-4.35,3.92-8.88,4.83-13.72-.75-.69-1.61-1.09-2.5-1.45-4.01-1.61-8.15-1.81-12.43-1.49-7.37.56-13.44,3.1-17.54,9.67-3.31,5.31-6.19,11.06-11.97,14.45,3.35,6.53,9.15,8.56,15.78,9.17,3.26.45,6.5.02,9.73-.38.29-.04.58-.22.84-.38.81-.49,1.61-.51,2.32.11.67.59.63,1.41.31,2.11-.39.85-1.21.97-2.06.79-1.57-.33-3.13-.43-4.76.12.11.54.19.96.28,1.39,1.44.53,2.8.59,4.14-.27.72-.46,1.49-.36,2.08.26.63.65.62,1.43.22,2.21-.38.75-1.07,1.36-1.81,1.03-1.95-.87-3.84.26-5.76-.26-.15.66-.27,1.15-.38,1.62,1.91,1.24,4.27,1.18,6.02-.1.61-.45,1.26-.54,1.89-.11.68.46,1.04,1.11.83,1.95-.19.77-.72,1.45-1.48,1.33-1.52-.23-2.91.36-4.37.39-2.13.05-4.14-.52-5.97-1.53-3.24-1.81-6.9-1.45-10.34-2.15-6.31-1.29-11.63-4.07-15.58-9.26-.14-.19-.36-.31-.54-.47-.86-1.68-1.72-3.36-2.64-5.16-2.11.61-4.49.02-6.01,2.11-.48-.05-.86-.55-1.41-.32.24-1.08-.28-1.93-.82-2.78-2.79-4.37-7.09-7.22-10.82-10.63-2.93-2.68-5.85-5.32-7.49-9.07-.34-.77-.12-1.73-.88-2.51-.42,1.25,0,2.23.46,3.18,1.86,3.95,5.08,6.71,8.21,9.57,4.12,3.76,9.15,6.72,11.11,12.42-1.08,3.67-2.87,6.99-5.27,9.94-4.68,5.74-10.67,8.34-18.11,7.21-.88-.13-1.62.1-2.41.42-1.44.58-2.73.33-3.48-1.13-.67-1.31-.17-2.51.98-3.23,1.33-.84,2.7-.61,3.77.59.29.33.59.49.99.58,5.77,1.34,13.13-1.63,16.31-6.58.05-.06.1-.11.45-.5-.43.31-.49.36-.55.4ZM48.38,19.69c9.26,12.71,30.41,12.7,40.41.24,1.46.02,2.34-.72,2.58-2.12.22-1.32-.28-2.36-1.55-2.9-1.14-.48-2.2-.13-2.85.82-.74,1.06-.98,2.28.16,3.33-.13.2-.23.42-.38.6-9.25,10.57-28.51,10.57-36.85-.9,1.57-1.11,1.47-2.67.89-4.15-.67-1.69-2.12-2.36-3.89-2.01-1.75.34-3.01,2.29-2.75,4.06.3,2.03,1.77,3.09,4.25,3.03ZM87.7,10.78c1.65-.69,1.01-1.76.8-2.6-.51-2.13-2.22-3.25-4.18-2.84-2.04.42-4.07,2.87-3.71,5.11,2.45-1.66,5.14-4.47,7.08.34ZM60.23,9.19c1.38-.58.73-1.6.56-2.36-.42-1.84-1.49-3.06-3.58-3.01-1.88.04-3.94,1.77-4.5,3.75-.18.64.01.99.74,1.11,1.07-.8,2.02-1.88,3.5-2.06,1.88-.22,2.1,1.7,3.27,2.56ZM29.53,31.67c-.47,1.33-1.03,2.44-1.93,3.43-.95,1.04-.44,2.26.34,3.25.45.58,1.15.74,1.83.39,1.63-.86,1.98-2.52,2.03-4.06.04-1.25-.71-2.41-2.27-3.01ZM24.9,27.91c-.18,1.2.72,1.52,1.67,1.58,1.47.11,2.94-1.81,2.85-3.79-.04-.89-.11-1.99-1.54-1.93-1.4.06-2.95,2.11-2.97,4.14ZM28.05,32.41c.04-1.08-.05-2.1-1.45-2.15-2.02-.07-3.36.97-3.37,2.58-.01,1.54.84,2.23,2.33,2.23,1.78,0,2.46-1.03,2.49-2.66ZM39.43,14.18c-1.8-.01-3.53,1.25-3.48,2.42.06,1.32,1.12,1.7,2.1,1.61,1.38-.13,3.01-.31,3.17-2.21.11-1.35-.91-1.7-1.79-1.82ZM78.45,13.19c-.05-1.21-.56-1.97-1.75-1.86-1.47.14-2.74.69-2.83,2.46-.07,1.35.75,2.06,1.96,2.03,1.64-.04,2.43-1.13,2.61-2.63ZM31.84,31.49c.06,1.14.03,2.21,1.33,2.35,1.18.13,2.65-1.66,2.51-3.14-.09-.99-.2-2.39-1.54-2.3-1.84.13-2.13,1.73-2.29,3.09ZM31.02,26.37c1.5.67,2.78.3,3.37-1.12.41-.97,1.43-2.51-.2-3.21-1.72-.75-2.43.77-3.02,2.07-.3.67-.36,1.37-.15,2.27ZM22.09,37.34c.04,1.63.84,2.49,2.21,2.46,1.05-.03,1.62-.95,1.8-1.95.16-.89,0-1.81-1.02-2-1.33-.26-2.41.25-2.99,1.49ZM44.58,65.07c1.56-.36,1.82-1.42,1.67-2.67-.15-1.24-1.06-1.57-2.13-1.65-.91-.06-1.31.56-1.42,1.3-.24,1.55.76,2.35,1.88,3.01ZM4.52,33.21c.3,1.02.45,2.13,1.88,2.06,1.33-.07,1.8-.87,1.84-2.12.03-.95-.55-1.49-1.3-1.59-1.19-.15-2.02.51-2.42,1.65ZM37.06,23.32c1.33-.29,2.1-1.16,2.15-2.39.03-.74-.08-1.77-1.21-1.92-1.22-.16-1.56.87-1.88,1.66-.4.99-.4,2.05.94,2.66ZM33.13,20.93c1.19-.42,2.37-.76,2.54-2.14.09-.78-.44-1.36-1.19-1.6-.76-.24-1.45,0-1.93.59-.64.78-.5,1.7-.31,2.64.29.17.56.32.9.51ZM71.01,11.55c-1.12-.07-1.64.52-1.62,1.26.03,1.32.88,2.12,2.18,2.21.81.06,1.35-.43,1.33-1.32-.03-1.36-.98-1.86-1.89-2.16ZM4.04,35.2c-.78-.26-1.53-.24-2.05.45-.57.76-.57,1.7-.2,2.5.38.81,1.21.54,1.92.43.84-1.01.93-2.08.33-3.37ZM95.26,53.15c.6-1.03,1.11-2.14.38-3.36-.3-.5-.92-.47-1.38-.14-.93.65-1.18,1.58-.83,2.62.27.81.82,1.26,1.83.88ZM27.27,39.17c-2.13-.08-2.02,1.53-2.36,2.74.48,1.08,1.28.88,2.06.75,1.03-1.05,1.11-2.16.3-3.48ZM42.32,59.99c.93-1.47.05-3.33-1.58-3.53-.86.45-1.21,1.13-.75,2.06.46.94,1.15,1.56,2.33,1.47ZM70.78,19.68c.32.96.95,1.59,2.09,1.42.75-.11,1.23-.65,1.21-1.41-.02-.71-.35-1.31-1.17-1.43-1.07-.14-1.91.09-2.12,1.41ZM44.36,56.91c-.74.47-1.09,1.08-.92,1.85.22,1.01,1.08,1.37,1.89,1.68.67-.23,1.09-.69.89-1.27-.32-.93-.52-2.04-1.86-2.26ZM95.67,48.28c1-.28,1.33-.92,1.22-1.82-.1-.86-.29-1.67-1.47-1.77-.24.14-.54.31-.9.52.08,1.14-.49,2.45,1.15,3.07ZM23.58,40.73c-1.19-.34-1.96-.04-2.51.93-.35.6-.32,1.16.1,1.64.4.46,1.08.64,1.5.26.76-.7,1.19-1.62.91-2.83ZM73.22,12.03c1.09.01,1.55-.6,1.57-1.41.02-.8-.39-1.47-1.34-1.48-.95,0-1.48.51-1.48,1.46,0,.9.53,1.34,1.25,1.43ZM24.26,46.88c.95-.49,1.36-1.22,1.65-2.09-.52-.81-.97-1.63-2.26-1.17-.63,1.21-.51,2.29.61,3.26ZM29.91,30.72c1.36-.51,1.67-1.47,1.42-2.65-.13-.58-.7-.86-1.23-.66-1.32.51-.98,1.71-1.1,2.75.34.21.61.37.91.56ZM43.89,55.3c-.19-.69-.28-1.36-.86-1.96-.51-.01-1.09-.22-1.69.24-.2.96-.19,1.95.77,2.49.65.36,1.42.21,1.78-.77ZM71.24,10c-.15-1.13-.7-1.7-1.85-1.57-.73.08-1.05.5-1.04,1.2.02,1.25,1,1.24,1.79,1.44.54-.2.86-.52,1.1-1.07ZM35.09,27.34c.59.38,1.07.35,1.58.12.52-.72.94-1.46.62-2.4-.5-.53-1.08-.73-1.68-.25-.84.67-.67,1.6-.52,2.53ZM48.07,61.2c-1.03.17-1.15.85-1.06,1.62.09.8.61,1.34,1.35,1.48.68.13,1.1-.34,1.25-1.06-.28-.8-.59-1.61-1.54-2.04ZM95.62,55.32c-.76-.78-1.51-.72-2.21-.04-.44.42-.79.95-.42,1.59.39.69,1.12.66,1.7.45.92-.33,1.16-1.1.94-2ZM49.38,67.12c-.4-1.72-1.49-2.19-2.78-1.2-.26.88-.03,1.64.84,1.93.74.25,1.6.28,1.94-.74ZM77.45,17.89c-.23-.78-.57-1.43-1.54-1.28-.8.13-1.28.64-1.28,1.46,0,.63.39,1.05,1.01,1.12.97.12,1.58-.33,1.81-1.3ZM3.29,40.46c.2.93.36,1.87,1.52,2.03.59.08,1.04-.24,1.11-.84.11-.84-.38-1.5-1.02-1.89-.62-.38-1.23-.13-1.61.7ZM4.75,37.58c.31.77.5,1.54,1.44,1.51,1.11-.51,1.05-1.44.9-2.36-.06-.41-.4-.72-.85-.69-.91.05-1.2.77-1.5,1.53ZM28.73,20.49c.15.9-.4,1.96.85,2.29.78.21,1.37-.29,1.52-1.01.2-.96-.31-1.59-1.36-1.83-.26.14-.57.31-1,.55ZM39.27,51.14c-.81.03-1.38.39-1.34,1.21.03.66.14,1.45.96,1.62.63.13,1.16-.15,1.41-.82.39-1.06-.31-1.52-1.02-2.01ZM6.46,42.29c-.18.35-.34.66-.51.98.58.9,1.01,1.91,2.42,1.51.16-.3.32-.61.5-.95-.45-1.01-1.09-1.64-2.41-1.54ZM93.3,54.41c-.33-.93-.98-1.26-1.88-1.07-.67.14-.99.62-.99,1.3,0,.55.28.96.81,1.02.99.12,1.64-.39,2.06-1.25ZM9.59,33.32c.95.06,1.87.31,2.1-.87.13-.68-.06-1.3-.86-1.44-1.03-.18-1.54.38-1.75,1.39.15.27.31.58.5.93ZM11.25,46.69c-.44-.62-.59-1.55-1.61-1.54-.67,0-1,.4-1.04,1.12.42.59.56,1.5,1.59,1.51.61,0,.94-.36,1.06-1.08ZM72.02,15.64c-.1.89-.31,1.75.64,2.07.89.3,1.4-.27,1.68-1.04-.1-.85-.5-1.37-1.43-1.51-.25.13-.56.3-.9.49ZM68.65,16.55c.26,1,.95,1.43,1.87,1.16.88-.26.81-1.04.59-1.82-1.09-.8-1.94-.75-2.46.66ZM9.02,40.37c-.26-.75-.59-1.31-1.54-1.05-.91.25-1.24.78-.92,1.73,1.08.8,1.94.74,2.46-.68ZM93.87,47.21c-1.65-.24-2.1.44-1.5,2.1.81.28,1.53.3,1.93-.79-.13-.4-.27-.84-.43-1.32ZM92.02,57.46c-.63-.12-1.22-.22-1.65.37-.23.32-.25.68-.02,1,.45.64,1.07.54,1.68.37.59-.56.61-1.11-.02-1.74ZM84.66,2.58c-.99.69-.92,1.21.04,1.75.88-.57.94-1.1-.04-1.75ZM53.95,3.97c.48.25.9.21,1.1-.3.2-.52,0-.93-.6-1.12-.82.23-.9.73-.5,1.42ZM59.46,3.5c.43.23.83.24,1.04-.22.1-.22.1-.57-.01-.78-.23-.44-.62-.42-1.04-.17-.25.34-.29.71.02,1.17ZM87.12,4.91c.37.28.73.29,1.08-.04.17-.53.19-1-.48-1.25-.8.15-.9.62-.6,1.29ZM57.5,2.47c.11-.4.22-.85-.28-1.2-.54-.15-.87.08-.94.6-.03.24.12.5.18.7.4.18.7.2,1.05-.1ZM81.58,5.32c.38.35.73.35,1.12,0,.15-.75.11-1.33-.89-1.15-.37.34-.32.7-.23,1.14Z'
      fill='#afac58'
    />
    <path
      d='M65.37,64.71c-6.63-.62-12.43-2.65-15.78-9.17,5.78-3.39,8.65-9.14,11.97-14.45,4.1-6.57,10.17-9.11,17.54-9.67,4.28-.32,8.42-.12,12.43,1.49.89.36,1.75.76,2.5,1.45-.91,4.83-2.62,9.36-4.83,13.72-2.21,3.92-4.85,7.48-8.54,10.17-4.37,3.19-9.29,5.06-14.55,6.11-.27.05-.69-.15-.74.37Z'
      fill='#cbc981'
    />
    <path
      d='M30.71,59.94c-1.96-5.7-6.99-8.66-11.11-12.42-3.14-2.86-6.36-5.62-8.21-9.57-.45-.96-.88-1.93-.46-3.18.76.78.54,1.74.88,2.51,1.64,3.75,4.56,6.39,7.49,9.07,3.73,3.41,8.02,6.26,10.82,10.63.54.85,1.05,1.7.82,2.78-.07.06-.15.12-.22.18Z'
      fill='#593529'
    />
    <path
      d='M32.34,60.08c1.52-2.09,3.91-1.51,6.01-2.11.92,1.8,1.78,3.48,2.64,5.16-3.04-.57-5.91-1.63-8.65-3.05Z'
      fill='#cbc981'
    />
    <path
      d='M88.79,19.93c-10,12.46-31.15,12.47-40.41-.24.5-.31,1-.62,1.5-.93,8.34,11.46,27.6,11.47,36.85.9.15-.18.26-.4.38-.6.3-.28.61-.56.93-.87.51.53,1.34.83.74,1.73Z'
      fill='#ed5b45'
    />
    <path
      d='M49.88,18.76c-.5.31-1,.62-1.5.93-2.48.06-3.96-.99-4.25-3.03-.26-1.78,1-3.72,2.75-4.06,1.78-.35,3.23.32,3.89,2.01.58,1.48.68,3.04-.89,4.15Z'
      fill='#cbc981'
    />
    <path
      d='M87.7,10.78c-1.94-4.81-4.63-2-7.08-.34-.37-2.24,1.67-4.69,3.71-5.11,1.96-.4,3.67.71,4.18,2.84.2.84.85,1.91-.8,2.6Z'
      fill='#593529'
    />
    <path
      d='M60.23,9.19c-1.17-.86-1.39-2.79-3.27-2.56-1.48.18-2.44,1.26-3.5,2.06-.73-.12-.92-.47-.74-1.11.55-1.98,2.61-3.71,4.5-3.75,2.08-.05,3.15,1.16,3.58,3.01.17.76.82,1.79-.56,2.36Z'
      fill='#593529'
    />
    <path
      d='M29.53,31.67c1.56.61,2.31,1.76,2.27,3.01-.05,1.55-.39,3.21-2.03,4.06-.68.36-1.38.2-1.83-.39-.77-.99-1.29-2.22-.34-3.25.9-.99,1.46-2.1,1.93-3.43Z'
      fill='#8c8833'
    />
    <path
      d='M24.9,27.91c.03-2.03,1.57-4.09,2.97-4.14,1.44-.06,1.5,1.04,1.54,1.93.1,1.99-1.37,3.9-2.85,3.79-.95-.07-1.85-.39-1.67-1.58Z'
      fill='#8c8833'
    />
    <path
      d='M28.05,32.41c-.03,1.63-.71,2.65-2.49,2.66-1.49,0-2.34-.68-2.33-2.23.01-1.61,1.34-2.65,3.37-2.58,1.4.05,1.49,1.07,1.45,2.15Z'
      fill='#8c8833'
    />
    <path
      d='M88.79,19.93c.6-.9-.23-1.2-.74-1.73-.33.3-.63.58-.93.87-1.14-1.06-.89-2.27-.16-3.33.66-.94,1.71-1.3,2.85-.82,1.27.54,1.78,1.58,1.55,2.9-.24,1.4-1.12,2.14-2.58,2.12Z'
      fill='#cbc981'
    />
    <path
      d='M39.43,14.18c.87.12,1.9.47,1.79,1.82-.16,1.9-1.79,2.08-3.17,2.21-.98.09-2.04-.28-2.1-1.61-.05-1.17,1.68-2.43,3.48-2.42Z'
      fill='#8c8833'
    />
    <path
      d='M78.45,13.19c-.18,1.5-.98,2.58-2.61,2.63-1.22.03-2.03-.68-1.96-2.03.09-1.78,1.36-2.32,2.83-2.46,1.19-.11,1.7.65,1.75,1.86Z'
      fill='#8c8833'
    />
    <path
      d='M31.84,31.49c.16-1.36.45-2.96,2.29-3.09,1.35-.09,1.45,1.31,1.54,2.3.14,1.49-1.33,3.28-2.51,3.14-1.3-.15-1.27-1.21-1.33-2.35Z'
      fill='#8c8833'
    />
    <path
      d='M31.02,26.37c-.21-.9-.15-1.61.15-2.27.59-1.3,1.3-2.81,3.02-2.07,1.63.71.61,2.24.2,3.21-.59,1.42-1.88,1.8-3.37,1.12Z'
      fill='#8c8833'
    />
    <path
      d='M22.09,37.34c.58-1.24,1.66-1.75,2.99-1.49,1.01.19,1.18,1.11,1.02,2-.19,1-.75,1.93-1.8,1.95-1.37.03-2.17-.83-2.21-2.46Z'
      fill='#8c8833'
    />
    <path
      d='M44.58,65.07c-1.11-.66-2.11-1.46-1.88-3.01.11-.74.5-1.37,1.42-1.3,1.07.07,1.98.41,2.13,1.65.15,1.25-.11,2.31-1.67,2.67Z'
      fill='#8c8833'
    />
    <path
      d='M4.52,33.21c.41-1.14,1.24-1.8,2.42-1.65.75.1,1.32.63,1.3,1.59-.03,1.25-.51,2.04-1.84,2.12-1.43.08-1.58-1.04-1.88-2.06Z'
      fill='#8c8833'
    />
    <path
      d='M37.06,23.32c-1.34-.61-1.34-1.66-.94-2.66.32-.79.66-1.82,1.88-1.66,1.13.15,1.24,1.18,1.21,1.92-.05,1.23-.82,2.1-2.15,2.39Z'
      fill='#8c8833'
    />
    <path
      d='M33.13,20.93c-.34-.19-.61-.35-.9-.51-.19-.93-.33-1.86.31-2.64.48-.58,1.17-.84,1.93-.59.76.24,1.28.82,1.19,1.6-.16,1.39-1.35,1.73-2.54,2.14Z'
      fill='#8c8833'
    />
    <path
      d='M71.01,11.55c.91.3,1.86.8,1.89,2.16.02.89-.52,1.38-1.33,1.32-1.31-.1-2.15-.9-2.18-2.21-.02-.75.49-1.33,1.62-1.26Z'
      fill='#8c8833'
    />
    <path
      d='M4.04,35.2c.6,1.29.51,2.37-.33,3.37-.7.11-1.53.38-1.92-.43-.38-.8-.37-1.74.2-2.5.52-.69,1.27-.7,2.05-.45Z'
      fill='#8c8833'
    />
    <path
      d='M95.26,53.15c-1.02.38-1.56-.07-1.83-.88-.35-1.04-.1-1.97.83-2.62.47-.33,1.08-.36,1.38.14.73,1.21.22,2.33-.38,3.36Z'
      fill='#8c8833'
    />
    <path
      d='M27.27,39.17c.81,1.33.73,2.43-.3,3.48-.78.13-1.58.34-2.06-.75.34-1.21.23-2.82,2.36-2.74Z'
      fill='#8c8833'
    />
    <path
      d='M42.32,59.99c-1.18.09-1.87-.53-2.33-1.47-.46-.93-.11-1.61.75-2.06,1.63.2,2.51,2.06,1.58,3.53Z'
      fill='#8c8833'
    />
    <path
      d='M70.78,19.68c.21-1.33,1.05-1.56,2.12-1.41.82.11,1.15.72,1.17,1.43.02.76-.46,1.29-1.21,1.41-1.14.17-1.77-.46-2.09-1.42Z'
      fill='#8c8833'
    />
    <path
      d='M44.36,56.91c1.34.22,1.54,1.33,1.86,2.26.2.58-.22,1.04-.89,1.27-.81-.31-1.67-.67-1.89-1.68-.17-.77.18-1.38.92-1.85Z'
      fill='#8c8833'
    />
    <path
      d='M95.67,48.28c-1.64-.62-1.06-1.93-1.15-3.07.36-.21.66-.38.9-.52,1.18.1,1.37.91,1.47,1.77.11.9-.22,1.54-1.22,1.82Z'
      fill='#8c8833'
    />
    <path
      d='M23.58,40.73c.28,1.21-.15,2.13-.91,2.83-.42.39-1.1.21-1.5-.26-.42-.49-.45-1.04-.1-1.64.56-.97,1.32-1.27,2.51-.93Z'
      fill='#8c8833'
    />
    <path
      d='M73.22,12.03c-.72-.09-1.26-.53-1.25-1.43,0-.95.53-1.47,1.48-1.46.95,0,1.36.68,1.34,1.48-.02.8-.48,1.42-1.57,1.41Z'
      fill='#8c8833'
    />
    <path
      d='M24.26,46.88c-1.12-.97-1.23-2.05-.61-3.26,1.29-.45,1.75.37,2.26,1.17-.29.87-.71,1.6-1.65,2.09Z'
      fill='#8c8833'
    />
    <path
      d='M29.91,30.72c-.31-.19-.57-.35-.91-.56.12-1.03-.22-2.23,1.1-2.75.53-.21,1.1.07,1.23.66.26,1.18-.06,2.14-1.42,2.65Z'
      fill='#8c8833'
    />
    <path
      d='M43.89,55.3c-.37.98-1.13,1.13-1.78.77-.96-.53-.97-1.53-.77-2.49.6-.46,1.18-.25,1.69-.24.58.59.68,1.27.86,1.96Z'
      fill='#8c8833'
    />
    <path
      d='M71.24,10c-.24.54-.56.87-1.1,1.07-.79-.2-1.77-.19-1.79-1.44-.01-.71.31-1.12,1.04-1.2,1.15-.13,1.7.45,1.85,1.57Z'
      fill='#8c8833'
    />
    <path
      d='M35.09,27.34c-.15-.93-.32-1.85.52-2.53.6-.48,1.18-.28,1.68.25.32.94-.1,1.68-.62,2.4-.51.23-.99.26-1.58-.12Z'
      fill='#8c8833'
    />
    <path
      d='M48.07,61.2c.95.43,1.26,1.24,1.54,2.04-.15.72-.57,1.19-1.25,1.06-.74-.14-1.26-.68-1.35-1.48-.09-.77.03-1.45,1.06-1.62Z'
      fill='#8c8833'
    />
    <path
      d='M95.62,55.32c.22.9-.03,1.68-.94,2-.58.2-1.3.23-1.7-.45-.36-.63-.01-1.17.42-1.59.71-.68,1.46-.74,2.21.04Z'
      fill='#8c8833'
    />
    <path
      d='M49.38,67.12c-.34,1.02-1.2.99-1.94.74-.87-.29-1.1-1.06-.84-1.93,1.29-.99,2.38-.53,2.78,1.2Z'
      fill='#8c8833'
    />
    <path
      d='M77.45,17.89c-.23.97-.84,1.43-1.81,1.3-.62-.08-1.02-.5-1.01-1.12,0-.82.48-1.33,1.28-1.46.97-.15,1.32.5,1.54,1.28Z'
      fill='#8c8833'
    />
    <path
      d='M3.29,40.46c.38-.83,1-1.08,1.61-.7.64.39,1.13,1.05,1.02,1.89-.08.6-.52.92-1.11.84-1.16-.16-1.32-1.1-1.52-2.03Z'
      fill='#8c8833'
    />
    <path
      d='M4.75,37.58c.3-.77.59-1.48,1.5-1.53.45-.03.79.28.85.69.15.91.21,1.84-.9,2.36-.94.03-1.13-.74-1.44-1.51Z'
      fill='#8c8833'
    />
    <path
      d='M28.73,20.49c.43-.24.74-.4,1-.55,1.05.24,1.56.87,1.36,1.83-.15.72-.74,1.22-1.52,1.01-1.25-.33-.7-1.39-.85-2.29Z'
      fill='#8c8833'
    />
    <path
      d='M39.27,51.14c.71.49,1.41.95,1.02,2.01-.25.68-.77.96-1.41.82-.82-.17-.93-.96-.96-1.62-.04-.83.53-1.18,1.34-1.21Z'
      fill='#8c8833'
    />
    <path
      d='M6.46,42.29c1.32-.1,1.96.53,2.41,1.54-.18.34-.34.65-.5.95-1.41.41-1.83-.61-2.42-1.51.17-.32.32-.62.51-.98Z'
      fill='#8c8833'
    />
    <path
      d='M93.3,54.41c-.42.86-1.07,1.37-2.06,1.25-.53-.06-.8-.47-.81-1.02,0-.68.31-1.16.99-1.3.9-.19,1.55.13,1.88,1.07Z'
      fill='#8c8833'
    />
    <path
      d='M9.59,33.32c-.19-.35-.36-.66-.5-.93.22-1.01.72-1.57,1.75-1.39.8.14.99.76.86,1.44-.23,1.19-1.15.94-2.1.87Z'
      fill='#8c8833'
    />
    <path
      d='M11.25,46.69c-.13.73-.45,1.09-1.06,1.08-1.03,0-1.17-.92-1.59-1.51.04-.72.37-1.11,1.04-1.12,1.03,0,1.17.92,1.61,1.54Z'
      fill='#8c8833'
    />
    <path
      d='M72.02,15.64c.35-.19.65-.35.9-.49.92.15,1.33.66,1.43,1.51-.28.77-.79,1.34-1.68,1.04-.96-.32-.74-1.18-.64-2.07Z'
      fill='#8c8833'
    />
    <path
      d='M68.65,16.55c.52-1.41,1.37-1.46,2.46-.66.22.77.29,1.55-.59,1.82-.92.27-1.61-.15-1.87-1.16Z'
      fill='#8c8833'
    />
    <path
      d='M9.02,40.37c-.52,1.42-1.37,1.47-2.46.68-.32-.95,0-1.48.92-1.73.94-.26,1.28.31,1.54,1.05Z'
      fill='#8c8833'
    />
    <path
      d='M93.87,47.21c.15.47.3.92.43,1.32-.4,1.09-1.12,1.07-1.93.79-.6-1.66-.15-2.35,1.5-2.1Z'
      fill='#8c8833'
    />
    <path
      d='M92.02,57.46c.62.63.61,1.17.02,1.74-.61.17-1.23.26-1.68-.37-.23-.32-.21-.68.02-1,.43-.59,1.02-.49,1.65-.37Z'
      fill='#8c8833'
    />
    <path
      d='M84.66,2.58c.97.65.92,1.17.04,1.75-.96-.54-1.03-1.06-.04-1.75Z'
      fill='#593529'
    />
    <path
      d='M53.95,3.97c-.4-.69-.32-1.19.5-1.42.6.2.8.6.6,1.12-.2.51-.62.54-1.1.3Z'
      fill='#593529'
    />
    <path
      d='M59.46,3.5c-.31-.46-.26-.83-.02-1.17.42-.25.82-.27,1.04.17.11.21.11.56.01.78-.21.46-.61.44-1.04.22Z'
      fill='#593529'
    />
    <path
      d='M87.12,4.91c-.3-.67-.2-1.14.6-1.29.67.25.65.73.48,1.25-.36.33-.71.32-1.08.04Z'
      fill='#593529'
    />
    <path
      d='M57.5,2.47c-.35.3-.65.28-1.05.1-.05-.19-.21-.46-.18-.7.07-.51.41-.75.94-.6.51.35.39.8.28,1.2Z'
      fill='#593529'
    />
    <path
      d='M81.58,5.32c-.09-.45-.13-.8.23-1.14.99-.18,1.04.4.89,1.15-.39.34-.74.35-1.12,0Z'
      fill='#593529'
    />
    <path
      d='M24.71,63.05s.08-.03.15-.07c-.06.06-.09.1-.12.13,0,0-.07,0-.07,0l.03-.06Z'
      fill='#cbc981'
    />
  </svg>
);

export default FrogIcon;
