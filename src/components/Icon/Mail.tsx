import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.90918 6.00331V10.8926C0.90918 12.4173 2.12518 13.6966 3.71885 13.8403C6.55585 14.0966 9.41218 14.0966 12.2488 13.8403C13.8428 13.6966 15.0585 12.4173 15.0585 10.8926V6.00331C15.0585 4.47865 13.8428 3.19931 12.2492 3.05565C9.4115 2.79965 6.55653 2.79965 3.71885 3.05565C2.12518 3.19931 0.90918 4.47865 0.90918 6.00331Z"
        fill={color}
      />
      <path
        d="M13.9076 5.47965C14.0299 5.35133 14.0321 5.14968 13.9063 5.02472C13.41 4.53555 12.7502 4.23458 12.0458 4.17598C9.36987 3.94134 6.67541 3.94134 3.99918 4.17598C3.23414 4.2432 2.56281 4.5808 2.08706 5.08033C1.96379 5.20926 1.97386 5.41213 2.10183 5.53678L5.90439 9.23147C6.92162 10.2195 8.58565 10.2608 9.74468 9.32098C11.2156 8.12853 12.6064 6.84472 13.9076 5.47965Z"
        // fill="#272E36"
        fill="none"
      />
    </svg>
  );
};

export default Svg;
