import React from "react";
import {Col, Row, Skeleton, Typography} from "antd";
import Image from "next/image";
import Carousels from "@/components/Carousels";
import {TEventHomeProps} from "@/containers/Event/Event.types";
import {dataCarouselEvent} from "@/containers/Event/Event.data";
import env from "@/env";

const Event:React.FC<TEventHomeProps> = ({ loading, data }) => {
  const dataContent = data?.items
  const Loading = () => {
    return (
      <>
        <Typography.Title className={"Title"} level={2}><Skeleton.Input active size={"small"} /></Typography.Title>
        <div className={"Event-carousel"}>
          <Carousels
            infinite={true}
            dots={false}
            arrows={false}
            autoplay={true}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                },
              }
            ]}
          >
            {[1,2,3].map((item:any) => (
              <div className="Event-carousel-col" key={item.id} >
                <div className="Event-carousel-item">
                  <div className="Event-carousel-item-image">
                    <Skeleton.Image />
                  </div>
                </div>
              </div>
            ))}
          </Carousels>
        </div>
      </>
    )
  }
  return (
    <>
      <section className={'Event'}>
        <div className="container">
          {loading && Loading()}
          {
            !loading && (
              <>
                <Typography.Title className={"Title"} level={2}>HỘI THẢO SỰ KIỆN DU HỌC</Typography.Title>
                <div className={"Event-carousel"}>
                  <Carousels
                    infinite={true}
                    dots={false}
                    arrows={false}
                    autoplay={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    responsive={[
                      {
                        breakpoint: 1600,
                        settings: {
                          slidesToShow: 3,
                        },
                      },
                      {
                        breakpoint: 1200,
                        settings: {
                          slidesToShow: 2,
                        },
                      },
                      {
                        breakpoint: 575,
                        settings: {
                          slidesToShow: 1,
                        },
                      }
                    ]}
                  >
                    {dataContent && dataContent[17].map((item:any) => (
                      <div className="Event-carousel-col" key={item.id} >
                        <div className="Event-carousel-item">
                          <div className="Event-carousel-item-image">
                            <img src={env.api.baseUrl.backend + item['image_location']} alt="" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousels>
                </div>
              </>
            )
          }
        </div>
      </section>
    </>
  )
}
export default Event;
