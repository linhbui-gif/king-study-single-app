import React, {useEffect, useState} from 'react';
import Header from '@/containers/Header';
import Footer from '@/containers/Footer';
import {TGuestLayoutProps} from './GuestLayout.types';
import Navigation from "@/containers/Header/Navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import {CodeSandboxOutlined, HeartOutlined, UserOutlined} from "@ant-design/icons";
import classNames from "classnames";
import Button, {EButtonStyleType} from "@/components/Button";
import Icon, {EIconColor, EIconName} from "@/components/Icon";

const MediaQuery = dynamic(() => import('react-responsive'), {
  ssr: false,
});
const GuestLayout: React.FC<TGuestLayoutProps> = ({ children }) => {
  const [isShowBtnOnTop, setIsShowBtnOnTop] = useState<boolean>(false);
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerScrollShowBtnOnTop = (): void => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 240) {
        setIsShowBtnOnTop(true);
      } else {
        setIsShowBtnOnTop(false);
      }
    });
  };

  useEffect(() => {
    triggerScrollShowBtnOnTop();
  }, []);

  return (
    <div className="GuestLayout">
      <div className="GuestLayout-header">
        <Header />
        <MediaQuery minWidth={768}>
          <Navigation />
        </MediaQuery>
      </div>
      <div className="GuestLayout-body">{children}</div>
      <div className="GuestLayout-footer">
        <Footer />
      </div>
      <MediaQuery minWidth={768}>
      <div className={classNames('GuestLayout-ontop', { visible: isShowBtnOnTop })}>
        <Button
          iconName={EIconName.AngleDown}
          styleType={EButtonStyleType.GRADIENT_ORANGE}
          iconColor={EIconColor.WHITE}
          onClick={(): void => {
            isShowBtnOnTop && scrollToTop();
          }}
        />
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
         <div className="Navigation-bottom-mobile">
           <ul className="Navigation-bottom-mobile-wrapper">
             <li className="Navigation-bottom-mobile-wrapper-item">
               <Link href={'#'} className={"Navigation-bottom-mobile-wrapper-item-link"}>
                 <Icon name={EIconName.HomeOutlined} />
                 <span>Trang chủ</span>
               </Link>
             </li>
             <li className="Navigation-bottom-mobile-wrapper-item">
               <Link href={'#'} className={"Navigation-bottom-mobile-wrapper-item-link"}>
                 <Icon name={EIconName.CodeSandboxOutlined} />
                 <span>Giới thiệu</span>
               </Link>
             </li>
             <li className="Navigation-bottom-mobile-wrapper-item">
               <Link href={'#'} className={"Navigation-bottom-mobile-wrapper-item-link"}>
                 <Icon name={EIconName.HeartOutlined} />
                 <span>Yêu thích</span>
               </Link>
             </li>
             <li className="Navigation-bottom-mobile-wrapper-item">
               <Link href={'#'} className={"Navigation-bottom-mobile-wrapper-item-link"}>
                 <Icon name={EIconName.UserOutlined} />
                 <span>Profile</span>
               </Link>
             </li>
           </ul>
         </div>
      </MediaQuery>
    </div>
  );
};

export default GuestLayout;
