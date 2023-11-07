import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { removeParam } from '@/utils/functions';
import { useModalState, useTrans } from '@/utils/hooks';

import { THeaderProps } from './Header.types.d';
import { dataHeaderChildPageMenu, dataHeaderMenu } from './Header.data';

const Header: React.FC<THeaderProps> = () => {
  const router = useRouter();
  const { asPath } = router;

  const trans = useTrans();
  const dataLocation = {
    trans,
    id: router?.query?.id,
  };
  return (
    <nav className={classNames('Navigation')}>
      <div className="container">
        <ul className="Header-list flex items-center justify-around">
          {dataHeaderMenu(dataLocation).map((item) => (
            <li
              key={item.id}
              className={classNames('Header-list-item', {
                active: item.activePaths.includes(removeParam(asPath)),
              })}
            >
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
