import React from 'react';

interface SquirrelIconProps extends React.SVGProps<SVGSVGElement> {}

const SquirrelIcon: React.FC<SquirrelIconProps> = (props) => (
  <svg
    id='SquirrelIcon'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 85.8 98.31'
    className='animal-icon'
    {...props}
  >
    <path
      d='M51.3,92.5c-.41,0-.76.22-1.12.38-3.69,1.64-7.53,2.67-11.55,3.11-2.11.23-4.2.3-6.29-.04-.89-.17-1.81-.27-2.67-.54-2.26-.71-4.4-1.64-6.03-3.47-.37-.41-.71-.87-1.25-1.09-.41-.58-.85-1.15-1.24-1.75-2.58-4-4.14-8.32-3.95-13.15.16-4.17,1.96-7.39,5.63-9.49.17-.1.34-.2.53-.32-.15-1.91-.43-3.8-.41-5.71,2.02.54,4.01,1.21,6.1,1.51,1.84.26,3.64.28,5.4-.34,1.39-.49,2.32-1.46,2.94-2.78.82-1.73.9-3.58.64-5.38-.29-1.98-.9-2.76-2.63-3.06-.19.08-.3.24-.42.41-.74.98-1.45,1.99-2.52,2.66-1.29.8-2.64,1.56-4.17,1.67-1.73.12-3.48.15-5.21-.02.2-3.2.99-6.27,2.09-9.27.12-.06.21-.13.06-.25-.07.03-.14.07-.21.1-1.76.47-3.5.98-5.33,1.16-1.55.15-3.09.16-4.63.06.46-.21.95-.38,1.39-.63,1.41-.8,1.87-2.55,1.07-4-.3-.09-.61-.12-.94.04-.62,1.24-1.49,2.27-2.65,3.1-.58.42-1.31.57-1.79,1.13-2.21-.31-4.39-.77-6.52-1.43-1.2-.37-2.25-.98-3.09-1.94,1-.19,1.86-.63,2.62-1.32.16-.66-.09-1.08-.73-1.32-.6.54-1.25.99-2,1.18-.61-.2-.82-.67-1-1.17.15-.44.29-.88.54-1.3.36-.6.14-1-.55-1.34-.46.07-.6.64-1.08.69-.2-.65.03-1.27.2-1.87,1.75-6.3,5.36-11.24,10.86-14.8,1.34-.87,2.78-1.55,4.29-2.07,2.1-.61,4.22-1.03,6.42-.97.76-.1,1.51-.03,2.27.01,2.53.07,4.89.72,7.06,2.06.16.1.38.09.57.12.07.3.31.44.53.62,3.04,2.53,4.58,5.75,4.4,9.74-.02.43,0,.86,0,1.29.62.22,1.14-.08,1.67-.14.44,0,.88.01,1.32,0,2.51-.12,4.87.46,7.19,1.36,1.6.62,3.14,1.35,4.61,2.22,1.64.98,3.25,2.03,4.64,3.32,1.46,1.35,2.88,2.75,4.15,4.3,1.86,2.28,3.25,4.78,4.27,7.53,1.33,3.57,1.94,7.28,2.08,11.04.14,3.84.23,7.7-.65,11.52-1,4.36-2.85,8.26-5.79,11.6-2.42,2.74-5.27,4.96-8.56,6.59-.22.11-.42.23-.55.44ZM23.22,29.69c-.05-1.6-.56-3.1-1.81-4.31-1.35-1.3-2.95-1.79-4.8-1.7-1.67.08-3.05.81-4.05,2.03-1.48,1.82-1.98,3.99-1.32,6.29.96,3.34,4.83,5.37,8.22,3.81,2.61-1.21,3.61-3.32,3.76-6.11ZM63.49,76.26c-.19-.26-.34-.24-.58-.18-.27.9-.56,1.84-.83,2.78-.27.94-1.06,1.62-1.4,2.58.51.2.7-.08.93-.37,1.1-1.42,1.56-3.09,1.88-4.81ZM58.57,84.03c-.7.5-1.19,1.14-1.66,1.81-.45.64-1.29.98-1.55,1.94,1.07-.1,1.5-.89,1.99-1.47.55-.64,1.33-1.23,1.21-2.28ZM62.26,73.03c.79-1.29,1.02-2.72,1.2-4.15.03-.22-.2-.32-.6-.24-.24,1.42-.73,2.85-.6,4.39ZM58.8,46.59c.21-.46.16-.66,0-.87-.71-.86-1.41-1.72-2.12-2.58-.19-.23-.43-.37-.82-.03.82,1.22,1.67,2.42,2.94,3.47ZM64.9,60.25c-.56-.08-.66.17-.63.48.08,1.19.17,2.38.28,3.56.02.24.21.43.57.32.29-1.48-.18-2.92-.21-4.36ZM55.93,83.03c-1.23.81-1.82,2.21-2.87,3.19-.15.14-.11.37.06.53.98-.49,2.7-2.63,2.81-3.72ZM59.25,76.05c-.33,0-.52-.04-.54,0-.56,1.09-1.1,2.2-1.63,3.3-.07.16,0,.31.22.48,1.05-1.01,1.55-2.28,1.95-3.79ZM55.46,60.46c.33-1.95-.71-3.83-2.02-3.73.41.61.79,1.19,1.18,1.77.38.56,0,1.43.84,1.96ZM61.08,69.23c-.39.48-1.24,3.38-1.26,4.06.52.24.64-.2.73-.5.32-1.11.97-2.2.53-3.56ZM61.02,61.84c-.6.22-.64.59-.59.94.14.86.23,1.72.26,2.59,0,.27.15.55.61.48.23-1.33-.07-2.62-.28-4.01ZM63.9,72.34c.11,0,.17.02.19,0,.8-1.09,1.03-2.35,1.07-3.65,0-.31-.24-.37-.57-.25-.12.63-.25,1.28-.35,1.93-.1.65-.69,1.24-.34,1.97ZM62.68,61.7c-.36,1.23.13,2.44.24,3.66.02.19.22.32.46.25.1-.5-.02-3.14-.18-3.6-.07-.19-.19-.34-.52-.3ZM59.24,79.96c.45.22.73.09.84-.25.32-.94.86-1.79,1.23-2.71.06-.15.03-.31-.14-.45-.08,0-.26-.05-.3,0-.8,1-1.08,2.24-1.63,3.4ZM64.18,58.12c-.78-2.99-.87-3.23-1.56-3.7-.09,1.36.51,2.43.91,3.55.09.26.29.37.65.15ZM49.32,39.96c-.39.75.17.99.47,1.29.66.67,1.27,1.47,2.3,1.62.12-.3.05-.46-.08-.55-.99-.63-1.69-1.63-2.69-2.36ZM48.87,46.24c.63.89,1.23,1.77,1.86,2.63.17.24.43.37.71.11-.21-.58-1.53-2.58-1.88-2.84-.17-.12-.36-.17-.69.1ZM60.75,55.41c-.19.77.37,1.28.62,1.85.24.55-.04,1.39.8,1.69.26-1.45-.33-2.92-1.42-3.54ZM57,49.82c.47,1.17,1.11,2.21,1.98,3.24.16-.82-.2-1.67-1.21-3.18-.16-.23-.32-.34-.77-.06ZM54.74,79.05c.65.17.8-.25.95-.61.36-.82,1.01-1.58.77-2.66-.53.43-1.34,2.01-1.71,3.26ZM56.79,55.12c-.6.18-.73.42-.65.72.27,1.13.6,2.22,1.53,3.03.07-1.34-1.05-2.33-.87-3.75ZM43,41.11c.01-1.04-1.11-2.24-2.19-2.35.18.78,1.24,1.91,2.19,2.35ZM56.75,46.57c-.65-1.11-1.28-2.22-2.41-3.02-.09.23-.19.37-.15.44.38.74.96,1.34,1.5,1.96.26.3.49.71,1.07.63ZM60.89,52.29c-.37-1.05-.78-2.14-1.38-3.15-.33.14-.47.26-.48.56.43.9.88,1.84,1.29,2.7.23.11.34.08.56-.11ZM59.94,58.64c.26-.73-.21-1.23-.47-1.77-.27-.55,0-1.38-.94-1.77-.09,1.5.57,2.56,1.41,3.54ZM48.78,38.24c-.49-1.01-1.34-1.57-2.27-2-.32-.15-.75-.14-.68.52,1.11.21,1.81,1.25,2.95,1.48ZM58.96,63.12c-.34,1.15-.27,2.23.19,3.25.42.04.57-.19.5-.43-.26-.93,0-1.99-.69-2.82ZM42.23,37.81c.03.09.02.24.1.3.71.62,1.43,1.24,2.17,1.83.15.12.38.09.5-.23-.55-.9-1.48-1.43-2.33-2.04-.13-.1-.3-.02-.43.14ZM50.63,39.19c.46.9,1.62,2.02,2.46,2.41.02-.65.02-.65-1.38-1.97-.29-.27-.53-.75-1.07-.43ZM47.32,41.03c.03,1.19,1.28,2.41,2.43,2.68.09-.1.13-.25.05-.33-.76-.73-1.53-1.46-2.49-2.35ZM62.16,51.22c-.08-1.13-.65-2.05-1.21-2.96-.07-.12-.29-.09-.54.17.32,1.03.97,1.94,1.75,2.79ZM51.19,45.63c-.03,1,.96,2.36,1.94,2.67-.1-.79-1.22-2.33-1.94-2.67ZM46.6,39.69c.23-.96-.33-1.28-.73-1.54-.53-.34-.88-1.14-1.94-.87.8.95,1.77,1.48,2.67,2.41ZM54.36,40.14c-.45-.64-1.81-1.85-2.53-2.23-.16.84.55,1.11.93,1.52.4.43.82.99,1.6.72ZM47.69,35.88c.24.62.87.8,1.31,1.16.97.8,1,.76,1.52.58-.77-1.06-2.03-1.85-2.83-1.74ZM56.92,52.62c-.15-.95-.44-1.83-1.16-2.48-.04-.04-.2.06-.44.13.36.93.6,1.86,1.6,2.35ZM51.77,85.07c.86-.11,1.41-.65,2.33-2.15-.76-.14-1.29.33-2.33,2.15ZM58.79,69.7c-.46.6-.85,2.12-.81,2.9.37.12.5-.14.6-.4.28-.76.6-1.52.21-2.5ZM54.64,47.2c.27-.2.31-.41.17-.57-.58-.65-1.1-1.39-1.9-1.79-.22.24-.21.45-.08.6.55.65,1.11,1.3,1.81,1.76ZM45.68,41.98c-.59.68-.19.97.08,1.27.9,1,1.01,1.05,1.69.84-.49-.75-1.26-1.21-1.77-2.12ZM57.01,70.14c-.54-.2-.68.05-.77.32-.23.71-.27,1.41.03,2.25.69-.84.41-1.76.74-2.57ZM56.89,65.78c.33-1.76.24-2.24-.44-2.43-.13.8-.31,1.58.44,2.43ZM54.14,75.78c-.31-.36-.6-.27-.75-.02-.27.5-.81.95-.49,1.74.69-.48.81-1.22,1.24-1.73ZM53.73,51.04q.71,1.18,1.35.98c-.19-.56-.52-1.01-.91-1.38-.24.08-.34.19-.44.41ZM52.08,81.89c-1.08.01-1.46.43-1.31,1.32.56-.26.88-.72,1.31-1.32Z'
      fill='#cb8e50'
    />
    <path
      d='M51.3,92.5c.13-.21.33-.33.55-.44,3.29-1.63,6.14-3.84,8.56-6.59,2.95-3.34,4.8-7.24,5.79-11.6.87-3.82.78-7.68.65-11.52-.14-3.76-.75-7.48-2.08-11.04-1.02-2.75-2.41-5.25-4.27-7.53-1.27-1.55-2.69-2.95-4.15-4.3-1.4-1.29-3-2.35-4.64-3.32-1.47-.88-3.01-1.6-4.61-2.22-2.32-.9-4.69-1.48-7.19-1.36-.44.02-.88,0-1.32,0,.8-3.67,1.84-7.26,3.37-10.7.98-2.22,2.05-4.41,3.51-6.38.32.56.8.86,1.41.95,1.23-.26,2.2-.93,3.16-1.67,1.56-1.21,2.78-2.73,4.03-4.23.76-.92,1.53-1.82,2.25-2.67.57-.08.87.1.97.54,0,.25-.14.4-.24.57-1.22,1.97-2.34,3.98-2.93,6.25-.23.88-.34,1.77.06,2.58.69.24,1.21.13,1.73-.14.97-.5,1.81-1.18,2.52-1.99.96-1.11,1.86-2.29,2.81-3.41.87-1.03,1.6-2.21,2.82-2.89.1-.05.22-.04.32-.06.32.17.54.38.57.77-.27.56-.58,1.12-.83,1.7-.83,1.96-1.48,3.95-1.3,6.13.12,1.37.83,2.42,2.05,2.8.56.17,1.14.37,1.75.3-1.08,5.22.05,10.05,2.59,14.63,1.65,2.98,3.74,5.66,5.86,8.31,2.14,2.69,4.32,5.35,6.15,8.26,2.5,3.98,4.06,8.26,4.47,12.98.41,4.72-.16,9.26-2.14,13.55-3.33,7.22-8.88,11.86-16.62,13.8-3.12.78-6.29,1.14-9.5.95-2.07-.12-4.14-.34-6.12-1.01Z'
      fill='#cb803b'
    />
    <path
      d='M66.6,21.03c-.61.07-1.19-.13-1.75-.3-1.22-.37-1.93-1.43-2.05-2.8-.19-2.18.47-4.17,1.3-6.13.25-.59.56-1.15.83-1.7-.03-.39-.25-.59-.57-.77-.1.02-.22,0-.32.06-1.23.68-1.95,1.86-2.82,2.89-.95,1.12-1.85,2.3-2.81,3.41-.71.82-1.55,1.49-2.52,1.99-.51.27-1.04.38-1.73.14-.4-.81-.29-1.7-.06-2.58.59-2.26,1.72-4.28,2.93-6.25.1-.17.24-.32.24-.57-.1-.44-.39-.63-.97-.54-.72.85-1.49,1.75-2.25,2.67-1.24,1.5-2.47,3.02-4.03,4.23-.96.74-1.93,1.41-3.16,1.67-.61-.09-1.09-.39-1.41-.95,1.37-2.33,3.14-4.32,5.09-6.17,4.14-3.92,9.03-6.38,14.62-7.38,2.63-.47,5.29-.65,7.99-.42,2.83.24,5.61.71,8.33,1.51.15.04.31.08.46.13,1.54.51,1.69,1.34.43,2.49-5.81.2-9.49,3.76-12.59,8.18-1.53,2.18-2.51,4.61-3.17,7.18Z'
      fill='#eed49c'
    />
    <path
      d='M23.08,55.09c1.74.17,3.48.14,5.21.02,1.53-.1,2.88-.87,4.17-1.67,1.07-.67,1.78-1.67,2.52-2.66.12-.16.23-.32.42-.41,1.73.3,2.34,1.08,2.63,3.06.26,1.79.17,3.65-.64,5.38-.63,1.32-1.55,2.3-2.94,2.78-1.77.62-3.56.6-5.4.34-2.09-.29-4.08-.97-6.1-1.51-.8-.25-1.59-.49-2.48-.77-.54,1.22-1.23,2.33-2.06,3.34-.91.51-1.71,1.27-2.85,1.29-.03-.83.81-1.29.93-2.05-.63-.51-.79.31-1.2.35-.25-.25.17-.85-.48-.9-.63.25-.74.95-1.17,1.38-.27-.05-.22-.39-.45-.48.16-.55.65-.91.88-1.44-.13-.11-.21-.21-.31-.24-.26-.09-.42.13-.61.24-.17-1.15.13-2.24.43-3.33,1.09-.95,2.06-2.04,3.4-2.68h0c.32-.05.69.14.95-.21,1.73-.17,3.44.32,5.16.16Z'
      fill='#b67941'
    />
    <path
      d='M31.98,21.06c-.19-.04-.41-.03-.57-.12-2.16-1.34-4.52-1.99-7.06-2.06.53-2.44,1.03-4.89,1.97-7.21.79-1.95,1.65-3.87,3.33-5.27.5.18.7.76,1.2.93.52-.06.83-.47,1.25-.68.64.91.76,1.98.92,3.03.6,3.88.13,7.66-1.04,11.38Z'
      fill='#cb803b'
    />
    <path
      d='M22.37,90.85c.54.22.89.68,1.25,1.09,1.63,1.83,3.78,2.76,6.03,3.47.86.27,1.78.36,2.67.54-.68.4-1.44.38-2.18.41-1.19.05-2.39,0-3.58-.14-2.24-.26-4.43.18-6.62.56-1.69.29-3.39.44-5.11.35-.24-.01-.48,0-.69-.15.37-.18.85-.13,1.13-.47-.04-.43-.3-.48-.6-.44-.55.07-1.07.24-1.55.51-.28-.24-.54-.5-.71-.83.48-.3,1.05-.24,1.52-.32.18-.25.21-.42.04-.6-.54-.24-1.06.01-1.59.1.02-.26.03-.52.05-.78.45-.19.93-.05,1.38-.17.27-.07.53-.18.45-.57-.42-.26-.91-.04-1.36-.14.82-1.38,2.16-1.98,3.64-2.27,1.92-.38,3.88-.46,5.83-.14Z'
      fill='#b67941'
    />
    <path
      d='M22.09,18.86c-2.2-.06-4.32.36-6.42.97.37-2.88.96-5.72,2.03-8.43.56-1.41,1.19-2.79,2.65-3.54.64.35.72,1.35,1.6,1.42.62-.13.79-.93,1.46-.94.08,1.2-.38,2.32-.57,3.48-.32,2.03-.56,4.06-.81,6.1-.04.31-.04.63.07.94Z'
      fill='#cb803b'
    />
    <path
      d='M15.55,64.28c1.13-.02,1.93-.78,2.85-1.29.1.56.07,1.12-.05,1.66-.46,2.01-2.39,3.23-4.43,2.86-1.17-.21-2.17-.73-3.04-1.54-1.72-1.61-2.86-3.59-3.71-5.75-.1-.26-.19-.52-.28-.78.15-.17.35-.16.55-.19,2.09-.26,4.15-.68,6.13-1.43-.31,1.09-.6,2.18-.43,3.33-.57.97-1.18,1.93-.91,3.1.28.14.45.1.66-.16-.01-.46.01-1,.29-1.49.23.09.18.43.45.48.04.7-.59,1.41-.09,2.11.38.04.5-.14.54-.4.05-.34-.06-.72.23-1.01.14.02.28.05.43.07.15.5-.17.99-.03,1.43.13.22.28.22.48.19.11-.38.23-.78.35-1.18Z'
      fill='#eed49c'
    />
    <path
      d='M23.4,8.34c-.67.02-.84.81-1.46.94-.88-.07-.96-1.06-1.6-1.42.02-.63-.39-1.12-.59-1.67-.33-.93-.5-1.84-.14-2.8.09-.23.21-.43.49-.56,1.08.01.59,1.11,1.03,1.59.47-.78.21-1.89,1.14-2.5.72.42.61,1.05.52,1.67-.09.63-.19,1.25-.23,1.9.69-1.05,1-2.38,2.19-3.02.73.35.61.91.54,1.4-.17,1.28-.62,2.47-1.36,3.54-.2.29-.49.53-.52.92Z'
      fill='#b67941'
    />
    <path
      d='M32.1,6.65c-.42.21-.73.61-1.25.68-.5-.17-.7-.74-1.2-.93.08-.61-.38-1.02-.58-1.53-.49-1.2-.89-2.4-.3-3.68.03-.07.09-.13.14-.19.26-.17.52-.15.8.03.41.55.14,1.23.3,1.92.62-.94.3-2.22,1.16-2.95.48-.02.65.22.67.58.02.56.07,1.12-.09,1.66-.12.43-.17.86-.13,1.3-.14.07-.26.15-.1.32.03-.12.05-.23.07-.34.37-.28.4-.75.62-1.12.42-.71.77-1.48,1.5-1.92.51.07.55.42.57.79.07,1.53-.45,2.88-1.29,4.12-.29.42-.59.84-.89,1.26Z'
      fill='#b67941'
    />
    <path
      d='M6.15,54.4c.32-1.16,1.26-1.8,2.14-2.53-.27-.92-.87-1.79-.56-2.89.51-.19,1.09.01,1.61-.26.28.85-.06,1.75.49,2.56,1.76-.36,3.42.02,4.98.9-.12.17-.3.31-.23.56l-.02.02c-.86.27-1.72.44-2.5-.21-.05-.16-.13-.27-.32-.21-.14.2-.05.35.11.49.06.53.17,1.05-.01,1.55-.21.14-.39.04-.57,0-.21-.26-.41-.52-.62-.78-.18-.27-.11-.73-.63-.77-.02.37,0,.73-.07,1.08-.07.39-.22.76-.34,1.14-.06.07-.13.13-.19.2-.32.19-.51-.03-.69-.24-.18-.49.01-1.06-.25-1.54-.46.09-.52.43-.68.68-.11.14-.21.28-.32.42-.06.09-.13.18-.19.27-.07.09-.15.17-.22.26-.08.08-.16.16-.24.24-.17.06-.34.13-.56.22-.04-.41-.08-.77-.11-1.14Z'
      fill='#81501f'
    />
    <path
      d='M13.57,57.82c-1.98.75-4.04,1.17-6.13,1.43-.2.02-.4.02-.55.19h-1.8c-.22-.21-.16-.44-.12-.66.24-.07.61.17.7-.27h.01c.31-.05.44-.18.23-.47v-.02c.38.14.19-.39.5-.37.29.16.22.67.63.76.54.27.98.16,1.34-.33.19-.08.26-.25.33-.43.08-.14.16-.27.23-.41.07-.09.14-.18.24-.32.14.27.27.54.52.69.44.4.88.34,1.32.01.08-.08.16-.16.25-.24.49-.42.5-1.08.76-1.62.11.06.2.12.3.17.08.08.16.17.24.25.09.07.17.15.26.22.83.37.97.35,1.56-.23.3-.29.34-.67.38-1.04.02-.2.06-.37.26-.47h.02c.48.78,1.24.46,1.91.49-1.34.64-2.31,1.73-3.4,2.68Z'
      fill='#81501f'
    />
    <path
      d='M12.14,46.52c.48-.55,1.21-.71,1.79-1.13,1.16-.83,2.03-1.86,2.65-3.1.33-.16.64-.13.94-.04.8,1.46.34,3.21-1.07,4-.44.25-.92.42-1.39.63-1.01.14-2.01.26-2.92-.36Z'
      fill='#e93303'
    />
    <path
      d='M.32,38.57c.48-.04.62-.62,1.08-.69.69.35.91.75.55,1.34-.25.42-.39.86-.54,1.3.19.5.4.97,1,1.17.75-.19,1.4-.64,2-1.18.64.24.88.66.73,1.32-.76.68-1.62,1.13-2.62,1.32-2-.29-2.86-1.56-2.41-3.53.08-.35.14-.7.2-1.05Z'
      fill='#b67941'
    />
    <path
      d='M15.12,52.34c.93.37,1.69.98,2.34,1.73-.46.6-1.06.75-1.78.58-.2-.05-.43-.27-.63.01h-.02c.3-.57-.41-.74-.43-1.13-.14-.28.24-.54-.05-.78l.02-.02c.42.21.42-.17.54-.39Z'
      fill='#81501f'
    />
    <path
      d='M12.91,93.25c.45.1.94-.12,1.36.14.08.39-.18.5-.45.57-.45.12-.94-.02-1.38.17-.7.02-1.1.55-1.48.95-.48-.12-.54-.36-.39-.65.23-.44.6-.74,1.07-.88.42-.12.84-.19,1.27-.29Z'
      fill='#091017'
    />
    <path
      d='M13.14,96.57c.48-.27,1-.43,1.55-.51.29-.04.55.01.6.44-.28.34-.76.28-1.13.47-.75.19-1.09.88-1.58,1.34-.48-.16-.47-.45-.31-.77.21-.39.54-.68.87-.97Z'
      fill='#091017'
    />
    <path
      d='M12.39,94.91c.53-.09,1.05-.33,1.59-.1.17.18.14.35-.04.6-.46.09-1.04.03-1.52.32-.64.09-1.03.67-1.57.88-.26-.08-.36-.23-.36-.5.45-.65,1.17-.94,1.9-1.2Z'
      fill='#091017'
    />
    <path
      d='M5,58.47c-.07-1.24.27-2.39.83-3.49.11.39-.05.88.4,1.01.08.76-.47,1.33-.29,2.02v.02c-.3.05-.4.19-.24.46h-.01c-.22-.16-.45.03-.68-.02Z'
      fill='#81501f'
    />
    <path
      d='M5.94,58.01c-.18-.69.37-1.26.29-2.02-.45-.13-.29-.62-.4-1.01.12-.19.01-.5.32-.58.04.36.07.72.11,1.14.23-.09.39-.15.56-.22.08.07.17.14.25.21-.48.36-.47.87-.36,1.36.1.44.23.89.5,1.28-.06.08-.11.16-.17.24-.41-.1-.34-.6-.63-.76-.31-.02-.12.51-.48.37Z'
      fill='#eed49c'
    />
    <path
      d='M15.06,54.66c.2-.28.43-.06.63-.01.72.17,1.32.03,1.78-.58.25.13.44.3.42.61-.41-.06-.67.19-.91.45h0c-.67-.03-1.43.3-1.91-.48Z'
      fill='#eed49c'
    />
    <path
      d='M16.97,55.14c.25-.27.51-.51.91-.45l.03.25c-.25.35-.63.16-.95.21Z'
      fill='#81501f'
    />
    <path
      d='M15.12,52.34c-.12.22-.12.6-.54.39-.06-.25.12-.39.23-.56.1.06.21.12.31.17Z'
      fill='#eed49c'
    />
    <path
      d='M5,58.47c.22.05.46-.14.68.04-.1.45-.46.21-.7.27,0-.1.02-.2.02-.31Z'
      fill='#eed49c'
    />
    <path
      d='M23.22,29.69c-.15,2.8-1.15,4.9-3.76,6.11-3.39,1.57-7.25-.47-8.22-3.81-.66-2.3-.16-4.47,1.32-6.29.99-1.22,2.37-1.95,4.05-2.03,1.85-.09,3.46.4,4.8,1.7,1.25,1.21,1.76,2.71,1.81,4.31ZM19.13,29.56c0-.31,0-.43,0-.55-.07-1.15-.68-1.87-1.78-2.07-.93-.17-1.7.29-2.16,1.29-.43.93-.51,1.92-.38,2.92.12.91.7,1.54,1.46,1.69.98.2,1.72-.1,2.24-.96.46-.77.59-1.63.62-2.32Z'
      fill='#eed49c'
    />
    <path
      d='M63.49,76.26c-.33,1.72-.78,3.39-1.88,4.81-.23.29-.42.57-.93.37.34-.96,1.13-1.64,1.4-2.58.27-.94.56-1.88.83-2.78.24-.06.39-.09.58.18Z'
      fill='#ebcc95'
    />
    <path
      d='M58.57,84.03c.12,1.05-.66,1.64-1.21,2.28-.5.58-.93,1.38-1.99,1.47.25-.96,1.1-1.3,1.55-1.94.47-.67.96-1.31,1.66-1.81Z'
      fill='#ebcc95'
    />
    <path
      d='M62.26,73.03c-.13-1.55.36-2.98.6-4.39.41-.07.63.02.6.24-.18,1.44-.41,2.86-1.2,4.15Z'
      fill='#ebcc95'
    />
    <path
      d='M58.8,46.59c-1.28-1.05-2.12-2.25-2.94-3.47.38-.34.63-.2.82.03.71.85,1.41,1.72,2.12,2.58.17.2.21.41,0,.87Z'
      fill='#ebcc95'
    />
    <path
      d='M64.9,60.25c.03,1.44.51,2.88.21,4.36-.36.11-.54-.08-.57-.32-.12-1.18-.2-2.37-.28-3.56-.02-.31.08-.56.63-.48Z'
      fill='#ebcc95'
    />
    <path
      d='M55.93,83.03c-.12,1.09-1.84,3.23-2.81,3.72-.17-.16-.21-.39-.06-.53,1.05-.99,1.64-2.39,2.87-3.19Z'
      fill='#ebcc95'
    />
    <path
      d='M59.25,76.05c-.4,1.51-.9,2.78-1.95,3.79-.23-.18-.3-.33-.22-.48.53-1.11,1.07-2.21,1.63-3.3.02-.05.22,0,.54,0Z'
      fill='#ebcc95'
    />
    <path
      d='M55.46,60.46c-.83-.53-.46-1.4-.84-1.96-.39-.58-.78-1.16-1.18-1.77,1.31-.1,2.35,1.78,2.02,3.73Z'
      fill='#ebcc95'
    />
    <path
      d='M61.08,69.23c.44,1.36-.22,2.44-.53,3.56-.08.3-.21.74-.73.5.02-.68.87-3.58,1.26-4.06Z'
      fill='#ebcc95'
    />
    <path
      d='M61.02,61.84c.2,1.39.51,2.69.28,4.01-.46.06-.6-.21-.61-.48-.03-.87-.12-1.73-.26-2.59-.06-.35,0-.72.59-.94Z'
      fill='#ebcc95'
    />
    <path
      d='M63.9,72.34c-.35-.72.24-1.31.34-1.97.1-.66.24-1.31.35-1.93.32-.12.57-.06.57.25-.04,1.31-.27,2.57-1.07,3.65-.01.02-.07,0-.19,0Z'
      fill='#ebcc95'
    />
    <path
      d='M62.68,61.7c.33-.04.45.11.52.3.16.47.28,3.11.18,3.6-.24.07-.44-.06-.46-.25-.11-1.22-.6-2.42-.24-3.66Z'
      fill='#ebcc95'
    />
    <path
      d='M59.24,79.96c.55-1.16.83-2.4,1.63-3.4.04-.06.22,0,.3,0,.17.14.2.3.14.45-.37.92-.91,1.76-1.23,2.71-.12.34-.4.46-.84.25Z'
      fill='#ebcc95'
    />
    <path
      d='M64.18,58.12c-.36.22-.56.1-.65-.15-.39-1.12-1-2.2-.91-3.55.69.47.78.72,1.56,3.7Z'
      fill='#ebcc95'
    />
    <path
      d='M49.32,39.96c.99.73,1.69,1.73,2.69,2.36.13.08.2.24.08.55-1.03-.15-1.64-.94-2.3-1.62-.3-.3-.86-.54-.47-1.29Z'
      fill='#ebcc95'
    />
    <path
      d='M48.87,46.24c.33-.28.52-.22.69-.1.36.26,1.67,2.26,1.88,2.84-.28.26-.54.13-.71-.11-.63-.86-1.23-1.74-1.86-2.63Z'
      fill='#ebcc95'
    />
    <path
      d='M60.75,55.41c1.09.62,1.68,2.09,1.42,3.54-.84-.31-.56-1.14-.8-1.69-.26-.57-.81-1.08-.62-1.85Z'
      fill='#ebcc95'
    />
    <path
      d='M57,49.82c.46-.28.62-.17.77.06,1.01,1.51,1.37,2.36,1.21,3.18-.87-1.04-1.51-2.07-1.98-3.24Z'
      fill='#ebcc95'
    />
    <path
      d='M54.74,79.05c.37-1.25,1.19-2.83,1.71-3.26.25,1.08-.4,1.83-.77,2.66-.15.35-.3.77-.95.61Z'
      fill='#ebcc95'
    />
    <path
      d='M56.79,55.12c-.18,1.42.94,2.42.87,3.75-.93-.81-1.26-1.91-1.53-3.03-.07-.3.06-.54.65-.72Z'
      fill='#ebcc95'
    />
    <path
      d='M43,41.11c-.95-.43-2.01-1.57-2.19-2.35,1.08.11,2.2,1.31,2.19,2.35Z'
      fill='#ebcc95'
    />
    <path
      d='M56.75,46.57c-.58.08-.81-.32-1.07-.63-.53-.62-1.11-1.22-1.5-1.96-.03-.07.07-.21.15-.44,1.13.8,1.76,1.91,2.41,3.02Z'
      fill='#ebcc95'
    />
    <path
      d='M60.89,52.29c-.22.19-.33.22-.56.11-.41-.85-.86-1.8-1.29-2.7,0-.3.14-.42.48-.56.6,1.01,1.01,2.1,1.38,3.15Z'
      fill='#ebcc95'
    />
    <path
      d='M59.94,58.64c-.84-.98-1.5-2.04-1.41-3.54.94.39.67,1.22.94,1.77.26.54.73,1.04.47,1.77Z'
      fill='#ebcc95'
    />
    <path
      d='M48.78,38.24c-1.14-.23-1.84-1.27-2.95-1.48-.07-.67.36-.67.68-.52.93.43,1.78.99,2.27,2Z'
      fill='#ebcc95'
    />
    <path
      d='M58.96,63.12c.69.83.43,1.89.69,2.82.07.24-.08.46-.5.43-.46-1.02-.53-2.1-.19-3.25Z'
      fill='#ebcc95'
    />
    <path
      d='M42.23,37.81c.13-.16.3-.24.43-.14.85.62,1.78,1.14,2.33,2.04-.12.32-.35.35-.5.23-.74-.59-1.45-1.21-2.17-1.83-.07-.06-.07-.21-.1-.3Z'
      fill='#ebcc95'
    />
    <path
      d='M50.63,39.19c.55-.31.79.16,1.07.43,1.4,1.32,1.4,1.32,1.38,1.97-.84-.38-1.99-1.51-2.46-2.41Z'
      fill='#ebcc95'
    />
    <path
      d='M47.32,41.03c.95.9,1.73,1.62,2.49,2.35.08.08.04.23-.05.33-1.16-.27-2.4-1.49-2.43-2.68Z'
      fill='#ebcc95'
    />
    <path
      d='M62.16,51.22c-.78-.85-1.43-1.77-1.75-2.79.25-.26.46-.28.54-.17.57.91,1.14,1.82,1.21,2.96Z'
      fill='#ebcc95'
    />
    <path
      d='M51.19,45.63c.72.34,1.84,1.89,1.94,2.67-.98-.31-1.97-1.67-1.94-2.67Z'
      fill='#ebcc95'
    />
    <path
      d='M46.6,39.69c-.91-.93-1.87-1.46-2.67-2.41,1.06-.27,1.41.52,1.94.87.4.26.96.59.73,1.54Z'
      fill='#ebcc95'
    />
    <path
      d='M54.36,40.14c-.78.27-1.2-.29-1.6-.72-.38-.41-1.09-.68-.93-1.52.72.38,2.08,1.59,2.53,2.23Z'
      fill='#ebcc95'
    />
    <path
      d='M47.69,35.88c.8-.12,2.06.68,2.83,1.74-.52.18-.56.22-1.52-.58-.43-.36-1.06-.53-1.31-1.16Z'
      fill='#ebcc95'
    />
    <path
      d='M56.92,52.62c-.99-.49-1.24-1.42-1.6-2.35.23-.07.39-.17.44-.13.72.65,1,1.53,1.16,2.48Z'
      fill='#ebcc95'
    />
    <path
      d='M51.77,85.07c1.04-1.82,1.57-2.29,2.33-2.15-.92,1.51-1.48,2.04-2.33,2.15Z'
      fill='#ebcc95'
    />
    <path
      d='M58.79,69.7c.4.98.07,1.74-.21,2.5-.1.26-.23.52-.6.4-.04-.78.35-2.31.81-2.9Z'
      fill='#ebcc95'
    />
    <path
      d='M54.64,47.2c-.7-.46-1.26-1.11-1.81-1.76-.13-.16-.14-.36.08-.6.8.41,1.32,1.14,1.9,1.79.14.15.1.37-.17.57Z'
      fill='#ebcc95'
    />
    <path
      d='M45.68,41.98c.51.91,1.28,1.37,1.77,2.12-.68.21-.79.15-1.69-.84-.27-.3-.67-.59-.08-1.27Z'
      fill='#ebcc95'
    />
    <path
      d='M57.01,70.14c-.33.81-.05,1.73-.74,2.57-.3-.83-.26-1.54-.03-2.25.09-.27.23-.52.77-.32Z'
      fill='#ebcc95'
    />
    <path
      d='M56.89,65.78c-.75-.85-.58-1.63-.44-2.43.68.19.78.66.44,2.43Z'
      fill='#ebcc95'
    />
    <path
      d='M54.14,75.78c-.43.5-.54,1.24-1.24,1.73-.32-.79.22-1.24.49-1.74.14-.26.43-.35.75.02Z'
      fill='#ebcc95'
    />
    <path
      d='M53.73,51.04c.09-.22.2-.33.44-.41.39.37.72.82.91,1.38q-.64.2-1.35-.98Z'
      fill='#ebcc95'
    />
    <path
      d='M52.08,81.89c-.43.6-.75,1.05-1.31,1.32-.15-.88.23-1.3,1.31-1.32Z'
      fill='#ebcc95'
    />
    <path
      d='M14.31,63.77c-.29.29-.17.67-.23,1.01-.04.26-.16.44-.54.4-.51-.7.13-1.4.09-2.11.42-.44.54-1.14,1.17-1.38.66.05.23.65.48.9l.02-.02c-.15-.12-.29-.09-.41.04-.29.33-.54.69-.57,1.15Z'
      fill='#091017'
    />
    <path
      d='M13.18,62.59c-.28.49-.3,1.04-.29,1.49-.21.26-.38.31-.66.16-.28-1.17.34-2.13.91-3.1.19-.11.35-.33.61-.24.1.03.17.13.31.24-.22.53-.72.89-.88,1.44Z'
      fill='#091017'
    />
    <path
      d='M15.55,64.28c-.12.4-.24.8-.35,1.18-.2.02-.36.03-.48-.19-.15-.44.18-.94.03-1.43.28-.38.52-.77.55-1.26l-.02.02c.42-.04.57-.86,1.2-.35-.12.75-.96,1.22-.93,2.05Z'
      fill='#091017'
    />
    <path
      d='M15.3,62.57c-.03.49-.28.88-.55,1.26-.14-.02-.28-.05-.43-.07.03-.46.28-.82.57-1.15.12-.14.26-.16.41-.04Z'
      fill='#b67941'
    />
    <path
      d='M14.56,52.75c.29.24-.09.5.05.78.02.39.74.56.43,1.12-.2.09-.24.27-.26.47-.04.38-.09.76-.38,1.04-.08-.07-.17-.15-.25-.22.29-.87.24-1.68-.31-2.43-.46-.05-.89-.1-1.34-.15-.13.52.06,1.11-.33,1.55.17.3.31.53.44.77-.09.08-.18.16-.27.24-.1-.06-.19-.11-.3-.17-.26.54-.27,1.19-.76,1.62-.08-.07-.16-.14-.24-.21.31-.68.63-1.35.6-2.1-.23-.18-.41-.32-.6-.47.08-.08.15-.16.23-.23.18.04.36.14.57,0,.18-.49.08-1.02.01-1.55.07-.09.14-.18.21-.28.78.65,1.64.48,2.5.21Z'
      fill='#eed49c'
    />
    <path
      d='M9.71,57.6c-.26-.15-.39-.41-.52-.69-.11.14-.17.23-.24.32l-.21-.23c.09-.38.18-.77.27-1.13-.14-.27-.49-.33-.52-.65.08-.07.16-.15.24-.22.19.21.37.43.69.24.06.08.13.15.19.23-.14.18-.34.33-.23.61.17.44.24.91.56,1.29-.07.08-.15.16-.22.24Z'
      fill='#eed49c'
    />
    <path
      d='M9.6,55.03c.12-.38.27-.75.34-1.14.07-.35.05-.71.07-1.08.52.04.45.5.63.77-.07.06-.14.13-.21.19-.29.44-.16,1.06-.6,1.43-.08-.06-.15-.11-.23-.17Z'
      fill='#eed49c'
    />
    <path
      d='M7.79,54.13c.16-.25.22-.59.68-.68.26.48.07,1.05.25,1.54-.08.07-.16.15-.24.22-.18-.14-.16-.35-.2-.54-.03-.12.06-.35-.22-.29-.09-.08-.18-.17-.26-.25Z'
      fill='#eed49c'
    />
    <path
      d='M10.65,53.58c.21.26.41.52.62.78-.08.08-.15.16-.23.23-.25-.24-.52-.47-.61-.83.07-.06.14-.13.21-.19Z'
      fill='#eed49c'
    />
    <path
      d='M11.85,52.81c-.16-.13-.25-.28-.11-.49.2-.06.27.06.32.21-.07.09-.14.18-.21.28Z'
      fill='#eed49c'
    />
    <path
      d='M7.48,54.55c.11-.14.21-.28.32-.42.09.08.18.17.26.25-.12.12-.23.25-.35.37-.08-.07-.15-.14-.23-.21Z'
      fill='#eed49c'
    />
    <path
      d='M7.07,55.08c.07-.09.15-.17.22-.26.07.07.15.14.22.21-.07.09-.14.18-.21.26-.07-.07-.15-.15-.22-.22Z'
      fill='#eed49c'
    />
    <path
      d='M7.28,54.82c.06-.09.13-.18.19-.27.08.07.15.14.23.21-.07.09-.14.18-.2.28-.07-.07-.15-.14-.22-.21Z'
      fill='#eed49c'
    />
    <path
      d='M9.41,55.23c.06-.07.13-.13.19-.2.08.06.15.11.23.17-.08.09-.15.17-.23.26-.06-.08-.13-.15-.19-.23Z'
      fill='#eed49c'
    />
    <path
      d='M6.82,55.32c.08-.08.16-.16.24-.24.07.07.15.15.22.22-.07.08-.14.15-.22.23-.08-.07-.17-.14-.25-.21Z'
      fill='#eed49c'
    />
    <path
      d='M14.4,56.16c-.6.58-.73.6-1.56.23.07-.09.14-.18.21-.26.44.34.79.17,1.11-.19.08.07.17.15.25.22Z'
      fill='#eed49c'
    />
    <path
      d='M8.38,58.07c-.35.49-.8.6-1.34.33.06-.08.11-.16.17-.24.39.11.65-.14.93-.31.08.07.15.15.23.22Z'
      fill='#eed49c'
    />
    <path
      d='M11.03,57.61c-.44.32-.89.39-1.32-.01.07-.08.15-.16.22-.24.29.23.59.18.88,0,.07.08.14.17.22.25Z'
      fill='#eed49c'
    />
    <path
      d='M8.71,57.64c-.07.18-.15.35-.33.43-.08-.07-.15-.15-.23-.22l.33-.38c.08.06.15.11.23.17Z'
      fill='#eed49c'
    />
    <path
      d='M8.95,57.23c-.08.14-.16.27-.23.41-.08-.06-.15-.11-.23-.17.04-.18.07-.37.25-.47.07.08.14.16.21.23Z'
      fill='#eed49c'
    />
    <path
      d='M5.69,58.49c-.16-.27-.06-.41.23-.46.21.3.08.42-.23.46Z'
      fill='#eed49c'
    />
    <path
      d='M11.28,57.36c-.08.08-.16.16-.25.24-.07-.08-.14-.17-.22-.25.07-.07.15-.13.22-.2.08.07.16.14.24.21Z'
      fill='#eed49c'
    />
    <path
      d='M12.84,56.39c-.09-.07-.17-.15-.26-.22l.24-.24c.08.07.16.13.23.2-.07.09-.14.18-.21.26Z'
      fill='#eed49c'
    />
    <path
      d='M12.58,56.17c-.08-.08-.16-.17-.24-.25.09-.08.18-.16.27-.24l.2.25-.24.24Z'
      fill='#eed49c'
    />
    <path
      d='M8.73,56.99c-.18.11-.2.3-.25.47-.11.13-.22.25-.33.38-.29.18-.55.43-.93.31-.27-.38-.4-.83-.5-1.28-.11-.49-.13-1,.36-1.36.07-.08.14-.15.22-.23.07-.09.14-.18.21-.26.07-.09.14-.18.2-.28.12-.12.23-.25.35-.37.28-.06.19.17.22.29.04.19.02.4.2.54.03.32.38.38.52.65-.09.37-.18.75-.27,1.13Z'
      fill='#81501f'
    />
    <path
      d='M19.13,29.56c-.03.69-.15,1.55-.62,2.32-.52.86-1.26,1.16-2.24.96-.75-.15-1.33-.78-1.46-1.69-.13-1-.05-1.98.38-2.92.46-1,1.24-1.46,2.16-1.29,1.09.2,1.71.92,1.78,2.07,0,.12,0,.24,0,.55Z'
      fill='#091017'
    />
    <path
      d='M11.04,57.16c-.07.07-.15.13-.22.2-.29.18-.59.23-.88,0-.31-.38-.39-.85-.56-1.29-.11-.29.09-.43.23-.61.08-.09.15-.17.23-.26.44-.37.31-.99.6-1.43.09.36.35.59.61.83.18.14.37.29.6.47.03.74-.29,1.42-.6,2.1Z'
      fill='#81501f'
    />
    <path
      d='M12.81,55.93l-.2-.25c-.14-.24-.27-.48-.44-.77.39-.44.2-1.02.33-1.55.46.05.88.1,1.34.15.55.75.6,1.56.31,2.43-.32.36-.67.53-1.11.19-.08-.07-.16-.13-.23-.2Z'
      fill='#81501f'
    />
  </svg>
);

export default SquirrelIcon;
