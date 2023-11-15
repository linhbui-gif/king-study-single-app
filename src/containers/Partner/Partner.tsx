import React from 'react';
import Carousels from '@/components/Carousels';
import {Skeleton, Typography} from "antd";
import env from "@/env";

const Partner = ({ loading,data }:any) => {
  const partners = data?.items;
  const Loading = () => {
    return (
      <section className="Partner">
        <div className="container">
          <Typography.Title className={"Title text-left"} level={2}><Skeleton.Input active size={"small"}/></Typography.Title>
          <div className="Partner-main">
            <Carousels
              infinite={false}
              dots={false}
              arrows={false}
              autoplay={false}
              slidesToShow={7}
            >
              {[1,2,3,4,5,6,7].map((item: any) => (
                <div className={'Partner-wrapper'} key={item}>
                  <div key={item.id} className="Partner-item">
                    <Skeleton.Image />
                  </div>
                </div>
              ))}
            </Carousels>
          </div>
        </div>
      </section>
    );
  }
  return (
    <>
      {loading && Loading()}
      {
        !loading && (
          <section className="Partner">
            <div className={'container'}>
              <Typography.Title className={"Title text-left"} level={2}>ĐỐI TÁC TRONG VÀ NGOÀI NƯỚC</Typography.Title>
              <div className="Partner-main">
                <Carousels
                  infinite={true}
                  dots={false}
                  arrows={false}
                  autoplay={true}
                  slidesToShow={7}
                >
                  {partners && partners[31].map((item: any) => (
                    <div className={'Partner-wrapper'} key={item.id}>
                      <div className="Partner-item">
                        <img src={env.api.baseUrl.backend + item?.image_location} alt={item?.title}/>
                      </div>
                    </div>
                  ))}
                </Carousels>
              </div>
            </div>
          </section>
        )
      }
    </>
  );
};
export default Partner;
