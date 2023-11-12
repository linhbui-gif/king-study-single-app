import React from 'react';
import Carousels from '@/components/Carousels';

import { TCarouselHomeProps } from './CarouselHome.types';
import { dataCarouselHome } from './CarouselHome.data';
import Image from "next/image";

const CarouselHome: React.FC<TCarouselHomeProps> = () => {
  return (
    <>
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
    </>
  );
};

export default CarouselHome;
