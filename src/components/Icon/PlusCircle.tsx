import React from 'react';

import { TIconProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Svg: React.FC<TIconProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" transform="translate(0 0.5)" fill="white" fill-opacity="0.01" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6668 8.49992C14.6668 12.1818 11.6821 15.1666 8.00016 15.1666C4.31826 15.1666 1.3335 12.1818 1.3335 8.49992C1.3335 4.81802 4.31826 1.83325 8.00016 1.83325C11.6821 1.83325 14.6668 4.81802 14.6668 8.49992ZM7.36416 7.86394V5.80527C7.36416 5.72175 7.38061 5.63905 7.41257 5.56188C7.44454 5.48472 7.49138 5.41461 7.55044 5.35555C7.6095 5.29649 7.67961 5.24965 7.75677 5.21768C7.83394 5.18572 7.91664 5.16927 8.00016 5.16927C8.08368 5.16927 8.16638 5.18572 8.24355 5.21768C8.32071 5.24965 8.39082 5.29649 8.44988 5.35555C8.50894 5.41461 8.55579 5.48472 8.58775 5.56188C8.61971 5.63905 8.63616 5.72175 8.63616 5.80527V7.86394H10.6948C10.7783 7.86394 10.8611 7.88039 10.9382 7.91235C11.0154 7.94431 11.0855 7.99116 11.1445 8.05022C11.2036 8.10928 11.2505 8.17939 11.2824 8.25655C11.3144 8.33371 11.3308 8.41642 11.3308 8.49994C11.3308 8.58346 11.3144 8.66616 11.2824 8.74332C11.2505 8.82049 11.2036 8.8906 11.1445 8.94966C11.0855 9.00872 11.0154 9.05556 10.9382 9.08752C10.8611 9.11949 10.7783 9.13594 10.6948 9.13594H8.63616V11.1946C8.63616 11.2781 8.61971 11.3608 8.58775 11.438C8.55579 11.5152 8.50894 11.5853 8.44988 11.6443C8.39082 11.7034 8.32071 11.7502 8.24355 11.7822C8.16638 11.8142 8.08368 11.8306 8.00016 11.8306C7.91664 11.8306 7.83394 11.8142 7.75677 11.7822C7.67961 11.7502 7.6095 11.7034 7.55044 11.6443C7.49138 11.5853 7.44454 11.5152 7.41257 11.438C7.38061 11.3608 7.36416 11.2781 7.36416 11.1946V9.13594H5.30549C5.22197 9.13594 5.13927 9.11949 5.06211 9.08752C4.98494 9.05556 4.91483 9.00872 4.85577 8.94966C4.79672 8.8906 4.74987 8.82049 4.71791 8.74332C4.68595 8.66616 4.66949 8.58346 4.66949 8.49994C4.66949 8.41642 4.68595 8.33371 4.71791 8.25655C4.74987 8.17939 4.79672 8.10928 4.85577 8.05022C4.91483 7.99116 4.98494 7.94431 5.06211 7.91235C5.13927 7.88039 5.22197 7.86394 5.30549 7.86394H7.36416Z"
        fill={color}
      />
    </svg>
  );
};

export default Svg;
