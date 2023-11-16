import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Col, Row } from 'antd';

import { Paths } from '@/routers/constants';
import Logo from '@/assets/images/logo.svg';
import { dataFooterMenu } from '@/containers/Footer/Footer.data';
import { removeParam } from '@/utils/functions';
import SelectLanguage from '@/components/SelectLanguage';

import { TFooterProps } from './Footer.types.d';
import { useTrans } from '@/utils/hooks';

const Footer: React.FC<TFooterProps> = () => {
  const trans = useTrans();
  const { asPath } = useRouter();

  return (
    <footer className="Footer">
      <div className="container">
        <div className="Footer-wrapper">
          <Row gutter={[16,16]}>
            {
              [1,2,3,4].map((element:any) => {
                return (
                  <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} key={element}>
                    <h3 className="Footer-title">Du học</h3>
                    <ul className="Footer-list">
                      <li className="Footer-list-item">
                        <Link href={'#'} className="Footer-list-item-link">Du học Anh</Link>
                      </li>
                      <li className="Footer-list-item">
                        <Link href={'#'} className="Footer-list-item-link">Du học Úc</Link>
                      </li>
                      <li className="Footer-list-item">
                        <Link href={'#'} className="Footer-list-item-link">Du học Mỹ</Link>
                      </li>
                      <li className="Footer-list-item">
                        <Link href={'#'} className="Footer-list-item-link">Du học Canada</Link>
                      </li>
                      <li className="Footer-list-item">
                        <Link href={'#'} className="Footer-list-item-link">Du học Ireland</Link>
                      </li>
                    </ul>
                  </Col>
                )
              })
            }
          </Row>
          <div className="Footer-copyright">
            <p className="Footer-description">{trans?.footer?.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
