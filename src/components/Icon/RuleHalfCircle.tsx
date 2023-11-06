import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_510_761)">
        <path
          d="M10.04 9.09521H1.83691C1.71387 9.09521 1.63184 9.01318 1.63184 8.89014C1.63184 6.51123 3.55957 4.5835 5.93848 4.5835C8.31738 4.5835 10.2451 6.51123 10.2451 8.89014C10.2451 9.01318 10.1631 9.09521 10.04 9.09521ZM2.04199 8.68506H9.83496C9.71191 6.63428 8.03027 4.99365 5.93848 4.99365C3.84668 4.99365 2.16504 6.63428 2.04199 8.68506Z"
          fill={color}
        />
        <path
          d="M5.93848 9.09521C5.81543 9.09521 5.7334 9.01318 5.7334 8.89014V8.06982C5.7334 7.94678 5.81543 7.86475 5.93848 7.86475C6.06152 7.86475 6.14355 7.94678 6.14355 8.06982V8.89014C6.14355 9.01318 6.06152 9.09521 5.93848 9.09521ZM5.93848 6.22412C5.81543 6.22412 5.7334 6.14209 5.7334 6.01904V4.99365C5.7334 4.87061 5.81543 4.78857 5.93848 4.78857C6.06152 4.78857 6.14355 4.87061 6.14355 4.99365V6.01904C6.14355 6.14209 6.06152 6.22412 5.93848 6.22412ZM4.66699 6.51123C4.58496 6.51123 4.50293 6.47021 4.46191 6.38818L4.01074 5.44482C3.96973 5.32178 4.01074 5.23975 4.09277 5.15771C4.1748 5.1167 4.29785 5.15771 4.37988 5.23975L4.83105 6.18311C4.87207 6.30615 4.83105 6.38818 4.74902 6.47021C4.74902 6.51123 4.70801 6.51123 4.66699 6.51123ZM3.6416 7.29053C3.60059 7.29053 3.55957 7.29053 3.51855 7.24951L2.73926 6.59326C2.65723 6.51123 2.65723 6.38818 2.69824 6.30615C2.78027 6.22412 2.90332 6.22412 2.98535 6.26514L3.76465 6.92139C3.8877 7.00342 3.8877 7.12646 3.80566 7.2085C3.76465 7.24951 3.72363 7.29053 3.6416 7.29053ZM3.06738 8.43896H3.02637L2.04199 8.19287C1.91895 8.15186 1.87793 8.06982 1.87793 7.94678C1.91895 7.82373 2.00098 7.78271 2.12402 7.78271L3.1084 8.02881C3.23145 8.06982 3.27246 8.15186 3.27246 8.2749C3.23145 8.35693 3.14941 8.43896 3.06738 8.43896ZM7.20996 6.51123H7.12793C7.00488 6.47021 6.96387 6.34717 7.0459 6.22412L7.49707 5.28076C7.49707 5.19873 7.62012 5.1167 7.74316 5.19873C7.86621 5.23975 7.90723 5.36279 7.82519 5.48584L7.37402 6.4292C7.37402 6.47021 7.29199 6.51123 7.20996 6.51123ZM8.23535 7.29053C8.19434 7.29053 8.1123 7.24951 8.07129 7.2085C7.98926 7.12646 7.98926 7.00342 8.1123 6.92139L8.8916 6.26514C8.97363 6.18311 9.09668 6.18311 9.17871 6.30615C9.26074 6.38818 9.26074 6.51123 9.13769 6.59326L8.3584 7.24951C8.31738 7.29053 8.27637 7.29053 8.23535 7.29053ZM8.80957 8.43896C8.72754 8.43896 8.64551 8.39795 8.60449 8.2749C8.56348 8.15186 8.64551 8.06982 8.76855 8.02881L9.75293 7.78271C9.87598 7.7417 9.95801 7.82373 9.99902 7.94678C10.04 8.06982 9.95801 8.15186 9.83496 8.19287L8.85059 8.43896H8.80957Z"
          fill={color}
        />
        <path
          d="M10.3477 12.8379H2.14453C1.11914 12.8379 0.298828 12.0176 0.298828 10.9922V2.78906C0.298828 1.76367 1.11914 0.943359 2.14453 0.943359H10.3477C11.373 0.943359 12.1934 1.76367 12.1934 2.78906V10.9922C12.1934 12.0176 11.373 12.8379 10.3477 12.8379ZM2.14453 1.35352C1.36523 1.35352 0.708984 2.00977 0.708984 2.78906V10.9922C0.708984 11.7715 1.36523 12.4277 2.14453 12.4277H10.3477C11.127 12.4277 11.7832 11.7715 11.7832 10.9922V2.78906C11.7832 2.00977 11.127 1.35352 10.3477 1.35352H2.14453Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_510_761">
          <rect width="12.3047" height="12.3047" fill={color} transform="translate(0.09375 0.738281)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Svg;
