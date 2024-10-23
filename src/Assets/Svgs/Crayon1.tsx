import React from 'react';

interface Crayon1Props extends React.SVGProps<SVGSVGElement> {}

const Crayon1: React.FC<Crayon1Props> = (props) => (
  <svg
    id='Crayon1'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 95.94 395.19'
    {...props}
  >
    <path
      d='M77.36,240.64c0,.14,0,.28,0,.42-.08.4-.19.82.3,1.06.36,3.58,1.03,7.12,1.68,10.65.06.35.07.71.1,1.06-.35.3-.1.41.16.52,0,.15,0,.31-.01.46-.25.4-.23.74.21.99,0,.15,0,.3.01.45-.2.36-.23.69.17.94.22,2.64.81,5.22,1.19,7.83.06.43.11.86.17,1.29-.34.31-.08.41.18.51,0,.15.02.3.02.45-.27.39-.3.74.18,1,.07.76.14,1.52.21,2.28-.1.25-.06.44.19.56.15,2.2.67,4.34.99,6.52.06.39.1.78.15,1.16-.35.31-.09.41.17.51.02.31.05.62.07.93-.36.31-.09.41.17.51.05.69.1,1.37.15,2.06-.09.31-.12.6.23.78,0,.14,0,.28,0,.42-.08.4-.19.82.3,1.06.49,3.65,1,7.3,1.46,10.96.44,3.53.83,7.07,1.24,10.6-.25.27-.26.52.09.72.41,3.73.83,7.46,1.23,11.18.06.59.1,1.18.15,1.77-2.53.19-5.03.68-7.56.93-3.08.3-6.11.95-9.2,1.22-1.7.15-3.37.51-5.07.73-2.44.32-4.88.58-7.32.91-1.73.23-3.44.65-5.18.75-2.43.14-4.79.68-7.2.92-2.8.28-5.56.87-8.38,1.03-.31-2.32-.62-4.64-.93-6.96.22-.2.18-.35-.07-.48-.62-5.52-1.23-11.04-1.85-16.56.28-.35.32-.68-.1-.96,0-.14,0-.29.01-.43.08-.28.11-.55-.15-.76.18-1.77-.51-3.48-.33-5.24.06-.2.04-.38-.13-.52-.18-4.8-.69-9.57-1.06-14.35-.11-1.38-.25-2.76-.38-4.14.22-.2.16-.35-.08-.47-.06-.72-.11-1.44-.17-2.16.25-.27.26-.52-.09-.72,0-.22,0-.45,0-.67.08-.28.12-.56-.16-.77-.23-4.03-.81-8.02-1.42-12.01.25-.28.25-.52-.1-.72-.02-.37-.04-.75-.05-1.12.1-.25.06-.44-.2-.56-.22-2.7-.88-5.33-1.28-8.01-.58-3.97-1.16-7.95-1.74-11.92.3-.32.22-.57-.15-.76-.55-5.01-.97-10.04-1.69-15.02-.68-4.72-1.32-9.45-2.37-14.12-.78-3.45-1.32-6.95-1.97-10.43.22-.3.17-.53-.17-.7,0-.22,0-.44,0-.66.09-.31.12-.6-.23-.78-.01-.29-.03-.59-.04-.88.13-.3.01-.48-.26-.6-.05-1.13-.6-2.17-.57-3.32.34-.31.07-.41-.18-.51-.02-.31-.05-.62-.07-.93.35-.31.09-.41-.18-.51-.17-1.11-.34-2.22-.51-3.33.32-.35.21-.59-.2-.75-.88-4.94-1.76-9.88-2.63-14.81-1.09-6.19-2.16-12.38-3.24-18.57-.99-5.68-1.98-11.37-2.97-17.05-.22-1.25-.39-2.52-.58-3.78.31-.32.06-.41-.2-.51-.01-.23-.02-.46-.03-.69.32-.35.21-.59-.2-.75-.09-.71-.19-1.42-.28-2.13.31-.32.05-.41-.2-.51-.02-.31-.04-.62-.06-.93.34-.31.07-.41-.18-.51,0-.15-.01-.3-.02-.45.29-.39.31-.74-.17-1,0-.15,0-.3-.01-.45.2-.36.23-.69-.17-.94,0-.14,0-.28,0-.42.07-.37.18-.76-.24-1.02,0-.14,0-.28-.01-.42.09-.3.13-.59-.21-.78-.01-.14-.02-.28-.03-.42.08-.19.08-.38-.09-.53-.58-3.68-1.17-7.37-1.75-11.05.35-.31.09-.41-.17-.51-.09-.63-.18-1.26-.27-1.89.26-.35.3-.68-.11-.95,0-.22-.01-.44-.02-.65.12-.35.11-.65-.28-.83-.44-3.03-.88-6.05-1.32-9.08.36-.31.09-.41-.18-.51-.09-.71-.19-1.42-.28-2.13.34-.33.22-.57-.14-.76-.25-1.84-.5-3.68-.75-5.51,2.1-.1,4.18-.5,6.24-.81,4.07-.61,8.16-1.2,12.24-1.7,4.8-.59,9.59-1.27,14.39-1.86,4.6-.56,9.17-1.31,13.78-1.8.18,1.11.35,2.22.53,3.33-.34.31-.08.41.18.51,0,.15.01.3.02.45-.28.39-.3.74.17,1,0,.23.01.46.02.69-.21.3-.17.53.17.7,0,.22,0,.44,0,.66-.09.31-.12.6.23.78,0,.14,0,.28.01.42-.11.34-.11.65.27.83.47,3.48.94,6.97,1.41,10.45-.11.29,0,.48.28.59,0,.23,0,.46,0,.69-.18.26-.18.5.1.69.02.23.03.46.05.69-.06.28-.06.55.19.75.27,3.47.91,6.89,1.42,10.33-.28.31-.24.56.12.77.36,4,.93,7.98,1.55,11.95-.3.33-.21.58.16.76.2,3.32.74,6.6,1.22,9.89.52,3.57,1.02,7.14,1.54,10.7-.34.31-.07.41.18.51,0,.15,0,.31,0,.46-.26.4-.27.74.2,1,.72,6.41,2.03,12.72,3.16,19.06.2,1.13.43,2.26.64,3.39-.09.3-.13.59.21.78.73,3.34,1.45,6.68,2.18,10.02-.07.23-.03.43.21.54.32,1.58.65,3.17.97,4.75-.07.28.04.47.31.57.03.31.05.61.08.92-.3.32-.03.41.21.51.28,1.57.56,3.15.84,4.72-.06.28.05.47.31.57.63,3.4,1.26,6.8,1.89,10.2-.11.29,0,.48.27.6.01.23.02.46.03.69-.21.29-.19.53.14.7,1.19,6.56,2.37,13.13,3.56,19.69.62,3.44,1.23,6.88,1.84,10.32.06.31.04.64.06.95-.34.31-.08.41.18.51.02.31.05.62.07.93-.36.31-.09.41.17.51,0,.15,0,.31-.01.46-.24.36-.26.69.15.95,0,.14,0,.28,0,.42-.07.37-.18.76.24,1.02Z'
      fill='#8abca2'
    />
    <path
      d='M95.8,368.8c.15,4.37-.18,8.68-1.31,12.92-.13.11-.26.22-.4.33-.73-.1-1.41.17-2.13.22-1.47.08-2.95.08-4.4.25-5.2.6-10.39,1.3-15.6,1.86-2.92.32-5.83.7-8.74,1.08-4.6.59-9.2,1.18-13.8,1.85q-1.6.26-1.88-1.57c-.72-4.75-1.42-9.5-2.17-14.24-.77-4.86-1.58-9.71-2.36-14.56-.11-.66-.15-1.34-.22-2.01,2.79-.41,5.58-.82,8.37-1.25,3.96-.61,7.92-1.22,11.88-1.86,2.94-.47,5.86-1.11,8.81-1.45,3.99-.47,7.93-1.22,11.89-1.83,2.86-.44,5.7-1.08,8.63-1.07.28,1.33.56,2.66.84,3.99-.12.35-.12.66.28.83.12.71.23,1.41.35,2.12-.34.31-.08.41.18.51.01.23.02.46.04.69-.32.35-.21.59.2.75.58,3.98,1.22,7.95,1.49,11.97-.23.18-.21.34.04.48Z'
      fill='#8abca2'
    />
    <path
      d='M1.47,61.37c-.2-1.25-.38-2.51-.62-3.76-.19-1.01.04-1.27,1.07-1.27,1.22,0,2.45-.11,3.67-.17.68-.03.89-.35.92-1.07.19-6.46.22-12.92.22-19.38,0-6.97.33-13.94.23-20.92-.04-3.42.07-6.84-.01-10.25-.03-1.29.49-1.79,1.65-2,2.54-.46,5.08-.94,7.6-1.47,1.59-.33,3.17-.76,4.77-1.04.74-.13,1.07.05,1.27.67,1.25,3.93,2.46,7.87,3.73,11.79,1.22,3.76,2.5,7.5,3.73,11.26.92,2.8,1.8,5.6,2.71,8.4,1.02,3.13,2.05,6.25,3.06,9.38.92,2.87,1.84,5.74,2.72,8.63.42,1.36.69,1.58,2.11,1.29.85-.18,1.71-.37,2.55-.6.88-.24,1.23.12,1.35.98.17,1.18.46,2.33.69,3.5-.74.55-1.62.21-2.42.36-2.3.43-4.61.87-6.94,1.06-3.01.25-5.95.97-8.97,1.19-1.7.12-3.37.53-5.06.76-3.42.47-6.84.9-10.26,1.35-3.26.43-6.52.88-9.78,1.32Z'
      fill='#b4ddcb'
    />
    <path
      d='M1.47,61.37c3.26-.44,6.52-.88,9.78-1.32,3.42-.45,6.84-.88,10.26-1.35,1.69-.23,3.36-.64,5.06-.76,3.01-.22,5.95-.94,8.97-1.19,2.33-.19,4.64-.63,6.94-1.06.81-.15,1.68.18,2.42-.36,1.32-.22,1.63.43,1.75,1.66.33,3.44.85,6.86,1.52,10.25.12.58.06,1.19.08,1.79-.48.01-.96,0-1.44.05-3.23.37-6.46.79-9.69,1.13-2.88.3-5.79.44-8.66.79-3.7.45-7.41.9-11.13,1.2-1.69.14-3.39.38-5.08.57-3.59.41-7.16.98-10.79,1.06-.19-1.66-.38-3.31-.57-4.97.11-.29,0-.48-.27-.6.1-1.66-.28-3.29-.56-4.89-.25-1.42.25-1.82,1.41-2.01Z'
      fill='#8abca2'
    />
    <path
      d='M40.29,338.8c-.09-.96-.18-1.93-.27-2.89,1.03-.09,2.06-.14,3.08-.26,4.17-.51,8.28-1.45,12.46-1.93,4.89-.56,9.73-1.45,14.59-2.21,6.38-1.01,12.81-1.8,19.16-3.04.53,1.48.44,3.04.66,4.57.26,1.76.51,3.53.77,5.29-.24.48-.59.79-1.16.84-.59.06-1.17.18-1.76.27-3.11.43-6.21.88-9.32,1.29-2.44.32-4.88.57-7.32.91-3.5.48-6.98,1.09-10.49,1.47-3.99.43-7.94,1.14-11.92,1.54-2.49.25-4.93.88-7.44.87-.31-2-.61-3.99-.92-5.99.23-.28.22-.52-.11-.71Z'
      fill='#8abca2'
    />
    <path
      d='M41.32,345.5c2.51,0,4.96-.62,7.44-.87,3.99-.4,7.94-1.11,11.92-1.54,3.51-.38,6.99-.99,10.49-1.47,2.44-.33,4.88-.58,7.32-.91,3.11-.41,6.21-.85,9.32-1.29.59-.08,1.17-.21,1.76-.27.57-.05.92-.36,1.16-.84.28,1.45.28,2.94.7,4.38.45,1.55.63,3.17.93,4.76-2.92-.01-5.76.63-8.63,1.07-3.96.6-7.9,1.36-11.89,1.83-2.95.35-5.87.98-8.81,1.45-3.96.64-7.92,1.25-11.88,1.86-2.79.43-5.58.83-8.37,1.25-.7-2.79-.68-5.7-1.29-8.5-.07-.31-.13-.61-.2-.92Z'
      fill='#b4ddcb'
    />
    <path
      d='M89.31,328.46c-6.35,1.23-12.77,2.03-19.16,3.04-4.86.77-9.7,1.65-14.59,2.21-4.18.48-8.29,1.42-12.46,1.93-1.02.13-2.06.18-3.08.26-.38-2.49-.76-4.98-1.13-7.47-.08-.55-.15-1.09-.23-1.64,2.82-.16,5.58-.76,8.38-1.03,2.41-.24,4.78-.78,7.2-.92,1.74-.1,3.45-.52,5.18-.75,2.44-.32,4.88-.59,7.32-.91,1.69-.22,3.37-.58,5.07-.73,3.08-.27,6.11-.91,9.2-1.22,2.52-.25,5.02-.73,7.56-.93.1,2.73.81,5.4.75,8.15Z'
      fill='#b4ddcb'
    />
    <path
      d='M1.46,73.83c3.62-.08,7.2-.65,10.79-1.06,1.7-.19,3.39-.43,5.08-.57,3.72-.3,7.42-.75,11.13-1.2,2.88-.35,5.78-.49,8.66-.79,3.24-.34,6.46-.76,9.69-1.13.47-.05.96-.03,1.44-.05.46,2.73.92,5.46,1.39,8.2-4.61.48-9.19,1.23-13.79,1.8-4.8.59-9.59,1.27-14.39,1.86-4.08.5-8.17,1.09-12.24,1.7-2.07.31-4.14.72-6.24.81-.44-2.92-.87-5.85-1.31-8.77-.04-.27-.14-.53-.21-.8Z'
      fill='#b4ddcb'
    />
    <path
      d='M49.43,387.3c4.59-.67,9.2-1.25,13.8-1.85,2.91-.38,5.82-.76,8.74-1.08,5.2-.56,10.39-1.26,15.6-1.86,1.46-.17,2.94-.17,4.4-.25-.03,2.49.14,4.98.38,7.46.06.64-.15.85-.75.92-5.3.56-10.62,1.03-15.9,1.74-3.5.47-7,.9-10.51,1.24-3.57.34-7.11.98-10.71,1.14-.71.03-1.4.25-2.1.39-.91.18-1.4-.08-1.52-1.11-.27-2.28-.88-4.5-1.43-6.73Z'
      fill='#b4ddcb'
    />
    <path
      d='M79.82,255.8c-.44-.25-.46-.59-.21-.99.4.26.31.62.21.99Z'
      fill='#b4ddcb'
    />
    <path
      d='M50.54,82.52c-.47-.26-.46-.61-.17-1,.34.28.28.64.17,1Z'
      fill='#b4ddcb'
    />
    <path
      d='M77.67,242.12c-.49-.24-.38-.66-.3-1.06.47.25.42.65.3,1.06Z'
      fill='#b4ddcb'
    />
    <path
      d='M35.71,301.84c.41.28.37.61.1.96-.31-.29-.35-.61-.1-.96Z'
      fill='#b4ddcb'
    />
    <path
      d='M84.39,285.08c-.49-.24-.38-.66-.3-1.06.47.25.42.65.3,1.06Z'
      fill='#b4ddcb'
    />
    <path
      d='M59.66,146.84c-.47-.25-.46-.6-.2-1,.37.27.3.63.2,1Z'
      fill='#b4ddcb'
    />
    <path
      d='M77.36,240.64c-.42-.26-.31-.64-.24-1.02.43.26.5.6.24,1.02Z'
      fill='#b4ddcb'
    />
    <path
      d='M77.12,239.2c-.41-.26-.39-.59-.15-.95.37.27.36.59.15.95Z'
      fill='#b4ddcb'
    />
    <path
      d='M5.94,102.88c.41.27.37.6.11.95-.31-.29-.36-.6-.11-.95Z'
      fill='#b4ddcb'
    />
    <path
      d='M81.75,268.28c-.48-.25-.46-.6-.18-1,.33.28.29.63.18,1Z'
      fill='#b4ddcb'
    />
    <path
      d='M80,257.2c-.4-.25-.37-.58-.17-.94.41.25.38.58.17.94Z'
      fill='#b4ddcb'
    />
    <path
      d='M8.59,119.44c.42.26.31.64.24,1.02-.43-.26-.5-.6-.24-1.02Z'
      fill='#b4ddcb'
    />
    <path
      d='M8.82,120.88c.4.25.37.58.17.94-.41-.25-.38-.58-.17-.94Z'
      fill='#b4ddcb'
    />
    <path
      d='M9.01,122.27c.48.26.46.61.17,1-.34-.29-.27-.64-.17-1Z'
      fill='#b4ddcb'
    />
    <path
      d='M21.78,194.8c.35.18.32.48.23.78-.34-.18-.51-.42-.23-.78Z'
      fill='#b4ddcb'
    />
    <path
      d='M40.29,338.8c.33.19.34.43.11.71-.32-.19-.36-.43-.11-.71Z'
      fill='#b4ddcb'
    />
    <path
      d='M50.73,83.92c-.33-.17-.38-.4-.17-.7.36.16.38.4.17.7Z'
      fill='#b4ddcb'
    />
    <path
      d='M50.96,85.36c-.35-.18-.31-.48-.23-.78.37.18.5.42.23.78Z'
      fill='#b4ddcb'
    />
    <path
      d='M3.73,88.91c.36.2.48.44.14.76-.3-.21-.26-.48-.14-.76Z'
      fill='#b4ddcb'
    />
    <path
      d='M93.5,352.28c-.4-.17-.4-.48-.28-.83.36.19.43.47.28.83Z'
      fill='#b4ddcb'
    />
    <path
      d='M94.27,356.35c-.41-.16-.52-.4-.2-.75.27.19.28.46.2.75Z'
      fill='#b4ddcb'
    />
    <path
      d='M53.04,99.04c-.28-.2-.28-.43-.1-.69.4.18.38.42.1.69Z'
      fill='#b4ddcb'
    />
    <path
      d='M53.28,100.48c-.26-.2-.25-.47-.19-.75.4.16.54.39.19.75Z'
      fill='#b4ddcb'
    />
    <path
      d='M5.65,101.39c.38.18.39.49.28.83-.38-.18-.44-.47-.28-.83Z'
      fill='#b4ddcb'
    />
    <path
      d='M54.82,111.57c-.36-.21-.4-.46-.12-.77.28.22.27.48.12.77Z'
      fill='#b4ddcb'
    />
    <path
      d='M8.37,118.24c.34.19.3.48.21.78-.34-.19-.5-.43-.21-.78Z'
      fill='#b4ddcb'
    />
    <path
      d='M56.53,124.29c-.38-.19-.46-.43-.16-.76.27.21.28.47.16.76Z'
      fill='#b4ddcb'
    />
    <path
      d='M9.92,127.8c.41.16.52.39.2.75-.28-.19-.28-.46-.2-.75Z'
      fill='#b4ddcb'
    />
    <path
      d='M63.66,170.08c-.34-.19-.3-.48-.21-.78.34.19.5.43.21.78Z'
      fill='#b4ddcb'
    />
    <path
      d='M19.76,183.97c.41.16.52.39.2.75-.28-.19-.28-.46-.2-.75Z'
      fill='#b4ddcb'
    />
    <path
      d='M51.25,86.61c-.39-.18-.39-.49-.27-.83.36.19.44.47.27.83Z'
      fill='#b4ddcb'
    />
    <path
      d='M22.02,196.24c.34.17.38.4.17.7-.35-.16-.38-.4-.17-.7Z'
      fill='#b4ddcb'
    />
    <path
      d='M71.1,204.88c-.33-.18-.35-.42-.14-.7.36.17.38.41.14.7Z'
      fill='#b4ddcb'
    />
    <path
      d='M28.22,236.51c.37.19.45.44.15.76-.29-.21-.29-.47-.15-.76Z'
      fill='#b4ddcb'
    />
    <path
      d='M31.64,258.88c.35.19.35.44.1.72-.26-.21-.33-.44-.1-.72Z'
      fill='#b4ddcb'
    />
    <path
      d='M33.15,271.6c.28.21.24.48.16.77-.37-.19-.53-.42-.16-.77Z'
      fill='#b4ddcb'
    />
    <path
      d='M33.32,273.04c.35.2.34.44.09.72-.27-.21-.35-.44-.09-.72Z'
      fill='#b4ddcb'
    />
    <path
      d='M84.08,283.6c-.35-.18-.32-.48-.23-.78.34.19.5.42.23.78Z'
      fill='#b4ddcb'
    />
    <path
      d='M35.57,300.64c.26.21.22.48.15.76-.37-.19-.53-.42-.15-.76Z'
      fill='#b4ddcb'
    />
    <path
      d='M87.18,307.36c-.35-.2-.33-.44-.09-.72.27.21.35.44.09.72Z'
      fill='#b4ddcb'
    />
    <path
      d='M.62,68.27c.27.12.38.31.27.6-.25-.13-.42-.29-.27-.6Z'
      fill='#b4ddcb'
    />
    <path
      d='M50.35,81.07c-.26-.1-.52-.2-.18-.51.21.12.25.3.18.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M4.15,91.81c.27.1.53.2.18.51-.2-.12-.23-.3-.18-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M52.93,97.65c-.27-.11-.38-.3-.28-.59.24.13.42.29.28.59Z'
      fill='#b4ddcb'
    />
    <path
      d='M76.75,236.35c-.26-.1-.52-.2-.18-.51.21.12.25.3.18.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M81.55,266.83c-.26-.1-.52-.2-.18-.51.21.12.25.3.18.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M67.33,185.97c-.26-.11-.37-.29-.31-.57.26.11.45.25.31.57Z'
      fill='#b4ddcb'
    />
    <path
      d='M82.16,271.12c-.25-.12-.3-.32-.19-.56.24.13.45.27.19.56Z'
      fill='#b4ddcb'
    />
    <path
      d='M70.93,203.49c-.27-.12-.38-.3-.27-.6.25.13.42.29.27.6Z'
      fill='#b4ddcb'
    />
    <path
      d='M76.99,237.79c-.26-.1-.53-.2-.17-.51.2.12.24.3.17.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M33.58,275.92c.24.12.3.27.08.47-.25-.12-.31-.27-.08-.47Z'
      fill='#b4ddcb'
    />
    <path
      d='M66.06,180.64c-.24-.11-.28-.3-.21-.54.23.12.51.22.21.54Z'
      fill='#b4ddcb'
    />
    <path
      d='M83.71,280.75c-.26-.1-.53-.21-.17-.51.2.12.24.3.17.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M21.48,193.31c.28.12.4.3.26.6-.26-.12-.39-.31-.26-.6Z'
      fill='#b4ddcb'
    />
    <path
      d='M59.47,145.39c-.26-.1-.52-.2-.18-.51.21.12.25.3.18.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M35.11,294.88c.17.14.19.32.13.52-.24-.12-.52-.23-.13-.52Z'
      fill='#b4ddcb'
    />
    <path
      d='M68.77,192.69c-.26-.1-.37-.29-.31-.57.28.1.46.25.31.57Z'
      fill='#b4ddcb'
    />
    <path
      d='M10.16,129.25c.26.1.51.19.2.51-.19-.12-.26-.29-.2-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M20.72,189.49c.26.1.52.2.18.51-.21-.12-.25-.3-.18-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M37.65,319.36c.26.12.29.28.07.48-.21-.13-.29-.28-.07-.48Z'
      fill='#b4ddcb'
    />
    <path
      d='M9.44,125.17c.25.1.51.19.2.51-.19-.12-.27-.28-.2-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M79.62,254.35c-.26-.11-.51-.22-.16-.52.21.12.24.3.16.52Z'
      fill='#b4ddcb'
    />
    <path
      d='M9.2,123.73c.26.1.52.2.18.51-.21-.12-.25-.3-.18-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M20.47,188.05c.27.1.53.19.18.51-.2-.12-.23-.3-.18-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M8.25,117.29c.17.15.17.33.09.53-.23-.14-.49-.28-.09-.53Z'
      fill='#b4ddcb'
    />
    <path
      d='M67.62,187.39c-.25-.1-.51-.18-.21-.51.24.1.28.28.21.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M94.03,354.91c-.26-.1-.52-.2-.18-.51.21.12.25.3.18.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M31.38,257.2c.26.12.3.31.2.56-.25-.12-.44-.26-.2-.56Z'
      fill='#b4ddcb'
    />
    <path
      d='M95.8,368.8c-.25-.14-.27-.3-.04-.48.21.14.26.3.04.48Z'
      fill='#b4ddcb'
    />
    <path
      d='M94.09,382.05c.13-.11.26-.22.4-.33.06.33.01.55-.4.33Z'
      fill='#b4ddcb'
    />
    <path
      d='M6.32,105.72c.26.1.52.21.17.51-.2-.12-.24-.3-.17-.51Z'
      fill='#b4ddcb'
    />
    <path
      d='M83.47,279.31c-.26-.1-.52-.21-.17-.51.19.12.24.3.17.51Z'
      fill='#b4ddcb'
    />
  </svg>
);

export default Crayon1;
