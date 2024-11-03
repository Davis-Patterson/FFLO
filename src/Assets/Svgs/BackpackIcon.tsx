import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const BackpackIcon: React.FC<IconProps> = (props) => (
  <svg
    id='BackpackIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 306.27 393.22'
    {...props}
  >
    <path
      d='M167.32,37.92c9.25,3.12,17.16,8.72,24.59,14.89,52.46,43.49,80.54,111.86,91.05,177.99,2.23,14.03,3.89,28.2,5.32,42.32-1.89-.94-6.27-2.59-8.29-2.41-2.45.21-3.15,2.04-2.24,4.19,1.19,2.83,9.8,10.63,12.46,13.34l1.44,14.64c-1.69.61-3.21,1.56-4.92,2.16-8.14,2.88-16.92-.28-25.32.96-1.87-2.61-2.95-4.65-4.52-7.6-.84-1.58-2.05-2.85-2.44-4.64-.6-2.75-.44-6.05-.96-8.88.03-.01.16-.31.41-.42,1.48-.62,3.87-.97,3.63-3-.33-2.73-3.25-1.22-4.76-.67l-6.24-42.36c-1.1-11.88,2.95-28.56-13.56-29.64-12.84-.83-25.96,2.74-38.64,4.32-8.89,1.1-17.24,1.63-26.15,1.67-9.7.05-19.23,1.51-28.82,1.22-1.79-.05-3.96-.46-5.74-.5-18.27-.37-36.52,2.18-54.73,3.61-7.12.56-15.04.61-22.06,1.7-1.44.22-2,1.42-2.67,2.61-5.07,9.17-2.76,26.3-2.98,36.86-.3,13.92-.45,26.11.47,40.07.05.8.57,2.63.48,3.24-.01.1-.36.49-.42.89-.34,2.16.53,1.67.9,2.71.48,1.35,1.25,6.63,1.44,8.28.48,4.39.16,9.07.48,13.56-11.43-.7-23.62-2.24-34.8.84-2.6.72-5.08,1.71-7.44,3C5.53,292.09-2.93,248.88,1,207.48c2.53-26.71,7.45-55.75,16.79-80.89,10.5-28.24,28.32-53.79,54.24-69.72-.03.83-.12,5.45.11,5.77.17.24.46.24.72.24.78,0,3.02-.56,3.97-.73.03.55-.36.62-.69.87-1.33,1-2.83,1.81-4.19,2.77-27.23,19.46-40.92,48.65-49.73,80.11-13.72,49.02-15.82,102.45-4.32,152.17.75,3.25,1.91,9.36,3.17,12.19,1.09,2.44,4.08,1.9,3.89-1-.18-2.72-2.05-7.73-2.74-10.71-12.17-52.51-9.64-107.39,6.06-158.83,10.48-34.33,28.43-64.31,62.08-79.77.36-.16.75-.13.63-.68.14-.03.34.03.48,0,5.3-1.33,10.44-3.83,16.08-5.16,33.43-7.89,63.14-.95,88.21,22.2,44.45,41.04,65.53,119.57,70.19,178.21.71,8.98.63,17.95,1.2,26.88.13,2-.68,4.93,2.51,4.42,2.3-.36,1.61-5.5,1.58-7.32-.84-49.95-11.57-102.55-32.68-147.8-14.66-31.41-38.8-65.09-72.21-78.03-2.01-.78-4.37-1.2-6.24-2.28,1.49-.06,3.29-.35,4.8-.48.08.37.54.26.72,0,.35-.03,1.85-.05,1.93-.39.31-3.76.19-7.86-.25-11.61ZM189.88,154.07c-3.77.15-7.64-.19-11.4,0-9.3.49-18.95,2.42-28.32,3.12-15.57,1.16-31.24,2.05-46.8,2.88-6.04.32-12.1.43-18.12.96.11,3.55-.13,7.14,0,10.69.15,4.38.74,8.8.98,13.18.19,3.44-.1,6.88.23,10.33.2,2.05.69,4.08.97,6.11,3.43.34,6.8-.52,10.19-.71,19.73-1.1,39.56-1.88,59.28-3.36,12.34-.93,24.52-3.02,36.84-4.08.25-8.05-1.71-15.92-2.64-23.88-.37-3.17-.7-6.42-.96-9.6-.15-1.85-.18-3.78-.24-5.64Z'
      fill='#b3ddcb'
    />
    <path
      d='M291.64,302.88c3.34,21.44,7.48,62.89-10.67,78.73-10.17,8.87-32.65,8-45.6,7.9-30.94-.23-61.96-.69-92.88-.96-14.23-.12-28.58-.32-42.73.73-17.83,1.32-37.13,6.6-54.85,2.29-23.85-5.8-29.25-38.28-32.63-58.69,2.36-1.29,4.84-2.28,7.44-3,11.18-3.08,23.37-1.54,34.8-.84.99,13.59,6.22,18.01,19.15,21.05,14.13,3.32,28.75,2.72,43.12,2.7,24.47-.03,49.42.33,73.69-2.63,8.58-1.05,17.12-3.13,25.68-4.08,17.58-1.95,27.91,1.23,34.27-18.53l2.57-9.55c1.12,2.43,2.08,3.43,4.92,3.12,1.86-.2,4.25-2.07,5.36-3.52,3.3-4.29.51-6.98-1.69-10.72-.18-.3-.15-.82-.19-.88,8.4-1.24,17.18,1.93,25.32-.96,1.7-.6,3.23-1.55,4.92-2.16Z'
      fill='#a4854b'
    />
    <path
      d='M167.32,37.92c.44,3.75.56,7.85.25,11.61-.09.34-1.58.35-1.93.39-.04,0-.32-.03-.72,0-1.51.13-3.31.42-4.8.48-1.75.07-6.23.24-7.57-.71-.33-.24-.76-1.14-1.07-1.21l-.72-3.72v-8.64c0-.5-.64-1.65-.72-2.04-2.96-14.47-13.58-25.36-29.33-21.77-14.63,3.34-31.61,19.61-32.11,35.21-.1,3.23.33,5.18,1.44,8.16.45,1.22,1.07,2.36,1.44,3.6-.14.03-.34-.03-.48,0-4.55,1.04-9.56,2.05-14.16,2.88-.95.17-3.2.73-3.97.73-.27,0-.55,0-.72-.24-.22-.32-.13-4.94-.11-5.77.43-14.38,5.29-25.68,14.41-36.59,25.92-31.03,75.56-27.44,80.87,17.63Z'
      fill='#a4854b'
    />
    <path
      d='M288.28,273.12c2.25,1.12,5.4,3.3,7.61,4.75,1.97,1.29,8.89,5.83,9.82,7.46,2.45,4.27-3.78,8.77-7.51,8.9-2.96.1-6.05-3.99-8-5.98-2.66-2.71-11.26-10.51-12.46-13.34-.9-2.15-.21-3.97,2.24-4.19,2.02-.18,6.4,1.47,8.29,2.41ZM282.93,273.87c-2.31.41-1.11,5.06,1.75,4.18,2.13-.66.61-4.59-1.75-4.18Z'
      fill='#aaa79c'
    />
    <path
      d='M252.76,280.8c-2.28.83-4.54,1.83-6.84,2.64-44.79,15.88-92.87,19.28-140.15,19.93-17.02.23-35.3-1.02-52.1-.02-.53.03-1.03.2-1.55.25.09-.61-.42-2.45-.48-3.24-.92-13.96-.77-26.15-.47-40.07.23-10.55-2.08-27.68,2.98-36.86.66-1.2,1.23-2.39,2.67-2.61,7.01-1.09,14.94-1.14,22.06-1.7,18.21-1.43,36.46-3.98,54.73-3.61,1.78.04,3.95.45,5.74.5,9.59.29,19.12-1.17,28.82-1.22,8.91-.04,17.26-.57,26.15-1.67,12.68-1.57,25.8-5.15,38.64-4.32,16.51,1.07,12.47,17.75,13.56,29.64l6.24,42.36Z'
      fill='#bcb961'
    />
    <path
      d='M253.48,284.88c.52,2.83.36,6.13.96,8.88l-2.63-3.25c-2.71-2.33-4.95-.88-5.29,2.41-.57,5.62,4,19.71,6.48,25.08l-2.57,9.55c-6.36,19.76-16.69,16.58-34.27,18.53-8.56.95-17.1,3.03-25.68,4.08-24.27,2.96-49.22,2.6-73.69,2.63-14.37.02-28.99.62-43.12-2.7-12.94-3.04-18.16-7.46-19.15-21.05-.33-4.48,0-9.17-.48-13.56-.18-1.66-.96-6.93-1.44-8.28,16.36-.16,32.73.21,49.09,0,48.95-.61,106.14-3.71,151.79-22.33Z'
      fill='#bcb961'
    />
    <path
      d='M189.88,154.07c.06,1.86.09,3.79.24,5.64.26,3.18.59,6.43.96,9.6.92,7.95,2.88,15.83,2.64,23.88-12.32,1.06-24.5,3.15-36.84,4.08-19.71,1.49-39.55,2.26-59.28,3.36-3.39.19-6.76,1.04-10.19.71-.28-2.03-.77-4.06-.97-6.11-.33-3.44-.05-6.89-.23-10.33-.24-4.38-.83-8.8-.98-13.18-.13-3.55.11-7.14,0-10.69,6.02-.53,12.08-.64,18.12-.96,15.56-.83,31.23-1.72,46.8-2.88,9.38-.7,19.02-2.63,28.32-3.12,3.76-.2,7.63.14,11.4,0ZM176.37,158.22c-.95.51-6.44-.19-5.93,1.49.27.91,5.11-.12,6.07.08.97-.29.75-1.56-.13-1.57ZM183.64,159.59c.11.11-.25,3.05,1.08,2.64.62-.19.37-3.6.03-3.86-.52-.39-4.14-.61-3.74.61.25.78,2.54.51,2.63.61ZM165.04,159.36c-1.52.03-3.04,0-4.56,0-.06,0-.65.56-.58.81.02.13.54.63.58.63h4.56c1.35,0,2.29-1.26.9-1.65-.5-.14-.76.21-.9.21ZM156.01,160.77c.27-.41,0-1.07-.58-1.18-1-.19-4.18.05-5.28.24-.74.13-.83,1.02-.37,1.33.24.17,4.49-.07,5.17-.13.22-.02.99-.16,1.05-.26ZM145.48,160.32c-1.23.07-8.74-.21-5.64,1.92l5.24-.51c.55-.17.39-.94.39-1.41ZM134.88,161.31c-.35-.22-5.58.22-6.04.49-.84.5-.44,1.07.42,1.17,1.07.12,3.95-.06,5.05-.26.79-.14,1.05-1.1.57-1.4ZM122.15,162.31c-.78.05-2.98.26-3.62.46-1.06.34-.65,1.32.43,1.41.42.03,4.58-.43,4.99-.55.52-.15.95-.92.41-1.28-.44-.29-1.65-.08-2.21-.04ZM114.03,164.87c.15-.16.12-1.41-.57-1.42-.37,0-5.22.88-5.49,1-.83.37-.27,1.33.41,1.37.4.02,5.45-.74,5.65-.95ZM97.27,166.76c.27.17,6.15-.41,6.34-.67.34-.48.13-1.1-.5-1.22s-4.87.31-5.46.54c-.64.25-.83,1.06-.39,1.34ZM186.06,172.77c.46.32,1.2-.04,1.17-.78-.02-.54-1-5.35-1.17-5.57-.61-.81-1.26-.29-1.23.73.02.57.99,5.47,1.23,5.63ZM93.16,166.32c-.19-.2-3.42.59-3.62.87-.38.53-.43,3.46.26,3.81,1.56.8.7-2.27,1-2.73.35-.54,3.03-.03,2.37-1.95ZM90.76,179.88c.21-.68,0-4,0-5.04,0-.06-.56-.65-.81-.58-.13.02-.63.54-.63.58v4.8c0,.8,1.27.78,1.44.24ZM187.37,176.88c-.39.12-.39.72-.38,1.06.02.57.99,5.05,1.19,5.31.21.27.51.39.85.34.35-.22.37-.42.36-.8-.02-.54-1-5.35-1.17-5.57-.19-.25-.54-.43-.85-.34ZM91,189.36v-5.16c0-.62-1.06-1.3-1.39-.19-.17.56-.05,5.1.2,5.34.11.11.9-.04,1.19.01ZM190.33,187.7c-.16-.13-.88.02-1.18-.03l.24,2.64c-2.54-.62-3.76,1.65-.6,1.44.36-.02,1.79-.25,1.94-.46.28-.39-.23-3.45-.4-3.59ZM175.99,190.83c-.93,2.74,4.57.61,6.08,1.17.69,0,.84-1.01.37-1.33-.84-.57-5.2.3-6.45.17ZM171.36,192.44c.46-.81.14-1.35-.8-1.43-1.52-.12-3.84.7-5.49.54-.52.16-.56,1.03-.17,1.3.71.49,5.28-.51,6.46-.4ZM158.87,192.06c-.99.05-4.47.11-4.99.54-.67.55.15,1.41.83,1.33.96-.51,5.61.1,5.89-.86.31-1.08-1.07-1.04-1.72-1ZM90.04,192.72v3.48c0,.67,3.89,1.06,4.07-.03.19-1.17-2.28-.65-2.59-.84-.63-.39.44-3.13-1.47-2.61ZM142.96,192.72c-.58.23-.39,1.44,0,1.44h6c.47,0,.87-1.44.24-1.44h-6.24ZM137.92,192.96c-.64-.2-3.6,0-4.56,0-.12,0-1.64.39-1.7.46-.4.56.02,1.36.74,1.24,1.27-.61,4.88.14,5.74-.48.34-.24.13-1.12-.22-1.23ZM127.23,193.69c-.23-.26-6.28.21-6.61.45-.43.32-.29,1.14.06,1.23.71.17,6.16-.29,6.45-.72.13-.18.18-.86.1-.96ZM109.48,196.32h3.48c.62-.5,3.69.22,3.24-1.31-.28-.93-5.34.06-6.32-.1-.55.18-.38.94-.39,1.41ZM98.56,196.8c.88.25,4.52,0,5.76,0,1,0,1.18-1.17.45-1.41-.4-.13-5.47-.11-5.92.02-.69.2-.9,1.22-.29,1.39Z'
      fill='#fdfefe'
    />
    <path
      d='M151.48,48.48c.31.07.74.97,1.07,1.21,1.34.95,5.82.78,7.57.71,1.87,1.08,4.22,1.51,6.24,2.28,33.41,12.94,57.55,46.62,72.21,78.03,21.11,45.24,31.84,97.85,32.68,147.8.03,1.82.71,6.95-1.58,7.32-3.19.5-2.38-2.43-2.51-4.42-.57-8.93-.49-17.91-1.2-26.88-4.66-58.64-25.74-137.17-70.19-178.21-25.07-23.15-54.78-30.09-88.21-22.2-5.64,1.33-10.77,3.83-16.08,5.16-.37-1.24-.99-2.38-1.44-3.6,15.27-6.73,32.19-9.04,48.85-8.41,3.58.14,9.17.46,12.59,1.21Z'
      fill='#aaa79c'
    />
    <path
      d='M91,59.28c.12.55-.27.52-.63.68-33.65,15.47-51.6,45.44-62.08,79.77-15.7,51.44-18.23,106.32-6.06,158.83.69,2.98,2.55,7.99,2.74,10.71.2,2.9-2.8,3.44-3.89,1-1.26-2.82-2.42-8.93-3.17-12.19-11.5-49.71-9.4-103.15,4.32-152.17,8.81-31.46,22.49-60.66,49.73-80.11,1.36-.97,2.86-1.78,4.19-2.77.33-.25.72-.32.69-.87,4.6-.83,9.61-1.84,14.16-2.88Z'
      fill='#aaa79c'
    />
    <path
      d='M252.76,280.8c1.51-.55,4.43-2.07,4.76.67.25,2.03-2.14,2.37-3.63,3-.25.11-.38.41-.41.42-45.65,18.62-102.84,21.72-151.79,22.33-16.36.2-32.73-.17-49.09,0-.37-1.04-1.24-.55-.9-2.71.06-.4.41-.79.42-.89.52-.05,1.02-.22,1.55-.25,16.8-.99,35.08.25,52.1.02,47.28-.65,95.36-4.05,140.15-19.93,2.3-.81,4.55-1.81,6.84-2.64Z'
      fill='#aaa79c'
    />
    <path
      d='M253,318c-2.48-5.37-7.04-19.46-6.48-25.08.33-3.29,2.58-4.74,5.29-2.41l2.63,3.25c.39,1.79,1.6,3.06,2.44,4.64,1.57,2.95,2.65,4.99,4.52,7.6.04.06.01.58.19.88,2.2,3.74,4.99,6.42,1.69,10.72-1.11,1.45-3.49,3.32-5.36,3.52-2.85.31-3.8-.69-4.92-3.12ZM250.05,294.28c-2.34.51-.6,4.89,1.81,4.24,2.22-.6.99-4.85-1.81-4.24Z'
      fill='#aaa79c'
    />
    <path
      d='M165.64,49.92c-.18.26-.64.37-.72,0,.4-.03.68,0,.72,0Z'
      fill='#aaa79c'
    />
    <path
      d='M150.04,34.08c.08.39.72,1.54.72,2.04v8.64l.72,3.72c-3.42-.75-9.01-1.07-12.59-1.21-16.66-.63-33.58,1.68-48.85,8.41-1.11-2.98-1.54-4.93-1.44-8.16,11.13-4.88,22.58-9.27,34.56-11.64,5.36-1.06,11.46-1.89,16.91-2.05,3.34-.1,6.64.25,9.97.25Z'
      fill='#b3ddcb'
    />
    <path
      d='M282.93,273.87c2.36-.42,3.89,3.52,1.75,4.18-2.86.88-4.07-3.77-1.75-4.18Z'
      fill='#b3ddcb'
    />
    <path
      d='M158.87,192.06c.65-.03,2.03-.08,1.72,1-.28.97-4.93.36-5.89.86-.67.08-1.5-.78-.83-1.33.52-.42,4-.48,4.99-.54Z'
      fill='#b3ddcb'
    />
    <path
      d='M175.99,190.83c1.25.14,5.62-.74,6.45-.17.46.32.32,1.34-.37,1.33-1.51-.56-7.01,1.57-6.08-1.17Z'
      fill='#b3ddcb'
    />
    <path
      d='M142.96,192.72h6.24c.63,0,.23,1.44-.24,1.44h-6c-.39,0-.58-1.21,0-1.44Z'
      fill='#b3ddcb'
    />
    <path
      d='M171.36,192.44c-1.18-.11-5.74.89-6.46.4-.4-.27-.35-1.14.17-1.3,1.64.16,3.96-.66,5.49-.54.94.08,1.27.62.8,1.43Z'
      fill='#b3ddcb'
    />
    <path
      d='M109.48,196.32c0-.47-.16-1.22.39-1.41.98.15,6.05-.83,6.32.1.46,1.54-2.61.81-3.24,1.31h-3.48Z'
      fill='#b3ddcb'
    />
    <path
      d='M98.56,196.8c-.61-.17-.4-1.19.29-1.39.44-.13,5.52-.14,5.92-.02.73.24.56,1.41-.45,1.41-1.24,0-4.88.25-5.76,0Z'
      fill='#b3ddcb'
    />
    <path
      d='M127.23,193.69c.09.1.03.78-.1.96-.3.43-5.74.89-6.45.72-.35-.09-.49-.91-.06-1.23.33-.24,6.38-.71,6.61-.45Z'
      fill='#b3ddcb'
    />
    <path
      d='M137.92,192.96c.35.11.56.98.22,1.23-.87.62-4.48-.13-5.74.48-.72.12-1.14-.68-.74-1.24.05-.08,1.58-.46,1.7-.46.96,0,3.92-.2,4.56,0Z'
      fill='#b3ddcb'
    />
    <path
      d='M97.27,166.76c-.44-.28-.25-1.09.39-1.34.59-.23,4.86-.66,5.46-.54.63.12.84.73.5,1.22-.19.26-6.07.84-6.34.67Z'
      fill='#b3ddcb'
    />
    <path
      d='M176.37,158.22c.88,0,1.1,1.28.13,1.57-.96-.2-5.8.84-6.07-.08-.5-1.68,4.99-.98,5.93-1.49Z'
      fill='#b3ddcb'
    />
    <path
      d='M145.48,160.32c0,.47.15,1.23-.39,1.41l-5.24.51c-3.1-2.13,4.4-1.85,5.64-1.92Z'
      fill='#b3ddcb'
    />
    <path
      d='M165.04,159.36c.14,0,.4-.35.9-.21,1.38.39.44,1.65-.9,1.65h-4.56s-.56-.51-.58-.63c-.07-.25.52-.81.58-.81,1.52,0,3.04.03,4.56,0Z'
      fill='#b3ddcb'
    />
    <path
      d='M93.16,166.32c.66,1.93-2.02,1.41-2.37,1.95-.3.46.56,3.53-1,2.73-.69-.35-.64-3.29-.26-3.81.2-.28,3.43-1.07,3.62-.87Z'
      fill='#b3ddcb'
    />
    <path
      d='M122.15,162.31c.57-.04,1.77-.25,2.21.04.53.35.11,1.13-.41,1.28-.42.12-4.58.58-4.99.55-1.08-.09-1.49-1.07-.43-1.41.64-.2,2.84-.41,3.62-.46Z'
      fill='#b3ddcb'
    />
    <path
      d='M134.88,161.31c.48.3.23,1.26-.57,1.4-1.09.2-3.97.38-5.05.26-.86-.1-1.26-.66-.42-1.17.45-.27,5.69-.71,6.04-.49Z'
      fill='#b3ddcb'
    />
    <path
      d='M156.01,160.77c-.06.1-.84.24-1.05.26-.68.06-4.93.3-5.17.13-.46-.31-.37-1.2.37-1.33,1.1-.19,4.28-.43,5.28-.24.57.11.85.77.58,1.18Z'
      fill='#b3ddcb'
    />
    <path
      d='M186.06,172.77c-.24-.16-1.21-5.06-1.23-5.63-.04-1.01.62-1.53,1.23-.73.17.23,1.14,5.04,1.17,5.57.03.75-.71,1.1-1.17.78Z'
      fill='#b3ddcb'
    />
    <path
      d='M114.03,164.87c-.2.21-5.25.97-5.65.95-.68-.03-1.24-.99-.41-1.37.27-.12,5.12-1,5.49-1,.69,0,.72,1.26.57,1.42Z'
      fill='#b3ddcb'
    />
    <path
      d='M187.37,176.88c.3-.09.66.09.85.34.17.23,1.15,5.03,1.17,5.57.01.38,0,.58-.36.8-.34.05-.64-.07-.85-.34s-1.17-4.75-1.19-5.31c-.01-.35-.02-.95.38-1.06Z'
      fill='#b3ddcb'
    />
    <path
      d='M183.64,159.59c-.1-.1-2.38.17-2.63-.61-.4-1.22,3.22-1,3.74-.61.35.26.59,3.66-.03,3.86-1.32.41-.96-2.53-1.08-2.64Z'
      fill='#b3ddcb'
    />
    <path
      d='M190.33,187.7c.17.14.68,3.2.4,3.59-.15.2-1.58.43-1.94.46-3.16.21-1.94-2.06.6-1.44l-.24-2.64c.3.05,1.02-.11,1.18.03Z'
      fill='#b3ddcb'
    />
    <path
      d='M90.04,192.72c1.91-.53.84,2.22,1.47,2.61.32.2,2.79-.33,2.59.84-.18,1.08-4.07.7-4.07.03v-3.48Z'
      fill='#b3ddcb'
    />
    <path
      d='M90.76,179.88c-.17.54-1.44.56-1.44-.24v-4.8s.51-.56.63-.58c.25-.07.81.52.81.58,0,1.04.21,4.36,0,5.04Z'
      fill='#b3ddcb'
    />
    <path
      d='M91,189.36c-.28-.05-1.07.09-1.19-.01-.25-.24-.37-4.77-.2-5.34.33-1.11,1.39-.43,1.39.19v5.16Z'
      fill='#b3ddcb'
    />
    <path
      d='M250.05,294.28c2.8-.61,4.03,3.64,1.81,4.24-2.41.65-4.15-3.72-1.81-4.24Z'
      fill='#bcb961'
    />
  </svg>
);

export default BackpackIcon;
