import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { Paths } from '@/routers/constants';
import Logo from '@/assets/images/logo.jpg';
import { removeParam } from '@/utils/functions';
import Button, { EButtonStyleType } from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Input from '@/components/Input';
import ImageAvatar from '@/assets/images/image-avatar.png';
import IconRankV from '@/assets/icons/icon-rank-v.svg';
import Avatar from '@/components/Avatar';
import DrawerMenuMobile from '@/containers/Header/DrawerMenuMobile';
import { useModalState, useTrans } from '@/utils/hooks';

import { THeaderProps } from './Header.types.d';
import { dataHeaderChildPageMenu, dataHeaderMenu } from './Header.data';

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});

const Header: React.FC<THeaderProps> = () => {
  const router = useRouter();
  const { asPath } = router;

  const trans = useTrans();

  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [drawerMenuMobileState, handleOpenDrawerMenuMobile, handleCloseDrawerMenuMobile] = useModalState();
  const [isScrollBelowHeader, setIsScrollBelowHeader] = useState<boolean>(false);

  const dataLocation = {
    trans,
    id: router?.query?.id,
  };

  const detailPage = dataHeaderChildPageMenu(dataLocation).find((item) =>
    item.activePaths.includes(removeParam(asPath)),
  );
  const isAuthPage = ['login', 'sign-up'].includes(detailPage?.id as string);
  const isLoginPage = isAuthPage && (detailPage?.id as string) === 'login';
  const isSignUpPage = isAuthPage && (detailPage?.id as string) === 'sign-up';

  const triggerScrollToHeaderHeight = (): void => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 0) {
        setIsScrollBelowHeader(true);
      } else {
        setIsScrollBelowHeader(false);
      }
    });
  };

  useEffect(() => {
    triggerScrollToHeaderHeight();
  }, []);

  return (
    <header className={classNames('Header', { small: isScrollBelowHeader })}>
      <div className="container">
        <div className="Header-wrapper">
          <Row align="middle" justify="space-between" wrap={false}>
            <Col>
              <Row gutter={[8, 8]} wrap={false}>
                <Col>
                  <div className="Header-logo">
                    <Link href={Paths.Home}>
                      <Image src={Logo} alt="" />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col flex={1}>
              <Input
                type="text"
                placeholder={"Tìm kiếm..."}
                showVisiblePassword={false}
                prefix={<Icon name={EIconName.Search} color={EIconColor.BLACK} />}
              />
            </Col>
            <Col>
              <Button
                title="Đăng nhập"
                styleType={EButtonStyleType.GRADIENT_BLUE}
                iconName={EIconName.Unlock}
                iconColor={EIconColor.WHITE}
                reverse
                onClick={(): void => setIsLogged(true)}
              />
            </Col>
            <MediaQuery maxWidth={991}>
              <Col>
                <Button
                  iconName={EIconName.Menu}
                  iconColor={EIconColor.RADICAL_RED}
                  styleType={EButtonStyleType.OUTLINE_RED}
                  onClick={handleOpenDrawerMenuMobile}
                />
              </Col>
            </MediaQuery>
          </Row>
        </div>
      </div>

      <MediaQuery maxWidth={991}>
        <DrawerMenuMobile
          isLogged={isLogged}
          dataLocation={dataLocation}
          {...drawerMenuMobileState}
          onClose={handleCloseDrawerMenuMobile}
          onLogout={(): void => setIsLogged(false)}
          onLogin={(): void => setIsLogged(true)}
        />
      </MediaQuery>
    </header>
  );
};

export default Header;
