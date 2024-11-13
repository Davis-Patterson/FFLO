import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const GearIcon: React.FC<IconProps> = (props) => (
  <svg
    id='GearIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 158.97 127.82'
    {...props}
  >
    <path
      d='M124.97,20.62c0,17.3,0,34.61,0,51.91l.24,1.08c-.49.1-1.64.22-1.92.36-.47.23-.66,1-.96,1.19-.48.3-.85.02-1.43.72-1.27,1.54.51,2.76.24,2.99-1.12.16-1.54,1.46-1.08,2.4s3.89,1.89,4.91,1.92c.03,2.99-.04,6,0,8.99,0,.4-.16,1.08.24,1.32v.24c-1.34.1-2.27-.37-3.08,1.11-1.17,2.12,1.22,3.35,3.08,3.21v8.63c0,3.38.04,6.77-.05,10.14-.37,1.28-2.82.87-3.91.88-.4,0-1.08-.16-1.32.24-1.11-1.13-2.63-.57-4.03-.76-.33-.75-.84-1.41-1.24-2.11l-.03-1.77c-.89-6.97-5.74-12.97-5.25-20.17.21-3.1,1.69-6.44,2.14-9.61.25-1.78.31-3.57.26-5.37.33.25.69.65,1.08.72,1.27.23,2.17-.41,1.75-1.75-.23-.74-2.47-2.18-3.22-2.53-2.89-1.34-5.73-1.28-8.65-.07-1.22.5-4.77,2.35-3.45,4.02.52.51,1.03.66,1.7.34l.98,5.15c-1.09,4.74-2.08,8.61-1.11,13.56.62,3.2,2.08,6.09,3.25,9.1-2.36,2.64-4.66,5.34-6.92,8.06-.51.93-.37,2.09.21,2.96-2.48-.32-5.59.24-8.15,0-1.89-3.44-3.93-7.96-6.03-11.11-1.77-2.65-3.19-1.47-4.88.32-1.99,2.1-4.27,4.82-6.11,7.08-.89,1.1-2.02,2.15-1.92,3.71-.21-.06-.68.01-.96,0-.42-3.94-2.69-8.76-1.32-12.7,1.45-4.16,2.99-6.6,3.24-11.39.19-3.78-1.67-6.82-1.69-10.31,0-1.33.89-3.27.97-4.68,1.2.78,1.99.29,2.35-1.04-2.47-3.9-7.6-4.79-11.77-3.22-1.32.5-5.2,2.48-3.64,4.25.8.91,1.52.29,2.27-.23-.05,1.56.06,3.11.27,4.65.61,4.54,2.51,8.21,2.13,12.97s-3.02,8.69-4.25,13.01c-.81,2.84-1.14,5.77-1.51,8.68-3.75,0-7.52.03-11.27,0v-34.77c.65-.11,1.18-.01,1.81-.47,1.05-.77,1.04-2.61-.37-2.89v-.47c.96-.07,1.15-1.46.91-2.24s-1.38-.93-1.58-1.18c-.19-.23-.29-1.29-.77-1.63V20.62s79.84,0,79.84,0ZM113.45,64.51c-2.09-.62-4.22-1-6.28-1.75-1.31-.48-5.31-2.78-6.42-2-1.49,2.59,1.95,4.59,4.02,5.35,2.26.83,5.26,1.21,7.5.18.75-.34,1.39-.89,1.18-1.78ZM70.25,60.94c-1.39.17-4.25,1.81-5.81,2.36-1.79.63-3.63,1.05-5.48,1.47l-.38.34c-.45,1.47,2.87,2.17,3.94,2.25,2.52.19,7.72-1.36,8.85-3.86.36-.8.52-1.99-.4-2.44-.23-.14-.45-.17-.72-.13ZM79.42,89.91c.07.1,0,.37.24.59.57.53,2.92,1.21,3.74,1.3,2.7.31,7.93.33,10.25-1.22,1.67-1.11,1.26-2.39.64-4.04-1.9-5.01-8.98-5.84-12.93-2.74-1.52,1.19-2.94,3.75-2.37,5.7.09.3.4.33.44.39Z'
      fill='#91c1d8'
    />
    <path
      d='M45.13,117.72c3.75.03,7.52,0,11.27,0,4.26,0,8.71-.17,12.95,0,.28.01.75-.06.96,0s.62.9,1.11,1.17c1.46.8,2.72-.1,3.68-1.17h8.87s.31.15.44.39c.61,1.1,1.85,3.91,2.86,4.35,1.32.58,5.71.65,6.5-.81,1.62-3-2.11-3.88-4.39-3.43-.29-.03-.08-.39-.14-.49,2.56.24,5.67-.32,8.15,0,.85.11,1.1.66,2.23.43.33-.07.64-.38.89-.43.45-.09,1.16.02,1.68,0,2.95-.09,5.92.07,8.87,0,.51.92,1.71,3.11,2.55,3.57.74.41,4.03.38,5.01.28,1.79-.19,2.56-2.33,1.31-3.6.23-.4.92-.24,1.32-.24,1.1-.01,3.54.4,3.91-.88.08-3.38.04-6.77.05-10.14,8.18,1.08,16.77,1.88,24.7,4.19,1.64.48,3.41,1.05,4.96,1.75s3.61,1.65,4.11,3.48c-.7,1.9-2.49,2.9-4.27,3.63-9.59,3.97-23.09,5.14-33.45,6.11-28.43,2.68-57.86,2.59-86.31-.24-8.69-.86-24.75-2.4-32.22-6.62-2.69-1.52-4.02-3.07-.98-5.23,4.06-2.89,15.15-4.81,20.28-5.62,3.61-.57,7.28-.83,10.88-1.47.04,3.32-.67,7.1,2.15,9.47,2.56,2.16,6.86,1.52,10.07,1.55Z'
      fill='#e5e5e5'
    />
    <path
      d='M44.89,6.23c0,1.12,0,2.24,0,3.36l-8.4.12c-3.02,3.35-1.27,8.22,3.26,8.73l83.77.02c.86.32,1.11.55,1.44,1.44v.72H45.13s0,53.47,0,53.47c-1.36.33-1.9-.89-3.22-.72-1.55.21-3.61,3.95-3.6,5.52-1.74.87-3.74,1.63-5.41,2.63l.02-69.15c1.11-6.03,6.83-6.51,11.97-6.14Z'
      fill='#56a0b7'
    />
    <path
      d='M45.13,82.96v34.77c-3.21-.03-7.51.61-10.07-1.55-2.82-2.38-2.12-6.15-2.15-9.47-.04-3.51.03-7.04,0-10.55,1.53.59,6.54,1.93,8.04,1.93,2.41,0,3.08-3.44,1.06-4.19-1.83-.67-4.44-.83-6.46-1.46-1.03-.32-1.54-.68-2.4-1.08v-4.56c1.33-.98,6.21-4.35,7.74-4.04,1.94.4,2.12.57,4.25.2Z'
      fill='#56a0b7'
    />
    <path
      d='M44.89,9.59v1.68c-2.13.26-5.04-.35-7.07,0-.32.06-.91.42-.83.81.2.32.44.55.83.62,1.74.3,5.11,0,7.07,0,3.35.01,6.72,0,10.07,0h10.31v1.92c-8.83.02-17.66-.01-26.5,0-1.44.73-.15,1.37.95,1.45,3.25.25,7.14-.31,10.57-.26,16.07.24,32.78.09,48.89.26,5.92.06,12.65.34,18.48,0,.56-.03,1.35-.12,1.79-.49.02.05.37.14.48.34.42.74.79,1.52,1.24,2.25.95.06,1.47-.04,2.36.28l-83.77-.02c-4.53-.52-6.28-5.38-3.26-8.73l8.4-.12Z'
      fill='#e5e5e5'
    />
    <path
      d='M125.21,98.06c-1.87.15-4.26-1.09-3.08-3.21.82-1.48,1.74-1.01,3.08-1.11,2.45-.18,5.41-.25,7.73-1.02,3.07-1.02,2.75-2.15.9-4.37-1.07-1.29-5.55-4.88-7.02-5.46-.64-.25-1.22.25-1.6.3-.08,0-.16,0-.24,0-1.03-.02-4.44-.96-4.91-1.92s-.04-2.24,1.08-2.4c.27-.23-1.51-1.46-.24-2.99.58-.71.96-.43,1.43-.72.31-.19.49-.96.96-1.19.28-.14,1.43-.26,1.92-.36.42-.08.81-.32,1.26-.21,1.12.21,2.16,2.26,2.52,3.26.26.73.51,2.77.75,3.08.56.72,4.05,2.72,5.17,3.7,3.97,3.49,7.6,9.42,1.17,12.67-3.16,1.6-7.46,1.68-10.88,1.95Z'
      fill='#284e56'
    />
    <path
      d='M45.13,74.09c.48.34.59,1.4.77,1.63.2.25,1.34.39,1.58,1.18s.05,2.17-.91,2.24v.47c1.4.28,1.42,2.12.37,2.89-.63.46-1.15.36-1.81.47-2.13.37-2.31.19-4.25-.2-1.53-.31-6.4,3.06-7.74,4.04-.42.31-1.03.39-1.57.95-1.46,1.51-1.04,2.53.68,3.42.34.18.73.11.88.19.86.4,1.36.76,2.4,1.08,2.02.63,4.63.79,6.46,1.46,2.03.75,1.35,4.19-1.06,4.19-1.5,0-6.51-1.34-8.04-1.93-1.63-.63-3.9-1.89-5.04-3.23-3.86-4.54,1.25-9.13,5.04-11.39,1.66-.99,3.66-1.75,5.41-2.63,0-1.57,2.05-5.32,3.6-5.52,1.32-.18,1.86,1.04,3.22.72Z'
      fill='#284e56'
    />
    <path
      d='M119.46,15.1c-.15-.15-.37-.31-.48-.48-.39-.62-.83-1.29-1.2-1.92-.22-.37-.4-.93-.72-1.44-.29-.47-.63-.91-.83-1.44l-.71-.25h-39.93c-.02-1.1.05-2.23,0-3.34l42.02.06c.78.13,1.63.74,1.81,1.55.41,1.87-.1,5.16.05,7.26Z'
      fill='#56a0b7'
    />
    <path
      d='M118.98,14.63c.11.17.33.33.48.48.01.15-.04.41,0,.48-.44.37-1.23.46-1.79.49-5.84.34-12.57.06-18.48,0-16.11-.17-32.82-.02-48.89-.26-3.43-.05-7.32.52-10.57.26-1.1-.09-2.39-.72-.95-1.45,8.83,0,17.67.02,26.5,0,3.43,0,6.88,0,10.31,0,10.46-.03,20.84-.14,31.28.01,4.04.06,8.08-.07,12.12-.01Z'
      fill='#fcfcfc'
    />
    <path
      d='M44.89,6.23c0-2.07,0-4.16,0-6.23l4.92,3.12L54.96.24c0,1.99,0,4,0,5.99,0,1.12,0,2.24,0,3.36v3.12c-3.35,0-6.72.01-10.07,0v-3.12c0-1.12,0-2.24,0-3.36Z'
      fill='#ea6456'
    />
    <path
      d='M65.27,6.23s.23-.22.25-.58c.06-1.15-.07-2.34-.01-3.5l4.91,3.12,4.91-2.88c.06,1.08-.07,2.18-.01,3.26.02.35.25.54.25.58.05,1.11-.02,2.24,0,3.36.01.56,0,1.12,0,1.68v3.36c-3.43,0-6.88,0-10.31,0v-3.36c0-.56-.01-1.12,0-1.68.02-1.11-.05-2.25,0-3.36Z'
      fill='#79d080'
    />
    <path
      d='M65.27,6.23c-.05,1.11.02,2.24,0,3.36h-10.31c0-1.12,0-2.24,0-3.36h10.31Z'
      fill='#56a0b7'
    />
    <path
      d='M125.21,73.61l-.24-1.08c0-17.3,0-34.61,0-51.91v-.72c.07.19.4.43.25.82v52.89Z'
      fill='#e5e5e5'
    />
    <path
      d='M70.55,78.64c-.08,1.4-.97,3.34-.97,4.68.02,3.49,1.88,6.53,1.69,10.31-.25,4.79-1.79,7.23-3.24,11.39-1.37,3.94.89,8.76,1.32,12.7-4.24-.17-8.68,0-12.95,0,.37-2.92.7-5.85,1.51-8.68,1.23-4.33,3.88-8.41,4.25-13.01s-1.52-8.44-2.13-12.97c-.21-1.54-.32-3.09-.27-4.65,2.85-1.99,4.79-2.83,8.32-1.49,1.17.44,1.61,1.17,2.47,1.73Z'
      fill='#dff0f7'
    />
    <path
      d='M111.79,78.16c.05,1.8-.01,3.59-.26,5.37-.45,3.18-1.92,6.51-2.14,9.61-.49,7.2,4.36,13.19,5.25,20.17l.03,1.77c-1.73-3.04-3.22-6.26-4.99-9.27-.53-.9-.93-1.66-2.11-1.75-1.56-.12-2.51,1.58-3.45,2.63-1.16-3.01-2.62-5.9-3.25-9.1-.97-4.95.02-8.82,1.11-13.56l-.98-5.15c.39-.18.83-.83,1.21-1.07,3.43-2.15,6.42-2.07,9.58.35Z'
      fill='#dff0f7'
    />
    <path
      d='M89.25,117.72c.05.1-.15.46.14.49,2.27-.45,6,.44,4.39,3.43-.79,1.46-5.18,1.39-6.5.81-1.01-.44-2.25-3.25-2.86-4.35-.13-.24-.41-.34-.44-.39-.09-.15-.1-.76-.35-1.21-.38-.68-2.82-5.26-3.13-5.26-1.86,1.83-3.44,3.91-5.17,5.87-.19.21-.18.55-.23.6-.96,1.07-2.23,1.97-3.68,1.17-.49-.27-.89-1.1-1.11-1.17-.1-1.56,1.03-2.61,1.92-3.71,1.84-2.26,4.12-4.98,6.11-7.08,1.69-1.79,3.11-2.97,4.88-.32,2.1,3.15,4.14,7.68,6.03,11.11Z'
      fill='#284e56'
    />
    <path
      d='M114.66,115.08c.4.7.91,1.36,1.24,2.11,1.41.19,2.92-.37,4.03.76,1.25,1.27.48,3.42-1.31,3.6-.98.1-4.27.13-5.01-.28-.83-.46-2.04-2.65-2.55-3.57-.22-.4-.39-1.09-.68-1.6-1.08-1.95-2.16-3.91-3.28-5.83-.31-.07-1.42,1.15-1.68,1.43-.79.86-2.35,2.62-2.75,3.6-.64.15-1.13.94-1.56,1.44-.26.3-.59.49-.6.96-.25.05-.56.37-.89.43-1.13.23-1.38-.32-2.23-.43-.57-.87-.71-2.03-.21-2.96,2.26-2.72,4.56-5.43,6.92-8.06.94-1.05,1.89-2.75,3.45-2.63,1.17.09,1.58.85,2.11,1.75,1.78,3.01,3.26,6.24,4.99,9.27Z'
      fill='#284e56'
    />
    <path
      d='M94.28,86.55c.63,1.64,1.03,2.93-.64,4.04-2.32,1.54-7.55,1.52-10.25,1.22-.82-.09-3.17-.77-3.74-1.3-.24-.23-.17-.49-.24-.59,1.78-2.05,4.46-3.5,7.13-4.01s5.07-.03,7.73.66Z'
      fill='#fc6c7f'
    />
    <path
      d='M94.28,86.55c-2.66-.69-4.98-1.19-7.73-.66s-5.35,1.96-7.13,4.01c-.04-.06-.35-.09-.44-.39-.57-1.96.85-4.51,2.37-5.7,3.95-3.1,11.02-2.27,12.93,2.74Z'
      fill='#d20c24'
    />
    <path
      d='M70.25,60.94c.27-.03.48,0,.72.13.92.46.76,1.65.4,2.44-1.13,2.49-6.33,4.04-8.85,3.86-1.07-.08-4.39-.78-3.94-2.25l.38-.34c1.85-.42,3.69-.84,5.48-1.47,1.56-.55,4.41-2.19,5.81-2.36Z'
      fill='#050607'
    />
    <path
      d='M113.45,64.51c.21.89-.43,1.44-1.18,1.78-2.25,1.03-5.24.65-7.5-.18-2.07-.76-5.51-2.76-4.02-5.35,1.12-.79,5.11,1.52,6.42,2,2.06.75,4.19,1.13,6.28,1.75Z'
      fill='#050607'
    />
    <path
      d='M70.55,78.64c-.86-.55-1.3-1.28-2.47-1.73-3.53-1.34-5.47-.5-8.32,1.49-.75.53-1.47,1.14-2.27.23-1.56-1.78,2.32-3.75,3.64-4.25,4.16-1.57,9.3-.68,11.77,3.22-.37,1.33-1.15,1.82-2.35,1.04Z'
      fill='#050607'
    />
    <path
      d='M111.79,78.16c-3.15-2.41-6.15-2.49-9.58-.35-.38.24-.82.88-1.21,1.07-.67.32-1.17.17-1.7-.34-1.32-1.67,2.23-3.52,3.45-4.02,2.92-1.2,5.75-1.26,8.65.07.75.35,2.99,1.79,3.22,2.53.41,1.35-.48,1.99-1.75,1.75-.39-.07-.75-.47-1.08-.72Z'
      fill='#050607'
    />
    <path
      d='M125.21,93.51c-.4-.23-.24-.92-.24-1.32-.03-3,.03-6,0-8.99.08,0,.16,0,.24,0v10.31Z'
      fill='#e5e5e5'
    />
    <path
      d='M111.07,117.72c-2.95.07-5.92-.09-8.87,0-.04-.76.19-1.7.48-2.4.4-.98,1.96-2.74,2.75-3.6.26-.28,1.37-1.5,1.68-1.43,1.12,1.92,2.21,3.88,3.28,5.83.29.52.45,1.2.68,1.6Z'
      fill='#dff0f7'
    />
    <path
      d='M83.97,117.72h-8.87s.04-.39.23-.6c1.73-1.96,3.31-4.04,5.17-5.87.31,0,2.75,4.58,3.13,5.26.25.45.26,1.06.35,1.21Z'
      fill='#91c1d8'
    />
    <path
      d='M102.68,115.32c-.29.7-.52,1.64-.48,2.4-.51.02-1.23-.09-1.68,0,0-.48.33-.66.6-.96.43-.49.93-1.29,1.56-1.44Z'
      fill='#91c1d8'
    />
    <rect x='54.96' y='11.27' width='10.31' height='1.44' fill='#fcfcfc' />
    <path
      d='M44.89,11.27v1.44c-1.96,0-5.33.3-7.07,0-.39-.07-.63-.3-.83-.62-.08-.39.51-.76.83-.81,2.03-.35,4.94.25,7.07,0Z'
      fill='#fcfcfc'
    />
    <path
      d='M117.78,12.71c.37.63.81,1.29,1.2,1.92-4.03-.06-8.08.07-12.12.01-10.44-.15-20.82-.04-31.28-.01v-1.92h42.2Z'
      fill='#e5e5e5'
    />
    <path
      d='M117.06,11.27h-41.48c0-.56.01-1.12,0-1.68h39.93s.71.23.71.23c.21.53.54.97.83,1.44Z'
      fill='#e5e5e5'
    />
    <path
      d='M117.06,11.27c.32.51.5,1.07.72,1.44h-42.2v-1.44h41.48Z'
      fill='#fcfcfc'
    />
    <path
      d='M65.27,9.59c-.01.56,0,1.12,0,1.68h-10.31v-1.68h10.31Z'
      fill='#e5e5e5'
    />
  </svg>
);

export default GearIcon;