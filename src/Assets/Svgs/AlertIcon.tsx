import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const AlertIcon: React.FC<IconProps> = (props) => (
  <svg
    id='AlertIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 297.21 260.43'
    {...props}
  >
    <path
      d='M143.07,13.24c4.44.23,10.56.91,14.5.92,1.79,0,4.19-1.72,6.42-.83.4,2.15,2.14,5.4,4.1,6.4,1.42.72,3.18.54,4.71,1.29,2.43,1.2,4.41,3.88,7.28,4.22.33.67.67,1.33,1,2l.04,1.95,1.96.05c.19.64.72,1.33,1,2,.85,2.06.86,4,4,4,.87,1.55,1.28,2.3,2,4s1.23,4.08,2.14,5.89l1.86.11c1.27,2.57,2.71,5.6,4,8,.03.66-.05,1.34,0,2,.41,5.37,3.48,6.73,5.85,10.65,19.83,32.85,38.12,56.26,62.14,85.86,2.54,3.13,6.98,4.54,5,8.98.13.63.59.43,1,.51.59.12,1.35-.08,2,0,.08.26-.02.65,0,1,.07.99-.05,2,0,3-.28-.12-.71.11-1,0-4.93-1.91-6.82-7.51-10-11.5-22.7-28.59-47.35-55.78-64.45-88.55-3.17-6.08-6.01-14.2-10.09-19.91-1.75-2.45-3.72-2.62-4.46-6.04-.12-.57.12-1.35,0-1.99-.62-.14-1.53.17-2,0-1.17-.44-.92-1.92-1-2,.74-2.77-2.86-2.81-3-3-.09-.12.08-1.81-.51-2.95-2.12-4.1-7.8-4.92-10.89-7.17-2.61-1.89-.6-2.47-5.59-3.89-1.96-.56-3.62-1.55-6-1v-2c-1.48-.46-1.88.97-2,1-1.83.36-7.05-.93-10-1v-2Z'
      fill='#fa0c0c'
    />
    <path
      d='M292.07,236.24c-.04,4.48-5.68,8.13-9.31,10.19-17.82,10.05-56.58,7.86-77.25,8.76-31.04,1.35-61.71,6.17-92.97,5.09-13.95-.48-28.01-3.2-41.94-4.06-17.6-1.08-35.91.8-52.8-6.2-4.04-1.67-4.05-2.76-6.73-4.77v-2c5.52,3.81,11.47,5.62,18,7,.59.13,1.37-.1,2,0,1.36.22,2.42.86,5,1,1.67,1.15,5.46,1.88,7.47,2.03,17.62,1.28,35.39,1.82,53.06,2.94,47.07,3,93.98-2.86,140.94-5,12.86-.59,22.97.29,35.53-3.97,1.58-.53,3.44-.59,4.92-1.58l14.08-9.42Z'
      fill='#705757'
    />
    <path
      d='M101.07,25.24c.98-.08,2.01,0,3,0-.2.66-.74,1.33-1,2-1.31.31-2.67.67-4,1s-1.84-.25-3.54.95c-.98.69-4.89,5.73-5.89,7.12-4.16,5.74-8.29,13.43-10.56,19.94-1.01,2.88-1.31,5.57-2,8-2.53-.09-4.13,3.42-5.21,5.29-4.94,8.63-13.05,24.46-15.79,33.71-.17.56.17,1.47,0,2l-1.86.11c-1.41,2.83-2.12,5.93-3.14,8.89s-1.93,6.17-3,9c-2.53-.56-2,1.18-2.79,2.67-3.51,6.56-6.51,13.45-10.02,20.02-5.25,9.85-19.16,30.73-21.19,40.31-.12.58.08,1.36,0,2h-2c-.04.99.04,2,0,3-.02.66.04,1.34,0,2h-2c-.07.65.08,1.35,0,2-.36,3.02-1.17,4.38-2,7h-3c9.4-28.88,25.26-51.25,38.19-78.31,11.55-24.16,22.85-48.59,34.31-72.69,1.57-3.31,3.43-7.71,5.3-10.7,2.41-3.87,6.33-6.94,8.2-11.3h2s0-2,0-2c.06-.04.96-.94,1-1,2.17-1.45,4.56.16,6.22-.15.46-.09.65-.84.78-.85Z'
      fill='#fa2323'
    />
    <path
      d='M284.07,171.24c7.46,9.13,10.14,21.3,11,33v1c.04.99.02,2,0,3-.07,4.54.04,6.7-1,11h-1c-.46-.95-1.1-.91-2-1-.58-.06-1.46-.19-1.86.13-.01.91-.88,1.4-1.14,1.87-3.99.26-2.52.25-2.98-2.48-.57-3.46-2.43-8.31-.02-11.52.18,1.72.82,3.44,1.04,5.49.15,1.39.57,3.16,1.96,1.51.49-7.42-.43-14.73-2.7-21.79-.6-1.88-.79-3.4-3.3-3.2-.24-1.02-1.17-1.31-1-4,0-.08,1.02-.36.85-1.29-.57-3.13-4.9-6.72-3.85-10.71.08-.31-.11-.72,0-1,.03-.07,1.11-.22,1-1l5,1ZM287.07,188.24c.56,1.47,1.94,3.78,2,4,.8,2.79-.42,9.21,3,11,.57-3.89-.97-7.37-2-11-.42-1.48-1.73-3.13-2-4-.26-.81-.14-6-1.5-6-3.61,0,.06,4.83.5,6Z'
      fill='#dd1a1a'
    />
    <path
      d='M277.07,162.24h-3c-.02-.35.08-.74,0-1-.25-.87-1.01-1.95-2-2v2c-.41-.08-.88.12-1.01-.51,1.98-4.45-2.46-5.86-5-8.98-24.03-29.59-42.31-53-62.14-85.86-2.37-3.92-5.44-5.28-5.85-10.65h1c6.42,11.49,15.19,24.88,22.57,35.93,16.87,25.27,38.3,46.41,55.43,71.07Z'
      fill='#fc3e3e'
    />
    <path
      d='M289.07,231.24c-.72.95-5.78,5.2-7,6-2.92,1.92-7.26,2.37-9,5-.54-.21-.88-.96-1-1,.22-5.01,7.82-4.03,8-9,.33-.02.68.05,1,0,2.04-.29,3.08-.53,3-3,2.92-1.87,4.61-4.61,7-7,.77-.77,2.37-.89,2-3h1c-.81,3.34-2.93,9.29-5,12Z'
      fill='#a42727'
    />
    <path
      d='M145.07,2.24c.65-.07,1.34.03,2,0v1s-6,3-6,3c-.99-.05-2,.01-3,0-.79,0-1.58-.11-2.35.15l-.65.85c-4.41-.71-4.72,1.15-7,2-.5.18-1.45-.17-2,0-1.15.36-1.97.63-3,1-4.7,1.67-7.08,3.77-11,6-.33.19-1.2.12-1.93.54-2.91,1.68-5.37,4.8-9.07,4.46.07-.32-.05-.67,0-1,3.37-.73,7.11-2.29,8.22-5.82l2.55-.37c1.83-3.42,5.66-4.22,9.23-6.81,3.88-.36,4.92-1.22,7.72-1.78,5-1,11.48-2.71,16.28-3.22Z'
      fill='#705757'
    />
    <path
      d='M282.07,239.24c.25-.18,1.3,0,1.95-.52,2.72-2.16,3.82-5.42,8.04-4.48.01.66,0,1.33,0,2l-14.08,9.42c-1.49.98-3.35,1.04-4.92,1.58v-2s-4.01,0-4.01,0v-4c.92.15,2.24-.22,3.01,0,.12.04.46.79,1,1,2.25.89,3.91.75,6.29-.22,1.99-.81,2.07-2.32,2.71-2.78Z'
      fill='#fa2323'
    />
    <path
      d='M155.07,8.24c4.8-3.63,5.87,1.36,7.97,3.55,3.74,3.92,5.25,4.11,9.76,6.22,3.87,1.81,5.54,3.71,7.28,7.22-2.86-.35-4.85-3.02-7.28-4.22-1.53-.76-3.29-.58-4.71-1.29-1.96-.99-3.7-4.24-4.1-6.4-2.22-.89-4.62.83-6.42.83-3.94,0-10.06-.69-14.5-.92-2.04-.1-2.78-.97-3-1v-1c2.34.47,4.93-1.08,7.5-1.09,3.34,0,6.86,1.9,10.5,1.08.1-1.24-1.53-1.51-2-2-.34-.36-.6-.68-1-1Z'
      fill='#ee5b5b'
    />
    <path
      d='M131.07,11.24c.65-.07,1.35.07,2,0,.97-.1,2.06.13,3,0v1c-.09.01-.49.85-1.48.99-1.81.25-3.71-.1-5.52.01v2c-.75.02-2.87-.13-2.99,0l-1.87.15-.13,1.85c-.33.04-.68-.06-1,0-3.07.57-5.9,1.53-8.95,2.07l-.05,1.93h-5c.88-.86,1.82-2.42,3-3,3.44-1.68,10.35-4.63,14-6,.88-.33,1.89-.98,2-1,.85-.18,2.04.11,3,0Z'
      fill='#ee5b5b'
    />
    <path
      d='M295.07,208.24c3.04-.54,1.93,1.53,2,3.48.22,6.19-.52,11.66-4.15,16.87-.99,1.43-1.82,2.77-3.85,2.65,2.07-2.71,4.19-8.66,5-12,1.04-4.3.93-6.46,1-11Z'
      fill='#e8c9c9'
    />
    <path
      d='M2.07,225.24c.05.26.06.75,0,1-.51,2.24-1.26.46,0,4,2.28,6.43,2.85,5.64,7,10,.33.34-.31,1.41,2,3v2c-.26-.19-1.5-.07-2.51-.94C.26,237.19-.27,229.61.07,219.24h1c.13,2.72.59,3.77,1,6Z'
      fill='#a42727'
    />
    <path
      d='M8.07,202.24c-1.78,5.61-3.99,11.13-5.07,16.95l-1.93.05c-.05-.98-.05-2.02,0-3,.02-.33-.03-.67,0-1l.85-.65.15-2.35c.06-.33-.07-.69,0-1,2.03-1.23,2.15-3.87,2-6,.32-1.08.7-2.07,1-3h3Z'
      fill='#fa0606'
    />
    <path
      d='M136.07,2.24h1c-4.43.95-12.33,2.33-16,5-.99.09-2.01-.09-3,0-.57-2.79,1.29-1.84,3.01-2.46,4.79-1.71,10.1-4.62,14.99-2.54Z'
      fill='#ee5b5b'
    />
    <path
      d='M145.07,1.24v1c-4.8.51-11.29,2.22-16.28,3.22-2.8.56-3.84,1.42-7.72,1.78,3.67-2.67,11.57-4.05,16-5,1.47-.32,3.02-.8,4-1,1.17-.24,2.77.2,4,0Z'
      fill='#f20808'
    />
    <path
      d='M101.07,19.24v1c-.05.33.07.68,0,1-.26,1.28-1.66,2.25,0,4-.13.01-.32.76-.78.85-1.66.31-4.05-1.3-6.22.15,3.19-4.96,2.53-3.77,7-7Z'
      fill='#ee5b5b'
    />
    <path
      d='M282.07,239.24c-.64.46-.72,1.97-2.71,2.78-2.38.97-4.04,1.1-6.29.22,1.74-2.63,6.08-3.08,9-5v2Z'
      fill='#e8c9c9'
    />
    <path
      d='M117.07,7.24l-9.04,7.49c-.51.55-1.64.3-1.96.51.59-3.83,7.7-7.45,11-8Z'
      fill='#ee5b5b'
    />
    <path
      d='M121.07,7.24c-3.56,2.59-7.39,3.39-9.23,6.81l-2.55.37c-1.12,3.54-4.86,5.09-8.22,5.82v-1c1.72-1.25,3.21-2.79,5-4,.32-.21,1.45.04,1.96-.51l9.04-7.49c.32-.05.67.03,1,0,.99-.09,2.01.09,3,0Z'
      fill='#dd1a1a'
    />
    <path
      d='M284.07,171.24l-5-1c-.16-.89.24-2.29,0-3h1c3.38.37,3.24,3.07,4,4Z'
      fill='#fc3e3e'
    />
    <path
      d='M145.07,1.24c.39-.06,2.18-1.89,4-1l-.17,2.86-1.83.13c.76,1.89-3.33,3.59-4.71,3.86-.94.18-1.21-.85-1.29-.86l6-3v-1c-.66.03-1.35-.07-2,0v-1Z'
      fill='#e8c9c9'
    />
    <path
      d='M190.07,39.24l1.86.11c.69.62,1.59,4.77,2.14,5.89l-1.86-.11c-.91-1.8-1.4-4.13-2.14-5.89Z'
      fill='#ee5b5b'
    />
    <path
      d='M156.07,9.24l-6-1c-.42-2.34.4-2.29,2.56-2.04,1.97.22,1.31,1.13,2.45,2.04.4.32.66.64,1,1Z'
      fill='#e8c9c9'
    />
    <path
      d='M141.07,1.24c-.98.2-2.53.68-4,1h-1V.24s4.37.15,4.37.15l.63.85Z'
      fill='#e8c9c9'
    />
    <path
      d='M188.07,35.24c-3.14,0-3.15-1.94-4-4,3.33-.14,3.09,2.37,4,4Z'
      fill='#ee5b5b'
    />
    <path
      d='M140.07,11.24v1c-1-.15-3-.15-4,0v-1c.09-.01.45-.94,1.55-1.06,1.81-.19,2.31,1.03,2.45,1.06Z'
      fill='#e8c9c9'
    />
    <path
      d='M2.07,211.24c.7-2.98,1.46-4.16,2-6,.15,2.13.03,4.77-2,6Z'
      fill='#fa2323'
    />
    <path
      d='M277.07,162.24c.84,1.22,1.11,1.77,2.85,2.16l.15,2.84h-1c-.4-1.17-2.76-4.24-4-5h2Z'
      fill='#fa2323'
    />
    <path
      d='M128.07,9.24v2c-.11.02-1.12.67-2,1v-3c.55-.17,1.5.18,2,0Z'
      fill='#e8c9c9'
    />
    <path
      d='M138.07,6.24v2c-1.69.74-2.83-.97-3-1l.65-.85c.77-.26,1.56-.16,2.35-.15Z'
      fill='#e8c9c9'
    />
    <path
      d='M93.07,27.24v2s-2,0-2,0c.16-.37-.3-1.29.13-1.86.48-.48,1.58.02,1.87-.14Z'
      fill='#ee5b5b'
    />
    <path
      d='M131.07,11.24v-2c.66,0,1.34,0,2,0v2c-.65.07-1.35-.07-2,0Z'
      fill='#e8c9c9'
    />
    <path
      d='M181.07,27.24c2.99-.44,1.61.68,2,2l-1.96-.05-.04-1.95Z'
      fill='#ee5b5b'
    />
    <path
      d='M1.07,215.24c.18-2.25.97-2.83,1-3l-.15,2.35-.85.65Z'
      fill='#fa2323'
    />
    <path
      d='M1.07,219.24H.07c.03-.78-.14-1.58.15-2.35l.85-.65c-.05.98-.05,2.02,0,3Z'
      fill='#fa2323'
    />
    <path
      d='M199.07,55.24h-1c-.05-.66.03-1.34,0-2,.38.72.71,1.48,1,2Z'
      fill='#ee5b5b'
    />
    <path d='M295.07,205.24v-1c.06.76,0,.86,0,1Z' fill='#e8c9c9' />
    <path
      d='M178.07,32.24c1.44,1.56,1.41,1.54,3,3,.08.08-.17,1.56,1,2l.1,1.89,1.9.11c.74,3.43,2.71,3.59,4.46,6.04,4.08,5.71,6.92,13.83,10.09,19.91,17.1,32.77,41.75,59.96,64.45,88.55,3.17,4,5.07,9.59,10,11.5v3l-1.94,2.41,9.94,13.59c-.17,2.69.76,2.98,1,4,.43,1.84.56,4.16,1,6-1.57,3.62-.78,6.32.08,9.94l1.92.06c.08.64-.07,1.35,0,2-2.4,3.2-.55,8.06.02,11.52.45,2.74-1.01,2.74,2.98,2.48-2.3,4.13-7.3,6.55-12,8-.28,1.38-1,2.57-1,4,1.65-.07,3.35.11,5,0-.18,4.97-7.78,3.99-8,9-.77-.22-2.09.15-3,0-.47-.87-1.14-.88-2-1v-1c.95-.38,5.29-6.11,4-8,1.71-.58,2.15-2.12,5-3,.31-1.54.87-3.62,1-5,.21-2.22-.07-4.71,0-7,.05-1.66.03-3.34,0-5h2c-.58-3.71,2.03-10.87-3-11-.06-.32.05-.67,0-1-.09-.58-.36-1.04-1-1-.04-.33.02-.67,0-1-.08-1.27.23-2.89,0-4,3.23.39,1.77-.93,1.3-2.79-1.68-6.63-5.28-11.66-8.52-17.5-17.92-32.24-43.86-57.36-63.6-88.39-10.98-17.25-21.48-39.25-35.18-54.32v-2c2.41.87,6.92,1.76,9,4Z'
      fill='#d50101'
    />
    <path
      d='M129.07,15.24c4.62-.15,9.38-.11,14,0,2.95.07,8.17,1.36,10,1l.59.85,1.41.15c2.38-.55,4.04.44,6,1,0,1.58,7.39,9.78,8,10v2c-5.33-5.87-9.56-8.78-17.56-9.94-2.72-.39-6.49-1.27-5.44,2.94-5.31-.55-9.94.46-15,1,.1-1.31.15-2.65-.94-3.56-.99-.67-4.76-.69-6.06-.44v-3l1.74-.26c.55-.55.15-1.64.26-1.74.13-.13,2.25.02,3,0Z'
      fill='#d70000'
    />
    <path
      d='M161.07,18.24c5,1.42,2.98,1.99,5.59,3.89,3.1,2.25,8.77,3.07,10.89,7.17.59,1.13.42,2.83.51,2.95.14.19,3.74.23,3,3-1.59-1.46-1.56-1.44-3-3-2.08-2.24-6.59-3.13-9-4-.61-.22-8.01-8.42-8-10Z'
      fill='#f20000'
    />
    <path
      d='M140.07,12.24c.22.03.96.9,3,1v2c-4.62-.11-9.38-.15-14,0v-2c1.81-.11,3.71.24,5.52-.01.99-.14,1.39-.98,1.48-.99,1-.15,3-.15,4,0Z'
      fill='#dd1a1a'
    />
    <path
      d='M275.07,162.24c1.24.76,3.6,3.83,4,5,.24.71-.16,2.11,0,3,.11.78-.97.93-1,1,.09-1.41-3.03-5.58-4-6-.05-1,.07-2.01,0-3h1Z'
      fill='#e8c9c9'
    />
    <path
      d='M278.07,171.24c-.11.28.08.69,0,1-2.9.41-2.69-3.11-5-4v-3c.29.11.72-.12,1,0,.97.42,4.09,4.59,4,6Z'
      fill='#fa2323'
    />
    <path
      d='M153.07,16.24c.12-.02.52-1.46,2-1v2s-1.41-.15-1.41-.15l-.59-.85Z'
      fill='#f20000'
    />
    <path
      d='M182.07,37.24c.46.17,1.37-.14,2,0,.13.64-.12,1.42,0,1.99l-1.9-.11-.1-1.89Z'
      fill='#f20000'
    />
    <path
      d='M274.07,161.24c-.65-.08-1.41.12-2,0v-2c.99.05,1.75,1.13,2,2Z'
      fill='#fa2323'
    />
    <path
      d='M18.07,234.24c.31-.02.69-.04,1,0-.5,4.72,4.1,5.63,8,6,1.52.14,4.64.26,6,0-.55,3.25,1.65,1.69,3.53,1.95,6.9.95,13.99,1.61,20.93,2.09,2.32.16,6.76.6,8.55-1.05,5.3.65,11.61.84,17,1v2c1.71.74,2.83-.98,3-1,2.12-.26,4.75.04,7,0v2c3.1-.47,7.73,1.15,10-1,3.98.14,8.02-.07,12,0-.54,3.03,1.53,1.94,3.48,2,2.32.07,4.71.07,7.04,0,1.95-.06,4.03,1.03,3.48-2,5.98-.08,12.03.21,18,0,1.93,2.11,6.22.57,9.01,1v-2c2.57,0,5.52-.24,7.99,0,.05,0-.29.69.63.85,1.46.26,2.92.18,4.38.15v-2c2.22-.06,4.84-.2,7,0,.09,0-.34.74,1.47,1.01,1.44.21,3.06-.1,4.53,0v-2c.99.05,2.01-.08,3,0,.09,0-.33.78,1.47,1.01s3.73-.13,5.54,0v-2c5.09-.36,8.02-.18,12.99,0,19.71.72,39.32-1.94,59-2-6.64,3.51-9.21,3.28-16.44,4.06-16.29,1.75-32.7,2.26-49.05,3.98-2.94.31-2.69-.85-2.51,2.96-.99.08-2.01-.09-3,0v-2s-5,0-5,0v3c-30.27,2.62-62.06,4.91-92.53,3.03-10.39-.64-20.69-2.41-31.47-3.03.09-3.34.69-2.89-2.48-2.99-7.92-.27-16.3-3.29-24.11-4.01-2.42-.22-4.32,1.46-4.41,4-.47.03-.95-.02-1.41.15l-.59.85c-.63-.1-1.41.13-2,0,.48-2.05-1.52-2.37-2-3-3.22-4.23-7.32-9.11-12-12,.92-.6,1.9-.92,3-1Z'
      fill='#d70000'
    />
    <path
      d='M267.07,239.24v1c-.89-.13-2.04,0-3,0,1.62-.86,2.1-.64,3-1Z'
      fill='#d70000'
    />
    <path
      d='M273.07,247.24c-12.57,4.26-22.67,3.38-35.53,3.97-46.96,2.14-93.87,8-140.94,5-17.67-1.12-35.44-1.66-53.06-2.94-2.01-.15-5.8-.88-7.47-2.03.66.04,1.34-.03,2,0,8.73.36,17.31.5,26,1,10.78.63,21.08,2.39,31.47,3.03,30.47,1.87,62.25-.41,92.53-3.03,1.91-.17,3.41-.86,5-1,.99-.09,2.01.08,3,0,5.1-.43,10.99-1.56,16-1,.15.02-.05,1.08,2.5,1.08s2.35-1.06,2.5-1.08c6.18-.67,13.58.27,20,0,.78-.03,1.58.14,2.35-.15l.65-.85c4.43.54,11.33.16,16,0,.78-.03,1.58.14,2.35-.15l.65-.85c4.68.72,9.42-2.89,14-1Z'
      fill='#a40000'
    />
    <path
      d='M27.07,247.24c.48.63,2.48.95,2,3-6.53-1.38-12.48-3.19-18-7-2.31-1.59-1.67-2.66-2-3l9,4.5,9,2.5Z'
      fill='#cf0404'
    />
    <path
      d='M33.07,249.24c1.65-.12,3.35.07,5.01,0v2c-.67-.03-1.34.04-2.01,0-2.58-.14-3.64-.78-5-1l.59-.85c.46-.17.94-.11,1.41-.15Z'
      fill='#cf0404'
    />
    <path
      d='M92.07,39.24l1.6,2.06,3.4-1.06c.07.46-.04.96.15,1.41l.85.59c-.32.3-.7,1.43-1,2-.07.14-.95.38-1,1-1.63-.17-3.12.04-3.96,1.57l.96,3.43c-2.4,1.16-1.4,1.95-2,3-18.04,31.65-30.55,61.85-46.26,94.24-5.93,12.22-23.08,37.71-24.71,49.29-.31,2.17-.4,2.85,1.97,2.47,2.48-11.88,10.61-21.77,16.19-32.31,8.14-15.37,14.25-31.66,21.62-47.38,10.64-22.68,21.73-45.18,35.19-66.31,1.74-.26,1.32-.58,2-1h1c-21.05,30.83-34.02,65.29-49.81,98.69-8.11,17.16-30.63,50.92-30.19,68.31.07,2.88.92,5.12,1,8l-.99.5.99.5c-.04.33.05.68,0,1-.1.66-1.95,2.97-1,5-1.1.08-2.08.4-3,1-.74-.46-3.05-.34-3.96-1.53l-9.04-8.47c-.41-2.23-.87-3.28-1-6l1.93-.05c1.08-5.82,3.29-11.34,5.07-16.95.83-2.62,1.64-3.98,2-7h2c.04-.66-.04-1.34,0-2s-.02-1.34,0-2h2s0-3,0-3c.08-.64-.12-1.42,0-2,2.44.23,2.6-1.44,3.52-2.99,10.31-17.42,23.38-41.26,30.48-60.01,1.07-2.83,2-6.1,3-9l1.88-.09c.87-3.04,2.16-5.9,3.12-8.91.17-.53-.17-1.44,0-2,2.37.57,3.12-3.02,3.86-4.64,4.51-9.85,14.59-25.43,17.14-34.36.69-2.43.99-5.12,2-8,2.57.57,1.97-1.23,2.79-2.67,3.3-5.77,6.43-9.28,10.21-14.33Z'
      fill='#cf0404'
    />
    <path
      d='M48.07,123.24c-7.1,18.76-20.17,42.59-30.48,60.01-.92,1.55-1.08,3.21-3.52,2.99,2.03-9.58,15.94-30.46,21.19-40.31,3.51-6.57,6.51-13.46,10.02-20.02.8-1.49.27-3.23,2.79-2.67Z'
      fill='#fa0606'
    />
    <path
      d='M99.07,28.24c-.36,1.1-1.52,4.34-2,5-.24.33-1.23.98-2,2-.95,1.25-2.01,2.68-3,4-3.78,5.05-6.91,8.56-10.21,14.33-.82,1.44-.23,3.24-2.79,2.67,2.28-6.51,6.41-14.2,10.56-19.94,1-1.38,4.92-6.43,5.89-7.12,1.7-1.2,2.27-.63,3.54-.95Z'
      fill='#fa0606'
    />
    <path
      d='M77.07,64.24c-2.54,8.92-12.62,24.51-17.14,34.36-.74,1.62-1.49,5.21-3.86,4.64,2.74-9.24,10.86-25.08,15.79-33.71,1.07-1.88,2.68-5.39,5.21-5.29Z'
      fill='#f20808'
    />
    <path
      d='M106.07,26.24h2s0,1.99,0,1.99c-2.61.38-5.73,3.3-6,6.01-.96.34-1.81,1.16-3,1l-2-2c.48-.66,1.64-3.9,2-5,1.33-.33,2.69-.69,4-1,.63-.15,1.61.2,2.35-.16l.65-.84Z'
      fill='#d70000'
    />
    <path
      d='M112.07,16.24v2c-1.18.58-2.12,2.14-3,3-.35.34-.68.6-1,1-.2.25-.63.4-1,1l-2.91.1c-.37.6.05,1.42-.09,1.9-.99,0-2.02-.08-3,0-1.66-1.75-.26-2.72,0-4,3.7.34,6.16-2.78,9.07-4.46.74-.42,1.6-.35,1.93-.54Z'
      fill='#e8c9c9'
    />
    <path
      d='M56.07,105.24c-.96,3.01-2.25,5.87-3.12,8.91l-1.88.09c1.03-2.96,1.73-6.05,3.14-8.89l1.86-.11Z'
      fill='#f20808'
    />
    <path d='M14.07,188.24v3s-2,0-2,0c.03-1-.04-2.01,0-3h2Z' fill='#fa0606' />
    <path
      d='M106.07,25.24v1l-.65.84c-.74.36-1.72,0-2.35.16.26-.67.8-1.34,1-2h2Z'
      fill='#dd1a1a'
    />
    <path
      d='M12.07,193.24c-.04.66.04,1.34,0,2h-2c.08-.65-.07-1.35,0-2h2Z'
      fill='#fa0606'
    />
    <path
      d='M291.07,218.24v4c-2.39,2.39-4.08,5.13-7,7-.93.6-3.42-.07-3,3-.32.05-.67-.02-1,0-1.65.1-3.35-.07-5,0,0-1.42.72-2.62,1-4,4.7-1.45,9.7-3.87,12-8,.26-.47,1.13-.96,1.14-1.87.4-.32,1.28-.19,1.86-.13Z'
      fill='#f20000'
    />
    <path
      d='M282.07,188.24c2.51-.2,2.69,1.33,3.3,3.2,2.27,7.06,3.19,14.37,2.7,21.79-1.39,1.66-1.81-.11-1.96-1.51-.22-2.05-.86-3.77-1.04-5.49-.07-.65.08-1.36,0-2-.57-4.38-1.04-5.97-2-10-.44-1.84-.57-4.16-1-6Z'
      fill='#e8c9c9'
    />
    <path
      d='M278.07,172.24c-1.05,3.99,3.28,7.58,3.85,10.71.17.93-.85,1.21-.85,1.29l-9.94-13.59,1.94-2.41c2.31.89,2.1,4.41,5,4Z'
      fill='#f20808'
    />
    <path
      d='M290.07,192.24c1.03,3.63,2.56,7.11,2,11-3.41-1.79-2.2-8.21-3-11h1Z'
      fill='#e8c9c9'
    />
    <path
      d='M287.07,188.24c-.45-1.17-4.12-6.01-.5-6,1.36,0,1.25,5.19,1.5,6h-1Z'
      fill='#e8c9c9'
    />
    <path
      d='M293.07,219.24c.37,2.11-1.23,2.23-2,3v-4c.9.09,1.54.05,2,1Z'
      fill='#d50101'
    />
    <path
      d='M290.07,192.24h-1c-.06-.22-1.44-2.53-2-4h1c.27.87,1.58,2.52,2,4Z'
      fill='#ee5b5b'
    />
    <path
      d='M284.07,229.24c.08,2.47-.96,2.71-3,3-.42-3.07,2.07-2.4,3-3Z'
      fill='#d50101'
    />
    <path d='M126.07,9.24v1h-3c1.03-.37,1.85-.64,3-1Z' fill='#c4c0c0' />
    <path
      d='M271.07,231.24c1.29,1.89-3.05,7.62-4,8-.9.36-1.38.14-3,1-19.68.06-39.29,2.72-59,2l11.55-2.95c15.21-1.3,32.93,1.03,47.14-4.85,2.07-.86,3.52-2.33,5.31-3.19.42-.2,1.46.18,2,0Z'
      fill='#fc0202'
    />
    <path
      d='M267.07,240.24c.86.12,1.53.13,2,1v4s4,0,4,0v2c-4.58-1.89-9.33,1.72-14,1-.17-.03-1.3-1.74-3-1v2c-4.68.16-11.57.54-16,0-.17-.02-1.29-1.73-3-1v2c-6.42.27-13.83-.67-20,0-1.19-1.58-3.81-1.58-5,0-5.01-.56-10.9.57-16,1-.19-3.81-.43-2.65,2.51-2.96,16.35-1.72,32.76-2.23,49.05-3.98,7.23-.78,9.8-.55,16.44-4.06.96,0,2.11-.13,3,0Z'
      fill='#fc0202'
    />
    <path
      d='M124.07,20.24c-2.22.42-6.24,3.89-8,5-4.51,2.86-7.19,6.16-10,8-.6.39-2.99.64-4,1,.27-2.71,3.39-5.63,6-6.01v-1.99s-2,0-2,0v-1c.14-.72.62-1.38,1-2s.8-.75,1-1l.68.8c2.69,1.08,4.12,1.68,6.71.05.99-.62,1.43-1.75,1.6-1.85,2.04-1.25,5.05-1.69,6-4,.32-.06.67.04,1,0v3Z'
      fill='#f20000'
    />
    <path
      d='M114.07,21.24h3c-.17.1-.61,1.23-1.6,1.85-2.59,1.63-4.02,1.03-6.71-.05l-.68-.8c.32-.4.65-.66,1-1h5Z'
      fill='#d70000'
    />
    <path
      d='M123.07,17.24c-.95,2.31-3.96,2.75-6,4h-3l.05-1.93c3.05-.54,5.88-1.51,8.95-2.07Z'
      fill='#dd1a1a'
    />
    <path
      d='M126.07,15.24c-.11.11.29,1.19-.26,1.74l-1.74.26.13-1.85,1.87-.15Z'
      fill='#dd1a1a'
    />
    <path
      d='M2.07,225.24l9.04,8.47c.91,1.19,3.22,1.07,3.96,1.53,4.68,2.89,8.78,7.77,12,12l-9-2.5-9-4.5c-4.15-4.36-4.72-3.57-7-10v-4c.06-.25.05-.74,0-1Z'
      fill='#f20000'
    />
    <path d='M2.07,230.24c-1.26-3.54-.51-1.76,0-4v4Z' fill='#cf0404' />
    <path
      d='M168.07,39.24c.17.15-.17.83,0,1,.33.35.75.71,1,1,1.7,2.01,2.85,4.51,5,6,.38,1.3.05,2.59,2,3,.14.22.68.47,1,1,2.87,4.79,7.16,12.72,10.52,17.02.4.51.83.85,1.48.98.06.3-.04.66,0,1,.06.57.37,1.03,1,1,6.91,12.56,14.23,25.24,22.58,36.92,16.17,22.63,37.43,43.6,51.25,67.75,3.96,6.92,6.79,14.64,11.17,21.33.02.33-.04.67,0,1,.07.57.36,1.03,1,1,.05.33-.06.68,0,1,.31,1.58.87,3.6,1,5-2.61.55-2.01-1.18-2.72-2.75-18.21-40.44-42.81-62.36-66.7-97.33-13.5-19.75-24.14-43.1-39.57-61.43-29.9-35.51-60.86-2.48-77.83,26.18-24.49,41.36-39.36,87.6-64.37,128.63l-7.81,20.69c-.43-17.38,22.08-51.14,30.19-68.31,15.79-33.41,28.76-67.87,49.81-98.69v-1c1.15-.82,1.54-1.64,2-2,9.59-7.5,17.35-16.45,29.31-21.19,14.61-5.8,24.64-.23,35.18,9.2,1.1.98,2.83,1.37,3.51,1.99Z'
      fill='#c4c0c0'
    />
    <path
      d='M169.07,30.24c13.69,15.08,24.2,37.07,35.18,54.32,19.74,31.02,45.67,56.15,63.6,88.39,3.24,5.83,6.84,10.87,8.52,17.5.47,1.87,1.93,3.18-1.3,2.79-1-4.91-14.02-26.77-17.55-31.95-21.07-30.92-49.65-57.36-65.59-91.94-.9-.42-2.03.06-2.87-.11-.14-.67.22-1.61.04-2.37-.2-.85-1.6-.37-2.02-1.3-2.49-5.46-7.52-10.59-9.01-14.33-.25-.62.34-2.05-.08-2.91-.88-.42-2.21.15-2.92-.09-.07-.02-.51-.66-1-1-.78-2.66-.85-6.07-3.62-7.96l-1.38.96h-1c-.17-.17.17-.85,0-1-.7-2.47-3.83-2.89-5.06-4.44-.96-1.21-.92-2.92-1.88-4.12-.24-.31-5.58-4.6-6.1-4.9-1.63-.96-6.97-2.33-8.96-2.54-1.06-4.2,2.71-3.33,5.44-2.94,8.01,1.16,12.23,4.07,17.56,9.94Z'
      fill='#f20000'
    />
    <path
      d='M277.07,216.24c-.07,2.29.21,4.78,0,7-3.21.61-5.46,5.54-8,8-1.79.86-3.24,2.33-5.31,3.19-14.21,5.89-31.94,3.56-47.14,4.85l-11.55,2.95c-4.98-.18-7.91-.36-13,0-2.36.17-5.37-.83-7,1-.99-.08-2.01.05-3,0-1.99-.11-4.7-.56-6,1-2.16-.2-4.78-.06-7,0-1.76.05-3.83-.58-5,1-2.48-.24-5.43,0-8,0-3.4,0-6.97.93-9,1-5.97.21-12.02-.08-18,0-4.64.06-9.36.08-14,0-3.98-.07-8.02.14-12,0-2.49-.09-6.19-1.07-10-1-2.25.04-4.88-.26-7,0l-.65-.85c-.77-.28-1.56-.12-2.35-.15-5.39-.16-11.7-.35-17-1s-25.92-5.61-29.3-4.87c-1.27.28-2.53,1.64-3.7,1.87-1.36.26-4.48.14-6,0l-.1-1.87c-3.48-.35-4.8-3.72-7.9-4.13-.31-.04-.69-.02-1,0-.95-2.03.9-4.34,1-5l8.08,6.42c6.47,3.16,6.05-.53,10.42-.49,6.24.06,16.33,3.18,23.07,4.01,62.78,7.76,122.71,1.19,184.99-4.88,13.53-1.32,21.94-2.25,28.75-15.29.76-1.45-.04-3.36,2.69-2.77Z'
      fill='#fc3e3e'
    />
    <path
      d='M189.07,69.24c.83.17,1.97-.31,2.87.11,15.93,34.58,44.52,61.02,65.59,91.94,3.53,5.18,16.54,27.05,17.55,31.95.23,1.11-.08,2.73,0,4-4.39-6.69-7.21-14.41-11.17-21.33-13.82-24.15-35.09-45.11-51.25-67.75-8.34-11.68-15.66-24.36-22.58-36.92-.25-.46-.41-.89-1-1-.04-.34.06-.7,0-1Z'
      fill='#b71717'
    />
    <path
      d='M276.07,200.24c5.03.13,2.42,7.29,3,11.01h-2c-.01-.67.02-1.34,0-2.01v-1c-.06-.99.09-2.02,0-3-.13-1.4-.69-3.42-1-5Z'
      fill='#b71717'
    />
    <path
      d='M277.07,223.24c-.13,1.38-.69,3.46-1,5-2.85.88-3.29,2.42-5,3-.54.18-1.58-.2-2,0,2.54-2.46,4.79-7.39,8-8Z'
      fill='#fa0c0c'
    />
    <path
      d='M285.07,204.24l-1.92-.06c-.86-3.62-1.65-6.32-.08-9.94.96,4.03,1.43,5.62,2,10Z'
      fill='#dd1a1a'
    />
    <path
      d='M276.07,199.24c-.64.03-.93-.43-1-1,.64-.04.91.42,1,1Z'
      fill='#b71717'
    />
    <path
      d='M131.07,24.24c5.06-.54,9.69-1.55,15-1,1.99.21,7.33,1.58,8.96,2.54.52.31,5.86,4.6,6.1,4.9.96,1.21.92,2.91,1.88,4.12,1.23,1.55,4.37,1.97,5.06,4.44-.68-.62-2.41-1.01-3.51-1.99-10.54-9.43-20.57-15-35.18-9.2-11.96,4.74-19.72,13.69-29.31,21.19-.16-2,1.38-2.79,2.5-4,4.27-4.6,7.92-7.21,12.5-11,2.26-1.87,3.28-3.17,6-5l.58.94,8.44-3.44c1.05-.61.91-1.49.99-2.5-.65.07-1.35-.08-2,0-2.47.29-4.76-.46-7.01,1.54-.7.62-.76,1.87-1.23,2.23-.93.72-4.43,1.3-5.77,3.24.57-1.6.58-3.69,2.01-5.49l-1.01-.51c1.76-1.11,5.78-4.58,8-5,1.3-.24,5.07-.23,6.06.44,1.09.9,1.04,2.25.94,3.56Z'
      fill='#a42727'
    />
    <path
      d='M33.07,249.24c.1-2.55,1.99-4.23,4.41-4,7.81.72,16.19,3.74,24.11,4.01,3.17.11,2.57-.34,2.48,2.99-8.69-.5-17.27-.64-26-1v-2c-1.65.07-3.35-.12-5,0Z'
      fill='#f20000'
    />
    <path
      d='M66.07,243.24c-1.79,1.64-6.22,1.21-8.55,1.05-6.93-.48-14.03-1.14-20.93-2.09-1.88-.26-4.07,1.29-3.53-1.95,1.17-.22,2.44-1.59,3.7-1.87,3.38-.74,24.17,4.24,29.3,4.87Z'
      fill='#f20808'
    />
    <path
      d='M129.07,246.24c.54,3.03-1.53,1.94-3.48,2-2.32.07-4.71.07-7.04,0-1.95-.06-4.03,1.03-3.48-2,4.64.08,9.36.06,14,0Z'
      fill='#f20808'
    />
    <path
      d='M19.07,234.24c3.1.41,4.42,3.78,7.9,4.13l.1,1.87c-3.9-.37-8.5-1.28-8-6Z'
      fill='#f20808'
    />
    <path
      d='M103.07,246.24c-2.27,2.15-6.9.53-10.01,1v-2c3.82-.07,7.51.91,10.01,1Z'
      fill='#f20808'
    />
    <path
      d='M156.07,245.24v2c-2.78-.43-7.07,1.11-9-1,2.03-.07,5.6-1,9-1Z'
      fill='#f20808'
    />
    <path
      d='M192.07,242.24v2c-1.8-.12-3.75.23-5.53,0s-1.38-1-1.47-1.01c1.63-1.83,4.64-.83,7-1Z'
      fill='#f20808'
    />
    <path
      d='M188.07,252.24v-3s5.01,0,5.01,0v2c-1.59.14-3.09.83-5.01,1Z'
      fill='#fc0202'
    />
    <path
      d='M182.07,243.24v2c-1.47-.1-3.08.22-4.53,0-1.81-.27-1.38-1-1.47-1.01,1.3-1.56,4.01-1.11,6-1Z'
      fill='#f20808'
    />
    <path
      d='M169.07,244.24v2c-1.46.03-2.91.11-4.37-.15-.91-.16-.57-.84-.63-.85,1.17-1.58,3.24-.95,5-1Z'
      fill='#f20808'
    />
    <path
      d='M86.07,245.24c-.17.02-1.29,1.73-3,1v-2c.78.02,1.58-.14,2.35.15l.65.85Z'
      fill='#f20808'
    />
    <path
      d='M217.07,250.24c-.15.02.05,1.08-2.5,1.08s-2.35-1.06-2.5-1.08c1.19-1.58,3.81-1.58,5,0Z'
      fill='#d70000'
    />
    <path
      d='M259.07,248.24l-.65.85c-.77.28-1.57.12-2.35.15v-2c1.7-.74,2.83.97,3,1Z'
      fill='#d70000'
    />
    <path
      d='M240.07,249.24l-.65.85c-.77.29-1.57.11-2.35.15v-2c1.71-.74,2.83.98,3,1Z'
      fill='#d70000'
    />
    <path
      d='M95.07,53.24c-13.47,21.13-24.56,43.62-35.19,66.31-7.37,15.72-13.48,32.01-21.62,47.38-5.58,10.55-13.71,20.44-16.19,32.31-2.37.38-2.27-.3-1.97-2.47,1.63-11.58,18.79-37.07,24.71-49.29,15.71-32.4,28.22-62.59,46.26-94.24,1.29-.13,2.77.19,4,0Z'
      fill='#f20000'
    />
    <path
      d='M116.07,25.24l1.01.51c-1.42,1.79-1.44,3.89-2.01,5.49-.29.81-.71.72-1,1-.54.52-2.07.77-2,2h2s1,0,1,0c-4.58,3.79-8.23,6.4-12.5,11-1.12,1.21-2.66,2.01-2.5,4-.46.36-.85,1.18-2,2-.45.32-.76.85-1,1-.68.42-.26.74-2,1-1.23.19-2.71-.13-4,0,.6-1.05-.4-1.84,2-3,5.55-2.68,2.69-1.44,3-5,.05-.62.93-.86,1-1,4.25.78,6.54-2.5,8-6,.49-.3,1.08-2.47,3-2.01v-1.98s-2-1.01-2-1.01c2.81-1.84,5.49-5.14,10-8Z'
      fill='#f20808'
    />
    <path
      d='M106.07,33.24l2,1.01v1.98c-1.92-.46-2.51,1.71-3,2.01-1.95,1.22-4.99,2.09-7,4l-.85-.59c-.19-.45-.08-.95-.15-1.41-.09-.64.16-1.54,0-2l1.94-.06.06-2.94c1.19.16,2.04-.66,3-1,1.01-.36,3.4-.61,4-1Z'
      fill='#b71717'
    />
    <path
      d='M105.07,38.24c-1.46,3.5-3.75,6.78-8,6,.3-.57.68-1.7,1-2,2.01-1.91,5.05-2.78,7-4Z'
      fill='#e8c9c9'
    />
    <path
      d='M95.07,35.24l-.04,1.36c.4.79,1.75.84,2.04,1.64.16.46-.09,1.36,0,2l-3.4,1.06-1.6-2.06c.99-1.32,2.05-2.75,3-4Z'
      fill='#d70000'
    />
    <path
      d='M96.07,45.24c-.31,3.56,2.55,2.32-3,5l-.96-3.43c.84-1.54,2.33-1.75,3.96-1.57Z'
      fill='#b71717'
    />
    <path d='M19.07,228.24l-.99-.5.99-.5c0,.32.04.69,0,1Z' fill='#fc3e3e' />
    <path
      d='M99.07,35.24l-.06,2.94-1.94.06c-.29-.8-1.64-.84-2.04-1.64l.04-1.36c.77-1.02,1.76-1.67,2-2l2,2Z'
      fill='#cf0404'
    />
    <path
      d='M107.07,23.24c-.38.62-.86,1.28-1,2h-2c.14-.48-.28-1.3.09-1.9l2.91-.1Z'
      fill='#ee5b5b'
    />
    <path
      d='M166.07,80.24l-9.38.12c-1.5.53-1.5,1.53-1.62,2.88-.06.66.03,1.34,0,2l11,1c-.11.62.11,1.38,0,2-.55,3.09-1.5,6.47-1.94,9.56s.59,6.34-1.24,9.27l-18.82,2.18c-.48,2.39.3,1.58,1.29,2.19,4.28,2.61,4.31,1.38,8.26.86,2.54-.34,2.9.3,5.44-1.05,6.39,1.15,3.21,5.68,2.97,9.47-.18,2.91-.97,8.16-.97,10.03v18c0,7.18.76,13.01,2,20.5-11.29,1.4-20.19-2.17-29.54-7.96l-6.46-9.04c-1.15-4.96-2.93-9.64-1.78-14.85,2.33-.14,1.87-1.12,1.77-3.15l-2.99,1c-1.22-10.14-1.51-21.25-1.03-31.53.14-3,1.56-5.24,1-8.95-.87-5.78-7.86-6.8-7-18.06.55-7.19,5.68-5.23,10.34-6.65,3.39-1.03,6.56-3.04,10.43-3.57,8.35-1.15,24.52,3.2,28.06,11.49.32.75.04,1.67.2,2.27Z'
      fill='#fa0606'
    />
    <path
      d='M165.07,195.24c1.16,3.48,1.28,7.34,1,11-4.31,1.41-9.5,5.55-11,10-.66.04-1.41-.1-2,0l-.5-1h-2.5s0,2,0,2c-.63.1-1.36-.09-2,0-2.68-2.47-8.8-.09-12-1l-11-8c-.04-.33.03-.67,0-1l-.5-.99-.5.99h-1c-.3-7.65-1.78-10.55,1-18,3.99-1.25,6.65-4.31,10.73-5.77,2.39-.86,8.42-2.48,10.71-2.25,8.31.84,10.85,13.52,19.56,14.02Z'
      fill='#fc0202'
    />
    <path
      d='M127.07,152.24l6.46,9.04c9.35,5.79,18.25,9.37,29.54,7.96.03.18,1.99,1.13.56,3.05-8.26,5.25-27.93-1.9-33.01-9.1-2.53-3.58-2.62-6.97-3.54-10.96Z'
      fill='#a42727'
    />
    <path
      d='M165.07,195.24c-8.7-.5-11.24-13.18-19.56-14.02-2.29-.23-8.32,1.39-10.71,2.25-4.08,1.46-6.74,4.52-10.73,5.77.17-.47-.2-1.5.18-2.29,2.47-5.14,17.05-9.43,22.3-8.69,6.06.86,8.96,6.68,12.57,10.43,2.49,2.58,4.4,1.89,5.96,6.54Z'
      fill='#fc3e3e'
    />
    <path
      d='M166.07,88.24c2.88-.56,2.21,1.55,1.94,3.43-.34,2.34-1.61,4.84-1.87,7.13-.34,3.01.54,7.32-.18,9.82-.67,2.34-3.66,1.37-5.44,1.6-1.19.16-1.24.9-1.45,1.01-2.54,1.36-2.9.72-5.44,1.05-3.95.52-3.99,1.75-8.26-.86-1-.61-1.78.2-1.29-2.19l18.82-2.18c1.82-2.93.79-6.19,1.24-9.27s1.39-6.47,1.94-9.56Z'
      fill='#e8c9c9'
    />
    <path
      d='M165.07,210.24c-1.06,2.77-5,7.43-7.63,8.87-1.72.94-10.73,3.05-12.86,3.18-4.56.27-14.59-2.96-17.57-6.49-1.31-1.56-.61-2.63-.93-3.56,2.67.4,4.61,3.01,7.08,4.47,1.19.71,2.46.32,2.92.53.19.08.47.77,1,1,.1.04.18.85,1.44,1.02,5.29.73,14.3-.02,18.56-3.02,2.92-2.06,4.74-5.38,8-6Z'
      fill='#705757'
    />
    <path
      d='M166.07,206.24c-.14,1.87-.38,2.37-1,4-3.26.62-5.08,3.94-8,6-.66.03-1.34-.04-2,0,1.5-4.45,6.69-8.59,11-10Z'
      fill='#b71717'
    />
    <path
      d='M166.07,80.24c.17.63,1,.76,1,3-3.84,2.03-7.73-2.49-12,0,.12-1.36.12-2.35,1.62-2.88l9.38-.12Z'
      fill='#b71717'
    />
    <path
      d='M136.07,216.24v1c-.46-.21-1.73.17-2.92-.53-2.47-1.46-4.41-4.06-7.08-4.47-.1-.28.09-.68,0-1l-1-1c-.08-.32.09-.7,0-1-.08-.28.04-.65,0-1l11,8Z'
      fill='#a40000'
    />
    <path
      d='M167.07,83.24c0,2.16-.94,2.65-1,3l-11-1c.03-.66-.05-1.34,0-2,4.27-2.49,8.16,2.03,12,0Z'
      fill='#e8c9c9'
    />
    <path
      d='M125.07,207.24c.03.33-.04.67,0,1,.04.35-.08.72,0,1h-2c-.04-.66.03-1.33,0-2h2Z'
      fill='#705757'
    />
    <path d='M277.07,209.24c-.02-.47,0-.92,0-1v1Z' fill='#c4c0c0' />
    <path d='M126.07,211.24c-.02-.07-.73.11-1-1l1,1Z' fill='#705757' />
    <path
      d='M174.07,47.24c-2.15-1.49-3.3-3.99-5-6v-1l1.38-.96c2.77,1.89,2.84,5.3,3.62,7.96Z'
      fill='#b71717'
    />
    <path
      d='M178.07,51.24c1.49,3.74,6.52,8.87,9.01,14.33.43.93,1.82.45,2.02,1.3.18.75-.17,1.7-.04,2.37-.65-.13-1.07-.47-1.48-.98-3.36-4.3-7.65-12.23-10.52-17.02h1Z'
      fill='#a42727'
    />
    <path
      d='M175.07,48.24c.7.23,2.03-.33,2.92.09.42.86-.16,2.29.08,2.91h-1c-.32-.53-.86-.78-1-1-.4-.63-.67-1.34-1-2Z'
      fill='#cf0404'
    />
    <path
      d='M175.07,48.24c.33.66.6,1.37,1,2-1.95-.41-1.62-1.7-2-3,.49.34.93.98,1,1Z'
      fill='#a42727'
    />
    <path d='M169.07,41.24c-.25-.29-.67-.65-1-1h1v1Z' fill='#a42727' />
    <path
      d='M190.07,71.24c-.63.03-.94-.43-1-1,.59.11.75.54,1,1Z'
      fill='#f20000'
    />
    <path d='M98.07,52.24h-1c.24-.15.55-.68,1-1v1Z' fill='#f20000' />
    <path
      d='M131.07,24.24c-.07,1.01.06,1.89-.99,2.5l-8.44,3.44-.58-.94c2.66-1.8,5.26-3.35,8-5,.65-.08,1.35.07,2,0Z'
      fill='#f20808'
    />
    <path
      d='M129.07,24.24c-2.74,1.65-5.34,3.2-8,5s-3.74,3.13-6,5h-1v-2c.29-.28.71-.19,1-1,1.34-1.93,4.84-2.52,5.77-3.24.47-.36.53-1.61,1.23-2.23,2.25-1.99,4.54-1.25,7.01-1.54Z'
      fill='#e8c9c9'
    />
    <path d='M114.07,34.24h-2c-.07-1.23,1.46-1.48,2-2v2Z' fill='#a42727' />
    <path
      d='M148.07,217.24c-.09.01-.5.9-1.48.99-3.11.29-6.39-.17-9.52,0-.53-.23-.81-.92-1-1v-1c3.2.91,9.32-1.47,12,1Z'
      fill='#b71717'
    />
    <path
      d='M155.07,216.24c.66-.04,1.34.03,2,0-4.26,3-13.27,3.76-18.56,3.02-1.25-.17-1.33-.98-1.44-1.02,3.13-.18,6.41.28,9.52,0,.98-.09,1.39-.98,1.48-.99.64-.09,1.37.1,2,0,1.69-.27,2.74-.95,3-1,.59-.1,1.34.04,2,0Z'
      fill='#a42727'
    />
    <path
      d='M153.07,216.24c-.26.05-1.31.73-3,1v-2s2.5,0,2.5,0l.5,1Z'
      fill='#b71717'
    />
    <polygon
      points='125.07 207.24 124.07 207.24 124.57 206.25 125.07 207.24'
      fill='#a40000'
    />
  </svg>
);

export default AlertIcon;