import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Flowers1: React.FC<IconProps> = (props) => (
  <svg
    id='Flowers1'
    data-name='Layer 4 Image'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 22.32 25.01'
    {...props}
  >
    <path d='M7.41,9.69c-.51-.09-.94-.36-1.29-.76-.38-.44-.73-.56-1.13,0-.12.18-.39.27-.6.36-1.04.45-1.86-.04-1.84-1.17.01-.7-.03-1.2-.87-1.39-.62-.14-1.22-.54-1.22-1.28,0-.79.48-1.37,1.25-1.55.85-.2.39-.45.13-.79-.73-.95-.51-1.9.52-2.3.48-.19.94-.17,1.33.19.29.27.61.53.81.86.34.56.48.26.66-.09.18-.35.37-.7.59-1.03C6.27,0,6.84-.17,7.58.16c.75.33.92.78.71,1.74-.11.5-.41.98.6,1.01,1.02.03,1.46,1.44.81,2.34-.23.32-.52.65-.86.81-.71.33-1.01.66-.35,1.34.29.3.31.72.25,1.13-.08.6-.73,1.17-1.34,1.17ZM5.07,6.37c.43,0,.87-.51.8-.98-.07-.52-.37-.85-.92-.88-.46-.02-.93.44-.92.87.01.39.65.99,1.04.99ZM3.27,5.58c.03.21.13.32.3.27.07-.02.12-.18.13-.28,0-.17-.11-.29-.28-.24-.07.02-.11.17-.15.24ZM5.03,6.67c-.11.01-.29.01-.27.23,0,.12.09.21.23.21.16,0,.32-.03.31-.24,0-.13-.1-.19-.27-.2ZM4.14,6.9c.09-.04.24-.06.16-.22-.05-.09-.14-.18-.23-.21-.11-.03-.21.07-.22.19-.01.2.13.23.29.23ZM5.14,3.82c.03-.14-.06-.2-.17-.23-.14-.04-.2.05-.23.17-.04.14.06.19.17.22.13.03.2-.05.23-.16ZM3.95,4.22c-.03-.11-.09-.2-.22-.16-.11.03-.21.08-.17.22.03.11.09.2.22.17.11-.03.19-.09.18-.23ZM6.17,4.05c-.14-.01-.22.06-.21.19,0,.06.06.16.11.18.11.04.23,0,.27-.13.04-.13-.04-.21-.16-.24ZM6.31,6.67c.01-.14-.07-.22-.2-.21-.06,0-.16.06-.18.11-.04.11,0,.23.13.27.13.04.21-.04.24-.16ZM6.84,5.43c.01-.14-.06-.21-.19-.21-.11,0-.24.03-.17.19.03.06.08.12.14.16.15.08.18-.04.22-.14Z' />
    <path d='M8.82,10.95c.69.24.98-.2,1.15-.86.1-.38.3-.73.46-1.09.86-2.03,2.28-1.39,3.27-.21.53.63.65,1.43.34,2.25-.21.56-.05.89.59.98.47.07.93.19,1.37.35.8.29,1.12.97.89,1.78-.41,1.43-1.73,2.25-3.19,1.96-.31-.06-.62-.15-.9-.28-.41-.19-.64-.16-.76.34-.16.64-.6,1.11-1.12,1.49-.82.61-1.51.49-2.17-.29-.53-.63-.78-1.38-.88-2.17-.06-.42-.19-.72-.5-1.02-.84-.83-.96-1.38-.58-2.21.37-.8.82-1.04,2.02-1.03ZM10.68,12.85c-.69-.02-.97.24-.97.88,0,.5.51.99,1.09,1.01.53.02.78-.27.8-.79.02-.68-.3-1.08-.92-1.09ZM9.45,13.8c-.02-.16-.02-.35-.22-.35-.22,0-.38.14-.36.37.02.21.15.38.38.35.21-.02.19-.21.2-.36ZM12.12,14.48c.16,0,.33-.05.33-.24,0-.17-.11-.3-.27-.33-.18-.04-.3.06-.31.25,0,.17.05.31.25.33ZM10.89,12.32c0-.17-.04-.32-.25-.32-.13,0-.22.09-.23.22-.01.17.04.32.24.31.13,0,.21-.09.23-.22ZM12.07,12.68c-.14-.02-.2.07-.19.19,0,.06.05.16.1.17.11.03.22,0,.25-.12.03-.12-.05-.2-.16-.23ZM9.88,14.95c-.05-.11-.15-.18-.25-.14-.11.04-.14.17-.09.27.03.05.12.09.18.09.12-.01.19-.09.16-.22ZM11.32,15.4c-.06-.11-.16-.16-.27-.13-.12.04-.15.16-.09.27.03.05.12.09.18.09.12-.01.19-.1.18-.23Z' />
    <path d='M17.9,24.99c-.53.07-1.06-.15-1.49-.5-.47-.39-.85-.4-1.35-.06-.32.22-.72.32-1.1.42-1,.27-1.84-.37-1.85-1.39,0-.16,0-.33.06-.47.49-.96.81-1.85-.02-2.87-.33-.4-.05-1.06.43-1.48.48-.42,1-.43,1.55-.2.14.06.26.18.39.26.91.58.9.57,1.5-.3.32-.47.69-.86,1.34-.84.82.03,1.34.48,1.4,1.29.03.44,0,.88-.23,1.27-.38.61-.3,1.09.3,1.51.25.18.46.45.61.72.79,1.37.09,2.6-1.54,2.62ZM16.36,21.86c-.03-.52-.51-.97-1.02-.91-.49.06-.78.37-.83.84-.04.45.51.87,1.05.86.52-.01.8-.25.79-.79ZM17.05,22.4c-.24-.02-.39.11-.4.33-.01.16.09.3.28.33.25.04.38-.11.39-.32.01-.16-.08-.3-.27-.33ZM14.63,20.51c-.03-.19-.18-.25-.33-.25-.22,0-.34.14-.32.37.02.18.14.3.3.27.19-.04.34-.16.35-.39ZM13.97,22.76c.04.21.14.31.31.28.11-.02.17-.15.14-.26-.04-.16-.17-.25-.32-.26-.04,0-.09.18-.12.25ZM16.64,20.52c-.17-.03-.24.04-.23.18,0,.07.06.16.12.18.11.04.24,0,.27-.12.03-.13-.06-.21-.16-.24Z' />
    <path d='M10.16,21.5c-.06.5-.3,1.06-.86,1.23-.53.16-.73.52-1,.9-.94,1.38-1.95,1.38-2.83-.02-.18-.29-.38-.45-.67-.61-1.3-.75-1.29-1.81.03-2.59.37-.22.58-.47.7-.87.19-.64.54-1.21,1.29-1.17.71.04,1.31.38,1.43,1.17.07.45.36.41.66.49.81.22,1.23.72,1.23,1.46ZM6.93,20.93c-.49,0-.75.34-.72.74.03.47.4.74.9.71.41-.03.64-.29.65-.69,0-.54-.33-.75-.83-.76Z' />
    <path d='M22.32,9.35c-.01.51-.14,1.02-.48,1.11-1.01.28-1.19,1.76-2.44,1.63-.54-.06-1.1-.28-1.21-.81-.14-.68-.55-.81-1.1-.98-.75-.24-1.03-.74-.96-1.44.06-.64.49-1.17,1.22-1.23.46-.04.66-.28.94-.58.79-.86,1.78-.76,2.32.28.21.4.42.63.82.74.69.19.87.73.91,1.27ZM19.94,9.4c.02-.52-.44-1.01-.93-1-.34.01-.9.59-.91.95-.01.41.45.84.93.86.57.03.89-.27.91-.82Z' />
    <path d='M2.28,17.63c-.56.05-1.01-.12-1.24-.68-.15-.37-.43-.64-.69-.94C-.31,15.26,0,14.09.97,13.85c.51-.13.83-.33,1.13-.73.33-.45.82-.59,1.37-.37.54.21,1.02.5,1,1.17-.01.46.07.83.42,1.17.48.48.42,1.1.18,1.66-.23.53-.74.73-1.29.63-.55-.1-.97.32-1.5.26ZM1.45,15.7c-.01.5.46.96.99.95.52,0,.79-.28.82-.79.03-.54-.39-1.06-.87-1.05-.41,0-.93.5-.95.9Z' />
  </svg>
);

export default Flowers1;
