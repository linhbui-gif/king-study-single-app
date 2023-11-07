import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.2375 13.7418L23.4062 4.88867C23.3688 4.7668 23.2562 4.68555 23.1281 4.68555H20.7094C20.5813 4.68555 20.4719 4.7668 20.4312 4.88867L17.5781 13.7418C17.5687 13.7699 17.5625 13.8012 17.5625 13.8324C17.5625 13.9918 17.6937 14.123 17.8531 14.123H19.6156C19.7469 14.123 19.8594 14.0355 19.8969 13.9105L20.4438 11.9855H23.225L23.7656 13.9074C23.8 14.0324 23.9156 14.1199 24.0469 14.1199H25.9594C25.9906 14.1199 26.0188 14.1168 26.0469 14.1074C26.1219 14.0824 26.1812 14.0324 26.2188 13.9637C26.2531 13.8949 26.2594 13.8168 26.2375 13.7418ZM20.7281 10.3574L21.7531 6.7043H21.95L22.9531 10.3574H20.7281Z"
        fill={color}
      />
      <path
        d="M25.2125 25.7605H21.1625V25.748L25.3062 19.8449C25.3406 19.7949 25.3594 19.7387 25.3594 19.6762V18.5387C25.3594 18.3793 25.2281 18.248 25.0688 18.248H18.6938C18.5344 18.248 18.4031 18.3793 18.4031 18.5387V19.8824C18.4031 20.0418 18.5344 20.173 18.6938 20.173H22.525V20.1855L18.3656 26.0887C18.3313 26.1387 18.3125 26.1949 18.3125 26.2574V27.3949C18.3125 27.5543 18.4437 27.6855 18.6031 27.6855H25.2094C25.3688 27.6855 25.5 27.5543 25.5 27.3949V26.0512C25.5031 25.8918 25.3719 25.7605 25.2125 25.7605Z"
        fill={color}
      />
      <path
        d="M12.9999 22.123H10.6249V5.56055C10.6249 5.42305 10.5124 5.31055 10.3749 5.31055H8.62492C8.48742 5.31055 8.37492 5.42305 8.37492 5.56055V22.123H5.99992C5.79055 22.123 5.6718 22.3668 5.80305 22.5293L9.30305 26.9637C9.40305 27.0918 9.5968 27.0918 9.6968 26.9637L13.1968 22.5293C13.3249 22.3668 13.2093 22.123 12.9999 22.123Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;