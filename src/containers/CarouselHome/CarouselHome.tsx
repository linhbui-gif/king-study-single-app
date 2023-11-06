import React from 'react';
import { useRouter } from 'next/router';

import Carousels from '@/components/Carousels';
import KolCard from '@/components/KolCard';
import { Paths } from '@/routers/constants';

import { TCarouselHomeProps } from './CarouselHome.types';
import { dataCarouselHome } from './CarouselHome.data';
import Image from "next/image";

const CarouselHome: React.FC<TCarouselHomeProps> = () => {
  const router = useRouter();

  return (
    <div className="CarouselHome">
      <div className="CarouselHome-main">
        <Carousels
          infinite={false}
          dots={false}
          arrows={false}
          autoplay={false}
          slidesToShow={1}
        >
          {dataCarouselHome.map((item) => (
            <div key={item.id} className="CarouselHome-item">
              <Image src={item.image} alt="" />
            </div>
          ))}
        </Carousels>
      </div>
    </div>
  );
};

export default CarouselHome;
