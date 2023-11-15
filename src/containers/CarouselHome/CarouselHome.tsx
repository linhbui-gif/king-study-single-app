import React from 'react';
import Carousels from '@/components/Carousels';

import { TCarouselHomeProps } from './CarouselHome.types';
import {Skeleton} from "antd";
import env from "@/env";

const CarouselHome = ({ loading,data }:any) => {
  const banners = data?.banners;
  const Loading = () => {
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
            <Skeleton.Image />
          </Carousels>
        </div>
      </div>
    );
  }
  return (
      <>
        {loading && Loading()}
        {
          !loading && (
            <div className="CarouselHome">
              <div className="CarouselHome-main">
                <Carousels
                  infinite={false}
                  dots={false}
                  arrows={false}
                  autoplay={false}
                  slidesToShow={1}
                >
                  {banners && banners.map((item: any) => (
                    <div key={item.image_location} className="CarouselHome-item">
                      <img src={env.api.baseUrl.backend + item?.image_location} alt={item?.title}/>
                    </div>
                  ))}
                </Carousels>
              </div>
            </div>
          )
        }
      </>
  );
};
export default CarouselHome;
